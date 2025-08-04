import express from 'express';
import { postProdutor, postAtribuirProdutor, putTransferirProdutor } from "../controllers/produtor.controller.js";
const router = express.Router();

router.post('/produtores', postProdutor);
router.post('/produtores/atribuir', postAtribuirProdutor);
router.put('/produtores/tranferir', putTransferirProdutor);

export default router;