import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SolarLabTest';

  onChangedToList = new EventEmitter();
  onChangedFromOrganizer(){
    this.onChangedToList.emit();
  }
}
