import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

export class Materia {
  @prop({ required: true, unique: true })
  id: number;

  @prop({ required: true, unique: true })
  asignatura: string;

  @prop({ required: true })
  area: string;

  @prop({ ref: () => Materia })
  correlatividades: Ref<Materia>[];

  @prop({ ref: () => Materia })
  equivalencias: Ref<Materia>[];
}

const MateriaModel = getModelForClass(Materia);
export default MateriaModel;
