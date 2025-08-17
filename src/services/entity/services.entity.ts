import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { threats } from "src/threats/entity/threats.entity";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity("services")
export class services {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => threats, (threats) => threats.sourceService)
  threats: threats[];

  @OneToMany(() => threats, (threats) => threats.targetService)
  threats2: threats[];
}
