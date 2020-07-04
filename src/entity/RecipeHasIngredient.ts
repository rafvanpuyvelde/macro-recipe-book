import { Entity, ObjectIdColumn, Column, BaseEntity, ManyToOne } from "typeorm";

import { Unit } from "./IngredientUnitEnum";
import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredient";

@Entity()
export class RecipeHasIngredient extends BaseEntity {
  @ObjectIdColumn()
  public id!: number;

  @Column()
  public recipeId!: number;

  @Column()
  public ingredientId!: number;

  @Column()
  public cost!: number;

  @Column()
  public quantity!: number;

  @Column({
    type: "enum",
    enum: Unit,
    default: Unit.GRAMME,
  })
  public unit!: Unit;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  public recipe!: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipes)
  public ingredient!: Ingredient;
}
