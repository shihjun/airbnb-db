import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Properties } from "./Properties";
import { Tags } from "./Tags";

@Entity()
export class Properties_tags {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Tags, tag => tag.properties_tags)
  @JoinColumn({ name: "tag_id" })
  tag: Tags;

  @ManyToOne(type => Properties, property => property.properties_tags)
  @JoinColumn({ name: "property_id" })
  property: Properties;

}
