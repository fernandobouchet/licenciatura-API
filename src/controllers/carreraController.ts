import { Request, Response } from 'express';
import {
  CarreraModel as Carreras,
  PeriodoModel as Periodos,
} from '../models/index';

const obtenerCarreras = async (_req: Request, res: Response) => {
  const carreras = await Carreras.find();
  res.status(200).json(carreras);
};

const obtenerCarreraPorId = async (req: Request, res: Response) => {
  const carrera = await Carreras.findById(req.params.id);
  const periodos = await Periodos.find({ carreraId: req.params.id }).populate(
    'materias'
  );

  if (carrera && periodos) {
    carrera.periodos = periodos;
  }
  res.status(200).json(carrera);
};

const agregarCarrera = async (req: Request, res: Response) => {
  const carrera = await Carreras.create({
    nombre: req.body.nombre,
  });
  res.status(200).json(carrera);
};

const eliminarCarrera = async (req: Request, res: Response) => {
  const carrera = await Carreras.findById(req.params.id);

  if (!carrera) {
    res.status(400).json({ error: 'No encontrado' });
  } else {
    await carrera.remove();
    res.status(200).json({ id: req.params.id });
  }
};

export {
  obtenerCarreras,
  agregarCarrera,
  eliminarCarrera,
  obtenerCarreraPorId,
};
