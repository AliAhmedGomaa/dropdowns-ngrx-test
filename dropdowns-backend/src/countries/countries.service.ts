import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
  ) { }

  async create(country: CreateCountryDto): Promise<Country> {
    const createdCountry = this.countriesRepository.create(country);
    await this.countriesRepository.save(createdCountry);

    return createdCountry;
  }


  findAll(): Promise<Country[]> {
    return this.countriesRepository.find();
  }

  async findOne(id: number): Promise<Country> {
    const todo = await this.countriesRepository.findOne({ where: { id } });

    if (todo) return todo;

    throw new HttpException('Country not found', HttpStatus.NOT_FOUND);
  }


  async update(id: number, country: UpdateCountryDto) {
    await this.countriesRepository.update(id, country);
    const updatedCountry = await this.countriesRepository.findOne({ where: { id } });
    
    if (updatedCountry) return updatedCountry;
    
    throw new HttpException('Country not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number): Promise<DeleteResult> {
    const deleted = this.countriesRepository.delete(id);
    await this.countriesRepository.delete(id);
    return deleted;
  }

}
