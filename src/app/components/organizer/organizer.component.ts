import {Component} from '@angular/core';
import {TaskService} from "../../shared/services/task-service";
import {Task} from "../../shared/entities/task";
import {TransferService} from "../../shared/services/transfer.service";


@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {

  constructor(private taskService: TaskService, private transferService: TransferService) {
  }

  addTask(description: string): void {
    let task = new Task(description, false)
    if (task.description) {
      this.taskService.setTask(task);
      this.transferService.switchFlag();
    }
  }

}
