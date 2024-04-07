import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Restaurant {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  image: string;

  @Field()
  starts_at: string

  @Field()
  ends_at: string
}