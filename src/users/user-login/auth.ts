import { Users } from "../user-entity/Users";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthResponse{

    @Field()
    accessToken : string

    @Field(()=> Users)
    user: Users;

}