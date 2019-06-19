import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Properties } from "./Properties";
import { Comments } from "./Comments";


@Entity()
export class Reviews {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating_value: number;

  @Column()
  review: string;

  @Column("datetime")
  posted_at

  @OneToMany(type => Comments, comment => comment.review)
  comments: Comments[]

  @ManyToOne(type => User, user => user.reviews)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(type => Properties, property => property.reviews)
  @JoinColumn({ name: "property_id" })
  property: Properties;

}
