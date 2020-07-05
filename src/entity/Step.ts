import { Entity, ObjectIdColumn, Column, BaseEntity, ObjectID } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Step extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: ObjectID;

  @Field()
  @Column()
  public text!: string;
}
