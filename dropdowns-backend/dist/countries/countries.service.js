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
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const country_entity_1 = require("./entities/country.entity");
let CountriesService = class CountriesService {
    constructor(countriesRepository) {
        this.countriesRepository = countriesRepository;
    }
    async create(country) {
        const createdCountry = this.countriesRepository.create(country);
        await this.countriesRepository.save(createdCountry);
        return createdCountry;
    }
    findAll() {
        return this.countriesRepository.find();
    }
    async findOne(id) {
        const todo = await this.countriesRepository.findOne({ where: { id } });
        if (todo)
            return todo;
        throw new common_1.HttpException('Country not found', common_1.HttpStatus.NOT_FOUND);
    }
    async update(id, country) {
        await this.countriesRepository.update(id, country);
        const updatedCountry = await this.countriesRepository.findOne({ where: { id } });
        if (updatedCountry)
            return updatedCountry;
        throw new common_1.HttpException('Country not found', common_1.HttpStatus.NOT_FOUND);
    }
    async remove(id) {
        const deleted = this.countriesRepository.delete(id);
        await this.countriesRepository.delete(id);
        return deleted;
    }
};
CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map