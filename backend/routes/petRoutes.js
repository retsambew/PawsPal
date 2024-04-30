import express from "express";
import petModel from "../models/petModel.js";
const router = express.Router();

router.post("/add-animal", async (req, res) => {
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
      adoption_status,
      health_status,
      vaccination_status,
      spayed_neutered,
      fostered_adopted_by,
      date_added,
    } = req.body;
    const data = new petModel({
      name: name,
      age: age,
      species: species,
      breed: breed,
      gender: gender,
      size: size,
      description: description,
      image_url: image_url,
      adoption_status: adoption_status,
      health_status: health_status,
      vaccination_status: vaccination_status,
      spayed_neutered: spayed_neutered,
      fostered_adopted_by: fostered_adopted_by,
      date_added: date_added,
    });

    await data.save();

    res.status(200).json("Animal added to database");
  } catch (error) {
    console.error(error);
  }
});

router.get("/all-animals", async (req, res) => {
  try {
    const data = await petModel.find({});
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/animal/:id", async (req, res) => {
  try {
    const animal_id = req.params.id;
    if (animal_id) {
      const findAnimal = await petModel.findOne({ _id: animal_id });
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

router.put("/animal/:id", async (req, res) => {
  try {
    const animal_id = req.params.id;
    const updatedData = req.body;

    if (animal_id) {
      const updateData = await petModel.findByIdAndUpdate(
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

router.delete("/animal/:id", async (req, res) => {
  try {
    const animal_id = req.params.id;
    if (animal_id) {
      const process = await petModel.findByIdAndDelete(animal_id);
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
