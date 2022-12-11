import { prop, Ref } from '@typegoose/typegoose';

export class Materia {
  @prop({ required: true, unique: true })
  asignatura: string;

  @prop({ required: true, unique: true })
  materiaId: number;

  @prop()
  area: string;

  @prop({ required: true })
  hsSemanales: number;

  @prop({ required: true })
  cargaHorariaTotal: number;

  @prop({ ref: () => Materia })
  correlativas: Ref<Materia>[];

  @prop({ ref: () => Materia })
  optativas: Ref<Materia>[];
}
