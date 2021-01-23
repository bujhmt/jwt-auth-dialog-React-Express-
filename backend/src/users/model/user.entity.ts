import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {BaseEntity} from "../../model/base.entity";

@Entity({ name: 'user' })
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 300, unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    password: string;
}