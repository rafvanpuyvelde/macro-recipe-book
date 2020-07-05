import { Entity, ObjectIdColumn, Column, BaseEntity, ObjectID } from "typeorm";

import { ObjectType, Field, ID } from "type-graphql";

import { Ingredient } from "./Ingredient";
import { Macronutrient } from "./Macronutrient";
import { Step } from "./Step";
import { Photo } from "./Photo";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Recipe extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: ObjectID;

  @Field()
  @Column({ nullable: false })
  public name!: string;

  @Field()
  @Column()
  public description!: string;

  @Field()
  @Column({ nullable: false })
  public publishDate!: Date;

  @Field(() => [Ingredient])
  @Column(() => Ingredient)
  public ingredients!: Ingredient[];

  @Field(() => [Macronutrient])
  @Column(() => Macronutrient)
  public macros!: Macronutrient[];

  @Field(() => [Category])
  @Column(() => Category)
  public categories!: Category[];

  @Field(() => [Step])
  @Column(() => Step)
  public steps!: Step[];

  @Field(() => [Photo])
  @Column(() => Photo)
  public photos!: Photo[];
}
