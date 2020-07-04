import { Entity, ObjectIdColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { ObjectType, Field, ID, Root } from "type-graphql";
import { Recipe } from "./Recipe";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  public id!: number;

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

  @OneToMany(() => Recipe, (recipe) => recipe.author)
  public recipes!: Recipe[];
}
