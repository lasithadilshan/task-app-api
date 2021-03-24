import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(
        private tasksService: TasksService
    ){}

    //Create Task
    @Post()
    async createTask(
        @Body() body: Task
    ): Promise<Task[]> {
        const tasks = await this.tasksService.createTask(body);
        return tasks;
    }

    //Get Tasks
    @Get()
    async getTasks(): Promise<Task[]> {
        const tasks = await this.tasksService.getTasks();
        return tasks;
    }

    //Get One Task
    @Get(':id')
    async getOneTask(
        @Param('id') id:string
    ):Promise<Task>{
        const tasks = await this.tasksService.getOneTask(id);
        return tasks;
    }

    //Update Task
    @Patch(':id')
    async updateTask(
        @Param('id') id:string,
        @Body() body: Task
    ): Promise<Task> {
        const tasks = await this.tasksService.updateTask(id, body);
        return tasks;
    }

    //Delete Task
    @Delete(':id')
    async deleteTask(
        @Param('id') id: string
    ): Promise<string> {
        const taskId = await this.tasksService.deleteTask(id);
        return taskId;
    }
}
