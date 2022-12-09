import { IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
    @IsString()
    name: string;

    @IsString()
    duration: string;

    @IsString()
    instructor: string;

    @IsNumber()
    price: number;

    @IsString()
    currency: string;

}