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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_entity_1 = require("./entities/course.entity");
let CoursesService = class CoursesService {
    constructor(coursesRepository) {
        this.coursesRepository = coursesRepository;
    }
    async create(country) {
        const createdCourse = this.coursesRepository.create(country);
        await this.coursesRepository.save(createdCourse);
        return createdCourse;
    }
    findAll() {
        return this.coursesRepository.find();
    }
    async findOne(id) {
        const todo = await this.coursesRepository.findOne({ where: { id } });
        if (todo)
            return todo;
        throw new common_1.HttpException('Course not found', common_1.HttpStatus.NOT_FOUND);
    }
    async update(id, course) {
        await this.coursesRepository.update(id, course);
        const updatedCourse = await this.coursesRepository.findOne({ where: { id } });
        if (updatedCourse)
            return updatedCourse;
        throw new common_1.HttpException('Course not found', common_1.HttpStatus.NOT_FOUND);
    }
    async remove(id) {
        const deleted = this.coursesRepository.delete(id);
        await this.coursesRepository.delete(id);
        return deleted;
    }
};
CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map