import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Bookings } from "./Bookings";
import { Owner } from "./Owner";
import { Properties_tags } from "./Properties_tags";

@Entity()
export class Properties {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @ManyToOne(type => Owner, owner => owner.properties)
  @JoinColumn({ name: "owner_id" })
  owner: Owner;

  @Column("datetime")
  created_at

  @Column("datetime")
  updated_at

  @OneToMany(type => Bookings, booking => booking.property)
  bookings: Bookings[]

  @OneToMany(type => Properties_tags, properties_tag => properties_tag.property)
  properties_tags: Properties_tags[]

}
