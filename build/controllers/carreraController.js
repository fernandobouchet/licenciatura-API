"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCarreraPorId = exports.eliminarCarrera = exports.agregarCarrera = exports.obtenerCarreras = void 0;
const index_1 = require("../models/index");
const obtenerCarreras = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carreras = yield index_1.CarreraModel.find();
    res.status(200).json(carreras);
});
exports.obtenerCarreras = obtenerCarreras;
const obtenerCarreraPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carrera = yield index_1.CarreraModel.findById(req.params.id);
    const periodos = yield index_1.PeriodoModel.find({ carreraId: req.params.id }).populate('materias');
    if (carrera && periodos) {
        carrera.periodos = periodos;
    }
    res.status(200).json(carrera);
});
exports.obtenerCarreraPorId = obtenerCarreraPorId;
const agregarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carrera = yield index_1.CarreraModel.create({
        nombre: req.body.nombre,
        carreraId: req.body.carreraId,
    });
    res.status(200).json(carrera);
});
exports.agregarCarrera = agregarCarrera;
const eliminarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carrera = yield index_1.CarreraModel.findById(req.params.id);
    if (!carrera) {
        res.status(400).json({ error: 'No encontrado' });
    }
    else {
        yield carrera.remove();
        res.status(200).json({ id: req.params.id });
    }
});
exports.eliminarCarrera = eliminarCarrera;
