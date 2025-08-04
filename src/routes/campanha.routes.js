import express from "express";
const router = express.Router();
import postCampanha from "../controllers/campanha.controller.js";

router.post("/campanhas", postCampanha);

export default router;
