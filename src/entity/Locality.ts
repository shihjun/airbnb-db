import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties } from "./Properties";


@Entity()
export class Locality {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postal_code: number;

  @Column("datetime")
  created_at

  @Column("datetime")
  updated_at

  @OneToMany(type => Properties, property => property.locality)
  properties: Properties[]

}
