import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Abi1234@',
    database: 'test',
    entities: [Todo],
    synchronize: true,
  }), TodoModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
