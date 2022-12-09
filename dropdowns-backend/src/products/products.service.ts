import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  async create(product: CreateProductDto): Promise<Product> {
    const createdProduct = this.productRepository.create(product);
    await this.productRepository.save(createdProduct);

    return createdProduct;
  }


  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const todo = await this.productRepository.findOne({ where: { id } });

    if (todo) return todo;

    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }


  async update(id: number, course: UpdateProductDto) {
    await this.productRepository.update(id, course);
    const updatedProduct = await this.productRepository.findOne({ where: { id } });
    
    if (updatedProduct) return updatedProduct;
    
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number): Promise<DeleteResult> {
    const deleted = this.productRepository.delete(id);
    await this.productRepository.delete(id);
    return deleted;
  }
}
