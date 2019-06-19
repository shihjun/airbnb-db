import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Owner } from "./Owner";
import { Reviews } from "./Reviews";


@Entity()
export class Comments {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column("datetime")
  posted_at

  @ManyToOne(type => User, user => user.comments)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(type => Owner, owner => owner.comments)
  @JoinColumn({ name: "owner_id" })
  owner: Owner;

  @ManyToOne(type => Reviews, review => review.comments)
  @JoinColumn({ name: "review_id" })
  review: Reviews;

}
