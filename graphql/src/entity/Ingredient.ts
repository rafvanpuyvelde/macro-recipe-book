import { Entity, ObjectIdColumn, Column, BaseEntity, ObjectID } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { Unit } from "./IngredientUnitEnum";

@ObjectType()
@Entity()
export class Ingredient extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: ObjectID;

  @Field()
  @Column({ nullable: false })
  public name!: string;

  @Field()
  @Column()
  public cost!: number;

  @Field()
  @Column()
  public quantity!: number;

  @Field()
  @Column({
    type: "enum",
    enum: Unit,
    default: Unit.GRAMME,
  })
  public unit!: Unit;
}
