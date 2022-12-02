import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Materia } from './materiaModel';

class Licenciatura {
  @prop({ required: true, unique: true })
  id: number;

  @prop({ required: true, unique: true })
  nombre: string;

  @prop({ type: () => Materia })
  año: [[Ref<Materia>[]]];
}

const LicenciaturaModel = getModelForClass(Licenciatura);
export default LicenciaturaModel;
