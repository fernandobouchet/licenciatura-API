import express from 'express';
import {
  agregarMateria,
  eliminarMateria,
  obtenerMateriaPorId,
  obtenerMaterias,
} from '../controllers/materiaController';

const router = express.Router();

router.get('/', obtenerMaterias);

router.get('/:id', obtenerMateriaPorId);

router.post('/', agregarMateria);

router.delete('/:id', eliminarMateria);

export default router;
