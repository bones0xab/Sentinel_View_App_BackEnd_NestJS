import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class rolesInput {
    

    @Field()
    id : string
    
    @Field()
    name : string
}
