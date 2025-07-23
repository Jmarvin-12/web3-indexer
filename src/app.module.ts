import { Module } from '@nestjs/common'; // Core NestJS module decorator
import { TypeOrmModule } from '@nestjs/typeorm'; // TypeORM integration for NestJS
import { ConfigModule } from '@nestjs/config'; // Loads environment variables
import { Event } from './event.entity'; // Event entity for database

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Loads .env variables globally
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres', // Database type
        host: process.env.DB_HOST, // DB host from env
        port: Number(process.env.DB_PORT), // DB port from env
        username: process.env.DB_USER, // DB username from env
        password: process.env.DB_PASS, // DB password from env
        database: process.env.DB_NAME, // DB name from env
        entities: [Event], // Register Event entity
        synchronize: true, // Auto-sync DB schema (disable in production)
      }),
    }),
    TypeOrmModule.forFeature([Event]), // Makes Event entity injectable
  ],
})
export class AppModule {} // Root module of the application
