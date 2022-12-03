import { prop, Ref } from '@typegoose/typegoose';

export class Materia {
  @prop({ required: true, unique: true })
  asignatura: string;

  @prop({ required: true })
  orden: number;

  @prop({ required: true })
  area: string;

  @prop({ required: true })
  hsSemanales: number;

  @prop({ required: true })
  cargaHorariaTotal: number;

  @prop({ ref: () => Materia })
  correlativas: Ref<Materia>[];
}
