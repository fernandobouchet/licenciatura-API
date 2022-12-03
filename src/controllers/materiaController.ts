import { Request, Response } from 'express';
import { MateriaModel as Materia } from '../models/index';

const obtenerMaterias = async (_req: Request, res: Response) => {
  const materias = await Materia.find();
  res.status(200).json(materias);
};

const obtenerMateriaPorId = async (req: Request, res: Response) => {
  const materia = await Materia.findById(req.params.id);
  res.status(200).json(materia);
};

const agregarMateria = async (req: Request, res: Response) => {
  const materia = await Materia.create({
    asignatura: req.body.asignatura,
    orden: req.body.orden,
    area: req.body.area,
    hsSemanales: req.body.hsSemanales,
    cargaHorariaTotal: req.body.cargaHorariaTotal,
    correlativas: req.body.correlativas,
  });
  res.status(200).json(materia);
};

const eliminarMateria = async (req: Request, res: Response) => {
  const materia = await Materia.findById(req.params.id);

  if (!materia) {
    res.status(400).json({ error: 'No encontrado' });
  } else {
    await materia.remove();
    res.status(200).json({ id: req.params.id });
  }
};

export {
  obtenerMaterias,
  agregarMateria,
  eliminarMateria,
  obtenerMateriaPorId,
};
