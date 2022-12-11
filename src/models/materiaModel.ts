import { prop } from '@typegoose/typegoose';

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

  @prop()
  correlativas: Materia[];

  @prop()
  optativas: Materia[];
}
