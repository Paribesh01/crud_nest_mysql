import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository:Repository<Todo>
    )
  {}



  async create(createTodoDto: CreateTodoDto) {


    return this.todoRepository.save(createTodoDto);
  }

  findAll() {




    return this.todoRepository.find();
  }

 async findOne(id: number) {
    return this.todoRepository.findOne({where:{id}});
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.todoRepository.update(id,updateTodoDto)
    
    return this.findOne(id);
  }

  async remove(id: number) {
    const toBeDeleted = this.findOne(id);
    await this.todoRepository.delete(id)
    return toBeDeleted;
  }
}
