import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { threats } from 'src/threats/entity/threats.entity';
  import { Users } from 'src/users/user-entity/Users';

  import { ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class incidents {
    @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  createdAt: Date;

  @Column()
  status: string;

  @ManyToMany(() => threats, (threat) => threat.incidents)
  @JoinTable({
    name: 'incident_threats',
    joinColumn: { name: 'incident_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'threat_id', referencedColumnName: 'id' },
  })
  threats: threats[];

  @ManyToOne(() => Users, (user) => user.incidents, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'created_by' })
  createdBy: Users;
}
