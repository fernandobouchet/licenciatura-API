"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const periodoController_1 = require("../controllers/periodoController");
const router = express_1.default.Router();
router.get('/', periodoController_1.obtenerPeriodos);
router.get('/:id', periodoController_1.obtenerPeriodoPorId);
router.post('/', periodoController_1.agregarPeriodo);
router.delete('/:id', periodoController_1.eliminarPeriodo);
exports.default = router;
