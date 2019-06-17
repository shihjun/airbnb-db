import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Bookings } from "./Bookings";
import { Owner } from "./Owner";

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

}
