import express from "express";
const router = express.Router();
import postEmpresa from "../controllers/empresa.controller.js";

router.post('/empresas', postEmpresa);

export default router;
