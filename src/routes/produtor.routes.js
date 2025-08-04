import express from 'express';
import { postProdutor, postAtribuirProdutor, putTransferirProdutor } from "../controllers/produtor.controller.js";
const router = express.Router();

router.post('/', postProdutor);
router.post('/atribuir', postAtribuirProdutor);
router.put('/tranferir', putTransferirProdutor);

export default router;