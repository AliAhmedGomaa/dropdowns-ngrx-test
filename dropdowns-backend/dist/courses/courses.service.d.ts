import { DeleteResult, Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
export declare class CoursesService {
    private coursesRepository;
    constructor(coursesRepository: Repository<Course>);
    create(country: CreateCourseDto): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: number): Promise<Course>;
    update(id: number, course: UpdateCourseDto): Promise<Course>;
    remove(id: number): Promise<DeleteResult>;
}
