
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    duration: string;

    @Column()
    instructor: string;

    @Column()
    price: number;

    @Column()
    currency: string;

}