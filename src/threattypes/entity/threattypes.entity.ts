import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { threats } from "src/threats/entity/threats.entity";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity("threat_types")
export class threattypes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => threats, (threat) => threat.threatType)
  threats: threats[];
}
