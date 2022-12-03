import { getModelForClass } from '@typegoose/typegoose';
import { Carrera } from './carreraModel';
import { Materia } from './materiaModel';
import { Periodo } from './periodoModel';

export const CarreraModel = getModelForClass(Carrera);
export const MateriaModel = getModelForClass(Materia);
export const PeriodoModel = getModelForClass(Periodo);
