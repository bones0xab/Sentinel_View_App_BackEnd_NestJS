import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { Users } from 'src/users/user-entity/Users';
  import { ObjectType } from "@nestjs/graphql";

@ObjectType()
  @Entity('risk_scores')
  export class riskScores {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('numeric', { nullable: true })
    score: string | null;
  
    @Column('jsonb', { nullable: true })
    factors: object | null;
  
    @Column({ type: 'timestamptz', default: () => 'now()' })
    calculatedAt: Date;
  
    @ManyToOne(() => Users, (user) => user.riskScores, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: Users;
  }
  