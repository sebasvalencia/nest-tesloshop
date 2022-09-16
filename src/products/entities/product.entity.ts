import { Column, Entity, PrimaryColumn } from 'typeorm';

// Is a representation of an object on the DB - means a table
@Entity()
export class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;
}
