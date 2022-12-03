import express from 'express';
import {
  agregarCarrera,
  eliminarCarrera,
  obtenerCarreraPorId,
  obtenerCarreras,
} from '../controllers/carreraController';

const router = express.Router();

router.get('/', obtenerCarreras);

router.get('/:id', obtenerCarreraPorId);

router.post('/', agregarCarrera);

router.delete('/:id', eliminarCarrera);

export default router;
