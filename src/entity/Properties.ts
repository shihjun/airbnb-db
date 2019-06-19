import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Bookings } from "./Bookings";
import { Owner } from "./Owner";
import { Properties_tags } from "./Properties_tags";
import { Locality } from "./Locality";
import { Reviews } from "./Reviews";

@Entity()
export class Properties {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unit_no: string;

  @Column()
  building_name: string;

  @Column()
  street: string;

  @Column("datetime")
  created_at

  @Column("datetime")
  updated_at

  @OneToMany(type => Bookings, booking => booking.property)
  bookings: Bookings[]

  @OneToMany(type => Properties_tags, properties_tag => properties_tag.property)
  properties_tags: Properties_tags[]

  @OneToMany(type => Reviews, review => review.property)
  reviews: Reviews[]

  @ManyToOne(type => Owner, owner => owner.properties)
  @JoinColumn({ name: "owner_id" })
  owner: Owner;

  @ManyToOne(type => Locality, locality => locality.properties)
  @JoinColumn({ name: "location_id" })
  locality: Locality;



}
