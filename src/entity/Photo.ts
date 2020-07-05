import { Entity, ObjectIdColumn, BaseEntity, Column, ObjectID } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Photo extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: ObjectID;

  @Field()
  @Column()
  public url!: string;
}
