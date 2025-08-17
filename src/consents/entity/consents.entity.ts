import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { dataTypes } from 'src/datatypes/entity/datatypes.entity';
  import { Users } from 'src/users/user-entity/Users';
  import { ObjectType } from "@nestjs/graphql";

@ObjectType()
  @Entity('consents')
  export class consents {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    granted: boolean;
  
    @Column({ type: 'timestamptz', default: () => 'now()' })
    timestamp: Date;
  
    @ManyToOne(() => dataTypes)
    @JoinColumn({ name: 'data_type_id' })
    dataType: dataTypes;
  
    @ManyToOne(() => Users, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: Users;
  }
  