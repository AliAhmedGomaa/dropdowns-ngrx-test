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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(product) {
        const createdProduct = this.productRepository.create(product);
        await this.productRepository.save(createdProduct);
        return createdProduct;
    }
    findAll() {
        return this.productRepository.find();
    }
    async findOne(id) {
        const todo = await this.productRepository.findOne({ where: { id } });
        if (todo)
            return todo;
        throw new common_1.HttpException('Product not found', common_1.HttpStatus.NOT_FOUND);
    }
    async update(id, course) {
        await this.productRepository.update(id, course);
        const updatedProduct = await this.productRepository.findOne({ where: { id } });
        if (updatedProduct)
            return updatedProduct;
        throw new common_1.HttpException('Product not found', common_1.HttpStatus.NOT_FOUND);
    }
    async remove(id) {
        const deleted = this.productRepository.delete(id);
        await this.productRepository.delete(id);
        return deleted;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map