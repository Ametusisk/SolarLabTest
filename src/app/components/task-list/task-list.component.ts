import {Component} from '@angular/core';
import {Task} from 'src/app/shared/entities/task';
import {TaskService} from "../../shared/services/task-service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  constructor(private taskService: TaskService) {
  }

  taskList = this.taskService.getTaskList()

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    window.location.reload();
  }

  changeDone(task: Task) {
    this.taskService.deleteTask(task);
    let task1 = new Task(task.description, !task.done);
    this.taskService.setTask(task1);
    window.location.reload();
  }

}
