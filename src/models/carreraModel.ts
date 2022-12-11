import { prop, Ref } from '@typegoose/typegoose';
import { Periodo } from './periodoModel';

export class Carrera {
  @prop({ required: true, unique: true })
  carreraId: number;

  @prop({ required: true, unique: true })
  nombre: string;

  @prop({ required: true, ref: () => Periodo })
  periodos: Ref<Periodo>[];
}
