"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./database/db"));
const carreraRoute_1 = __importDefault(require("./routes/carreraRoute"));
const materiaRoute_1 = __importDefault(require("./routes/materiaRoute"));
const periodoRoute_1 = __importDefault(require("./routes/periodoRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3000;
(0, db_1.default)();
app.use('/api/carrera', carreraRoute_1.default);
app.use('/api/periodo', periodoRoute_1.default);
app.use('/api/materia', materiaRoute_1.default);
app.listen(PORT, () => {
    console.log(`Servidor conectado al puerto ${PORT}`);
});
