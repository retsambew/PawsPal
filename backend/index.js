import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import lostPetRoutes from "./routes/lostPetRoutes.js";
import mongoConnection from "./config/db.js";
const app = express();
app.use(cors());
app.use(express.json({limit : '50mb'}));

app.use((req,res,next) => {
    console.log(`Request made to: ${req.method} ${req.url}`);
    next();
});

app.use('/api/user', authRoutes);
app.use('/api/user/blog', blogRoutes);
app.use('/api/user/lostPet', lostPetRoutes);
app.use('/api/user/pet', petRoutes);

mongoConnection();

app.listen(4000, () => {
    console.log("Server is listening");
});