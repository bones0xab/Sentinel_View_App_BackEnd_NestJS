import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLogs } from '../entitie/Audits';
import { AuditService } from '../services/audit.service';
import { AuditResolver } from '../resolver/audit.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([AuditLogs])],
    providers: [ AuditService, AuditResolver ],  // ← add AuditResolver here
    exports: [ AuditService ]
})
export class AuditModule {}
