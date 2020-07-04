import { Entity, ObjectIdColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID, Root } from "type-graphql";

@ObjectType()
@Entity()
export class Macronutrient extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: number;

  @Field()
  @Column({ nullable: false })
  public calories(@Root() parent: Macronutrient): number {
    return parent.protein * 4 + parent.carbs * 4 + parent.fats * 9;
  }

  @Field()
  @Column({ nullable: false })
  public protein!: number;

  @Field()
  @Column({ nullable: false })
  public fats!: number;

  @Field()
  @Column({ nullable: false })
  public carbs!: number;
}
