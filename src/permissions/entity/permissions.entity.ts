import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import { roles } from 'src/roles/entity/roles.entity';
  import { ObjectType } from "@nestjs/graphql";

@ObjectType()
  @Entity('permissions')
  export class permissions {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    name: string;
  
    @ManyToMany(() => roles, (role) => role.permissions)
    @JoinTable({
      name: 'role_permissions',
      joinColumn: { name: 'permission_id', referencedColumnName: 'id' },
      inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
    })
    roles: roles[];
  }
  