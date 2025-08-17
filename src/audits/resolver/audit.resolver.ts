import { Resolver } from '@nestjs/graphql';
import { AuditLogs } from '../entitie/Audits';

@Resolver(() => AuditLogs)
export class AuditResolver {}
