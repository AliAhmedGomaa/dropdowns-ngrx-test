import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) { }

  async create(country: CreateCourseDto): Promise<Course> {
    const createdCourse = this.coursesRepository.create(country);
    await this.coursesRepository.save(createdCourse);

    return createdCourse;
  }


  findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  async findOne(id: number): Promise<Course> {
    const todo = await this.coursesRepository.findOne({ where: { id } });

    if (todo) return todo;

    throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
  }


  async update(id: number, course: UpdateCourseDto) {
    await this.coursesRepository.update(id, course);
    const updatedCourse = await this.coursesRepository.findOne({ where: { id } });
    
    if (updatedCourse) return updatedCourse;
    
    throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number): Promise<DeleteResult> {
    const deleted = this.coursesRepository.delete(id);
    await this.coursesRepository.delete(id);
    return deleted;
  }
}
