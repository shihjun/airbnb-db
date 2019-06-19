import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Bookings } from "./Bookings";
import { Reviews } from "./Reviews";
import { Comments } from "./Comments";

@Entity()
export class User {

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

    @OneToMany(type => Bookings, booking => booking.user)
    bookings: Bookings[]

    @OneToMany(type => Reviews, review => review.user)
    reviews: Reviews[]

    @OneToMany(type => Comments, comment => comment.user)
    comments: Comments[]

}
