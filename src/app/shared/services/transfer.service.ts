import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  flag = new Subject<boolean>()

  constructor() { }

  switchFlag(){
    this.flag.next(true);
  }
}
