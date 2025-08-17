import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { incidents } from 'src/incidents/entity/incidents.entity';
  import { services } from 'src/services/entity/services.entity';
  import { threattypes } from 'src/threattypes/entity/threattypes.entity';
  import { ObjectType } from "@nestjs/graphql";

@ObjectType()
  @Entity('threats')
  export class threats {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'jsonb', nullable: true })
    metadata: object | null;
  
    @Column({ type: 'timestamp with time zone', default: () => 'now()' })
    detectedAt: Date;
  
    @ManyToMany(() => incidents, (incident) => incident.threats)
    incidents: incidents[];
  
    @ManyToOne(() => services, (service) => service.threats, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'source_service_id' })
    sourceService: services;
  
    @ManyToOne(() => services, (service) => service.threats, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'target_service_id' })
    targetService: services;
  
    @ManyToOne(() => threattypes, (threatType) => threatType.threats)
    @JoinColumn({ name: 'threat_type_id' })
    threatType: threattypes;
  }
  