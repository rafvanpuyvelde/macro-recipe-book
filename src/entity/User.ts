import { Entity, ObjectIdColumn, Column, BaseEntity, ObjectID } from "typeorm";
import { ObjectType, ID, Field, Root } from "type-graphql";

import { Recipe } from "./Recipe";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: ObjectID;

  @Field()
  @Column()
  public firstName!: string;

  @Field()
  @Column()
  public lastName!: string;

  @Field()
  public name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Column({ unique: true })
  public email!: string;

  @Column()
  public password!: string;

  @Field(() => [Recipe], { nullable: true })
  @Column(() => Recipe)
  public recipes!: Recipe[];
}
