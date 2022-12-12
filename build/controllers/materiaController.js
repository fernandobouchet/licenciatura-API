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
exports.obtenerMateriaPorId = exports.eliminarMateria = exports.agregarMateria = exports.obtenerMaterias = void 0;
const index_1 = require("../models/index");
const obtenerMaterias = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materias = yield index_1.MateriaModel.find().populate('correlativas');
    res.status(200).json(materias);
});
exports.obtenerMaterias = obtenerMaterias;
const obtenerMateriaPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materia = yield index_1.MateriaModel.findById(req.params.id).populate('correlativas');
    res.status(200).json(materia);
});
exports.obtenerMateriaPorId = obtenerMateriaPorId;
const agregarMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materia = yield index_1.MateriaModel.create({
        asignatura: req.body.asignatura,
        materiaId: req.body.materiaId,
        area: req.body.area,
        hsSemanales: req.body.hsSemanales,
        cargaHorariaTotal: req.body.cargaHorariaTotal,
        correlativas: req.body.correlativas,
    });
    res.status(200).json(materia);
});
exports.agregarMateria = agregarMateria;
const eliminarMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materia = yield index_1.MateriaModel.findById(req.params.id);
    if (!materia) {
        res.status(400).json({ error: 'No encontrado' });
    }
    else {
        yield materia.remove();
        res.status(200).json({ id: req.params.id });
    }
});
exports.eliminarMateria = eliminarMateria;
