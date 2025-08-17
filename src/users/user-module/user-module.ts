import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/user-entity/Users';
import { AuthService, UserServiceService } from 'src/users/user-service/user-service.service';
import { UsersResolver } from '../user-resolver/users.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    providers: [UserServiceService, UsersResolver,AuthService],
    imports: [TypeOrmModule.forFeature([Users]),  PassportModule,  
    JwtModule.registerAsync({
        imports:[ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
            secret:config.get<string>(`JWT_SECRET`),
            signOptions: {expiresIn: '1h' } 
        })
    })],
    exports: [UserServiceService, TypeOrmModule, AuthService]
})

export class UserModuleTsModule {}