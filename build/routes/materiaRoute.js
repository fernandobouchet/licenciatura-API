"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const materiaController_1 = require("../controllers/materiaController");
const router = express_1.default.Router();
router.get('/', materiaController_1.obtenerMaterias);
router.get('/:id', materiaController_1.obtenerMateriaPorId);
router.post('/', materiaController_1.agregarMateria);
router.delete('/:id', materiaController_1.eliminarMateria);
exports.default = router;
