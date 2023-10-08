import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks/tasks.repository';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TasksModule,
    TasksRepository,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Task],
    }),
  ],
  controllers: [TasksController],
})
export class AppModule {}
