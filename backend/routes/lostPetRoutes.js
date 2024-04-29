import express from "express";
import petModel from "../models/lostPetModel.js";
const router = express.Router();

router.post("/add-lost-animal", async (req, res) => {
  try {
    const {
      name,
      age,
      species,
      breed,
      gender,
      size,
      description,
      image_url,
      lastSeenOn,
      pet_owner,
      date_added,
    } = req.body;

    const data = new lostPetModel({
      name: name,
      age: age,
      species: species,
      breed: breed,
      gender: gender,
      size: size,
      description: description,
      image_url: image_url,
      lastSeenOn : lastSeenOn,
      pet_owner : pet_owner,
      date_added: date_added,
    });

    await data.save();

    res.status(200).json("Lost animal added to database");
  } catch (error) {
    console.error(error);
  }
});

router.get("/all-lost-animals", async (req, res) => {
  try {
    const data = await lostPetModel.find({});
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/lost-animal/:id", async (req, res) => {
  try {
    const animal_id = req.params.id;
    if (animal_id) {
      const findAnimal = await lostPetModel.findOne({ _id: animal_id });
      if (findAnimal) {
        res.status(200).json(findAnimal);
      } else {
        res.status(400).json("Animal doesn't exist in database");
      }
    } else {
      res.status(400).json("Can not fetch Id of Animal");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/lost-animal/:id", async (req, res) => {
  try {
    const animal_id = req.params.id;
    const updatedData = req.body;

    if (animal_id) {
      const updateData = await lostPetModel.findByIdAndUpdate(
        animal_id,
        updatedData,
        { new: true }
      );
      if (updateData) {
        res.status(200).json(updateData);
      } else {
        res.status(404).json({ error: "Animal not found" });
      }
    } else {
      res.status(400).json({ error: "Invalid request data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/lost-animal/:id", async (req, res) => {
  try {
    const animal_id = req.params.id;
    if (animal_id) {
      const process = await lostPetModel.findByIdAndDelete(animal_id);
      if (process) {
        res.status(200).json("Deleted the animal data with respective id");
      } else {
        res.status(404).json({ error: "Animal not found" });
      }
    } else {
      res.status(400).json({ error: "Invalid request data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;