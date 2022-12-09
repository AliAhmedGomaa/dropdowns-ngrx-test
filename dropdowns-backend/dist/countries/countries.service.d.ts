import { DeleteResult, Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
export declare class CountriesService {
    private countriesRepository;
    constructor(countriesRepository: Repository<Country>);
    create(country: CreateCountryDto): Promise<Country>;
    findAll(): Promise<Country[]>;
    findOne(id: number): Promise<Country>;
    update(id: number, country: UpdateCountryDto): Promise<Country>;
    remove(id: number): Promise<DeleteResult>;
}
