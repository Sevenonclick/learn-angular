import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  public eventBus: Subject<any> = new Subject<any>();
  public eventBusClear: Subject<any> = new Subject<any>();
  constructor() { }
}
