import { Entity, ObjectIdColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { Recipe } from "./Recipe";

@ObjectType()
@Entity()
export class Photo extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: number;

  @Field()
  @Column()
  public url!: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.photos)
  public recipe!: Recipe;
}
