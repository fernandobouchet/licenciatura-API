import { prop, Ref } from '@typegoose/typegoose';
import { Carrera } from './carreraModel';
import { Materia } from './materiaModel';

export class Periodo {
  @prop({ required: true })
  orden: number;

  @prop({ ref: () => Materia })
  materias: Ref<Materia>[];

  @prop({ ref: () => Carrera })
  carreraId: Ref<Carrera>;
}
