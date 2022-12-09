import { DeleteResult, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(product: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, course: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<DeleteResult>;
}
