import express from 'express';
import {
  agregarPeriodo,
  eliminarPeriodo,
  obtenerPeriodoPorId,
  obtenerPeriodos,
} from '../controllers/periodoController';

const router = express.Router();

router.get('/', obtenerPeriodos);

router.get('/:id', obtenerPeriodoPorId);

router.post('/', agregarPeriodo);

router.delete('/:id', eliminarPeriodo);

export default router;
