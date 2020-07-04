import {
  Entity,
  ObjectIdColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { ObjectType, Field, ID } from "type-graphql";

import { User } from "./User";
import { RecipeHasIngredient } from "./RecipeHasIngredient";
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
  public id!: number;

  @Field()
  @Column({ nullable: false })
  public name!: string;

  @Field()
  @Column()
  public description!: string;

  @Field()
  @Column({ nullable: false })
  public publishDate!: Date;

  @Field(() => ID)
  @ManyToOne(() => User, (user) => user.recipes)
  public author!: User;

  @Field(() => [Ingredient])
  @OneToMany(
    () => RecipeHasIngredient,
    (recipeHasIngredient) => recipeHasIngredient.recipe
  )
  public ingredients!: Ingredient[];

  @Field(() => [Macronutrient])
  @ManyToMany(() => Macronutrient)
  @JoinTable()
  macros!: Macronutrient[];

  @Field(() => [Category])
  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];

  @Field(() => [Step])
  @OneToMany(() => Step, (step) => step.recipe)
  steps!: Step[];

  @Field(() => [Photo])
  @OneToMany(() => Photo, (photo) => photo.recipe)
  photos!: Photo[];
}
