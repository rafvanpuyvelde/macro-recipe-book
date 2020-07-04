import { Length, IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsUniqueEmail } from "./isUniqueEmail";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName!: string;

  @Field()
  @Length(1, 255)
  lastName!: string;

  @Field()
  @IsEmail()
  @IsUniqueEmail({ message: "Email already exists" })
  email!: string;

  @Field()
  password!: string;
}
