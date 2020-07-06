import { Entity, ObjectIdColumn, Column, BaseEntity, ObjectID } from "typeorm";
import { ObjectType, Field, ID, Root } from "type-graphql";

@ObjectType()
@Entity()
export class Macronutrient extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: ObjectID;

  @Field()
  @Column({ nullable: false })
  public calories(@Root() parent: Macronutrient): number {
    return 4 * parent.carbs + 4 * parent.protein + 9 * parent.fats;
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
