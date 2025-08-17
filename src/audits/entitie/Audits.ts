import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "src/users/user-entity/Users";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity('audit_logs')
export class AuditLogs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  action: string;

  @Column({ type: 'jsonb', nullable: true })
  details?: object;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  timestamp: Date;

  @ManyToOne(() => Users, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: Users;
}
