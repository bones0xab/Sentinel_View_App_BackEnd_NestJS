import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { AuditLogs } from "src/audits/entitie/Audits";
import { consents } from "src/consents/entity/consents.entity";
import { incidents } from "src/incidents/entity/incidents.entity";
import { riskScores } from "src/riskscores/entity/riskscores.entity";
import { roles } from "src/roles/entity/roles.entity";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@Entity("users")
@ObjectType()
export class Users {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;


  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field({nullable: true})
  @Column()
  passwordHash: string;

  @Field()
  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;


  @OneToMany(() => AuditLogs, (auditLogs) => auditLogs.user)
  auditLogs : AuditLogs[]


  @OneToMany(() => consents, (consents) => consents.user)
  consents: consents[];

  @OneToMany(() => incidents, (incidents) => incidents.createdBy)
  incidents: incidents[];

  @OneToMany(() => riskScores, (riskScores) => riskScores.user)
  riskScores: riskScores[];

  @Field(() => [roles], { nullable: true })
  @ManyToMany(() => roles, r => r.users, {
    cascade: true,           // allow save() to update the join table
  })
  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: roles[];
}
