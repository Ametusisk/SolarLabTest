import {Component} from '@angular/core';
import {TaskService} from "../../shared/services/task-service";
import {Task} from "../../shared/entities/task";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  constructor(private taskService: TaskService) {
  }

  addTask(description: string): void {
    let task = new Task(description, false)
    if (task.description) {
      this.taskService.setTask(task);
      window.location.reload()
    }
  }
}
