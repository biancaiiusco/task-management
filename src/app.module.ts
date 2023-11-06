import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { TasksRepository } from './tasks/tasks.repository';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tasks',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Task, TasksRepository],
    }),
    AuthModule,

  ],
  providers: [TasksRepository],
  controllers: [TasksController],
})
export class AppModule { }
