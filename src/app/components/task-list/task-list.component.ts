import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/shared/entities/task';
import {TaskService} from "../../shared/services/task-service";
import {TransferService} from "../../shared/services/transfer.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList: Task[] = this.taskService.getTaskList();
  flag:boolean;

  constructor(private taskService: TaskService,private transferService:TransferService) {
  }

  ngOnInit() {
    this.transferService.flag.subscribe((result)=>{
    if (result){
      this.updatePage();
      this.transferService.switchFlag();
    }})

  }

  updatePage() {
    this.taskList = this.taskService.getTaskList();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.updatePage();
  }

  changeDone(task: Task) {
    this.taskService.deleteTask(task);
    let task1 = new Task(task.description, !task.done);
    this.taskService.setTask(task1);
    this.updatePage();
  }

}
