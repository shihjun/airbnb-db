import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Properties } from "./Properties";


@Entity()
export class Owner {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  contact_no: string;

  @Column("datetime")
  created_at

  @Column("datetime")
  updated_at

  @OneToMany(type => Properties, property => property.owner)
  properties: Properties[]

}
