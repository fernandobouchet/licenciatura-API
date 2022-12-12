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
exports.obtenerPeriodoPorId = exports.eliminarPeriodo = exports.agregarPeriodo = exports.obtenerPeriodos = void 0;
const index_1 = require("../models/index");
const obtenerPeriodos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const periodos = yield index_1.PeriodoModel.find();
    res.status(200).json(periodos);
});
exports.obtenerPeriodos = obtenerPeriodos;
const obtenerPeriodoPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const periodos = yield index_1.PeriodoModel.findById(req.params.id).populate('materias');
    res.status(200).json(periodos);
});
exports.obtenerPeriodoPorId = obtenerPeriodoPorId;
const agregarPeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const periodo = yield index_1.PeriodoModel.create({
        orden: req.body.orden,
        carreraId: req.body.carreraId,
        materias: req.body.materias,
    });
    res.status(200).json(periodo);
});
exports.agregarPeriodo = agregarPeriodo;
const eliminarPeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const periodo = yield index_1.PeriodoModel.findById(req.params.id);
    if (!periodo) {
        res.status(400).json({ error: 'No encontrado' });
    }
    else {
        yield periodo.remove();
        res.status(200).json({ id: req.params.id });
    }
});
exports.eliminarPeriodo = eliminarPeriodo;
