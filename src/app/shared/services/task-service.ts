import {Injectable} from '@angular/core';
import {Task} from "../entities/task";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  setTask(task: Task): void {
    localStorage.setItem(JSON.stringify(task), JSON.stringify(task));
  }

  deleteTask(task: Task): void {
    localStorage.removeItem(JSON.stringify(task));
  }

  getTaskList():Task[]{
    let taskList:Task[] = []
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      taskList.push(JSON.parse(localStorage.getItem(key)))
    }
    return taskList
  }

}
