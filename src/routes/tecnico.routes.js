import express from 'express';
import { postTecnico, listarProdutoresPorTecnicos } from '../controllers/tecnico.controller.js';

const router = express.Router();

router.post('/', postTecnico);
router.get('/:id/produtores', listarProdutoresPorTecnicos);

export default router;

