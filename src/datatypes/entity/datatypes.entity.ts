import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { consents } from "src/consents/entity/consents.entity" ;

import { ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity("data_types")

export class dataTypes {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => consents, (consents) => consents.dataType)
  consents: consents[];
}
