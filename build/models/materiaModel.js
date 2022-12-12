"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class Materia {
}
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Materia.prototype, "asignatura", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", Number)
], Materia.prototype, "materiaId", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Materia.prototype, "area", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Materia.prototype, "hsSemanales", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Materia.prototype, "cargaHorariaTotal", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => Materia }),
    __metadata("design:type", Array)
], Materia.prototype, "correlativas", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => Materia }),
    __metadata("design:type", Array)
], Materia.prototype, "optativas", void 0);
exports.Materia = Materia;
