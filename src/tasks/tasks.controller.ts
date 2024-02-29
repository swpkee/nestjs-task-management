import { Controller } from '@nestjs/common';
import type { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(tasksService:TasksService) {}
}
