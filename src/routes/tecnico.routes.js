import express from 'express';
import postTecnico from '../controllers/tecnico.controller.js';

const router = express.Router();

router.post('/tecnicos', postTecnico);

export default router;

