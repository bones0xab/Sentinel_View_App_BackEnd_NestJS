import { InputType, Field } from '@nestjs/graphql';
import { rolesInput } from 'src/roles/inputs/roles.input';

@InputType()
export class UserInput {

  @Field({nullable: true})
  id? : string
  
  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  passwordHash?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field(()=> [rolesInput])
  roles?: rolesInput[]
}
