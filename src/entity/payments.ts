import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Bookings } from "./Bookings";


@Entity()
export class Payments {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  amount: number

  @ManyToOne(type => Bookings, booking => booking.payments)
  @JoinColumn({ name: "booking_id" })
  booking: Bookings;

}
