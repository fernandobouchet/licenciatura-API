import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Materia } from './Materia';

class Tecnicatura {
  @prop({ required: true, unique: true })
  id: number;

  @prop({ required: true, unique: true })
  nombre: string;

  @prop({ type: () => Materia })
  cuatrimestre: [Ref<Materia>[]];
}

const TecnicaturaModel = getModelForClass(Tecnicatura);
export default TecnicaturaModel;
