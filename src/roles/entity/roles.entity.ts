import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import { permissions } from 'src/permissions/entity/permissions.entity';
  import { Users } from 'src/users/user-entity/Users';
  import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity('roles')
export class roles {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Field()
    @Column({ unique: true })
    name: string;
  
    @ManyToMany(() => permissions, (permission) => permission.roles)
    permissions: permissions[];
  
    
    // @JoinTable({
    //   name: 'user_roles',
    //   joinColumn: { name: 'role_id', referencedColumnName: 'id' },
    //   inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
    // })
    @Field(() => [Users])
    @ManyToMany(() => Users, (user) => user.roles)
    users: Users[];
  }
  