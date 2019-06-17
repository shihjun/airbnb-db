import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Properties } from "./Properties";

@Entity()
export class Bookings {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Properties, property => property.bookings)
  @JoinColumn({ name: "property_id" })
  property: Properties;

  @Column()
  price: string;

  @Column("date")
  booking_date

  @ManyToOne(type => User, user => user.bookings)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column("datetime")
  check_in

  @Column("datetime")
  check_out

  @Column("datetime")
  created_at

  @Column("datetime")
  updated_at

}
