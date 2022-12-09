import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsNumber()
    price: number;
    
    @IsString()
    color: string;

    @IsNumber()
    quantity: number;

}