import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Document {
    @PrimaryGeneratedColumn('uuid')
    identifier: string;

    @Column()
    name: string;
}
