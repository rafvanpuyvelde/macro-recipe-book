import { Entity, ObjectIdColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Recipe } from "./Recipe";

@ObjectType()
@Entity()
export class Step extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: number;

  @Field()
  @Column({ nullable: false })
  public text!: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.steps)
  public recipe!: Recipe;
}
