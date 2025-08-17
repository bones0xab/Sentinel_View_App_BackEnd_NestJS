import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class auditInput{

    @Field()
    id: string;
  
    @Field()
    action: string;
  
    @Field()
    details?: object;
  
    @Field()
    timestamp: Date;
}