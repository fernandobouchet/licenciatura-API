"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carreraController_1 = require("../controllers/carreraController");
const router = express_1.default.Router();
router.get('/', carreraController_1.obtenerCarreras);
router.get('/:id', carreraController_1.obtenerCarreraPorId);
router.post('/', carreraController_1.agregarCarrera);
router.delete('/:id', carreraController_1.eliminarCarrera);
exports.default = router;
