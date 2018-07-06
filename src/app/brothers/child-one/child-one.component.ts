import { Component, OnInit } from '@angular/core';
import {EventBusService} from '../service/event-bus.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  constructor(public eventBusService: EventBusService) { }

  ngOnInit() {
  }

  triggerEventBus() {
    this.eventBusService.eventBus.next({ name: 'hao.chen', mobile: '18511071096' });
  }

  triggerEventBusClear() {
    this.eventBusService.eventBusClear.next('clear');
  }
}
