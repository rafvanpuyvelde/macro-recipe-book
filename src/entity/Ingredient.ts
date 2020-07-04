import { Entity, ObjectIdColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { RecipeHasIngredient } from "./RecipeHasIngredient";
import { Recipe } from "./Recipe";

@ObjectType()
@Entity()
export class Ingredient extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: number;

  @Field()
  @Column({ nullable: false })
  public name!: string;

  @Field(() => [Recipe])
  @OneToMany(
    () => RecipeHasIngredient,
    (recipeHasIngredient) => recipeHasIngredient.ingredient
  )
  public recipes!: Recipe[];
}
