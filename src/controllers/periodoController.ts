import { Request, Response } from 'express';
import { PeriodoModel as Periodo } from '../models/index';

const obtenerPeriodos = async (_req: Request, res: Response) => {
  const periodos = await Periodo.find();
  res.status(200).json(periodos);
};

const obtenerPeriodoPorId = async (req: Request, res: Response) => {
  const periodos = await Periodo.findById(req.params.id).populate('materias');
  res.status(200).json(periodos);
};

const agregarPeriodo = async (req: Request, res: Response) => {
  const periodo = await Periodo.create({
    orden: req.body.orden,
    nombre: req.body.nombre,
    carreraId: req.body.carreraId,
    materias: req.body.materias,
  });
  res.status(200).json(periodo);
};

const eliminarPeriodo = async (req: Request, res: Response) => {
  const periodo = await Periodo.findById(req.params.id);

  if (!periodo) {
    res.status(400).json({ error: 'No encontrado' });
  } else {
    await periodo.remove();
    res.status(200).json({ id: req.params.id });
  }
};

export {
  obtenerPeriodos,
  agregarPeriodo,
  eliminarPeriodo,
  obtenerPeriodoPorId,
};
