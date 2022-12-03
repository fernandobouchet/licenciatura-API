import 'dotenv/config';
import express from 'express';
import connectDB from './database/db';
import carreraRoute from './routes/carreraRoute';
import materiaRoute from './routes/materiaRoute';
import periodoRoute from './routes/periodoRoute';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.use('/api/carrera', carreraRoute);
app.use('/api/periodo', periodoRoute);
app.use('/api/materia', materiaRoute);

app.listen(PORT, () => {
  console.log(`Servidor conectado al puerto ${PORT}`);
});
