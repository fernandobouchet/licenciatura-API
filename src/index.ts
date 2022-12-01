import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello typescript express!');
});

app.listen(PORT, () => {
  console.log(`Servidor conectado al puerto ${PORT}`);
});
