import { Component, OnInit } from '@angular/core';
import {EventBusService} from '../service/event-bus.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  constructor(public eventBusService: EventBusService) { }

  public events: Array<any> = [];

  ngOnInit() {
    this.eventBusService.eventBus.subscribe(value => {
      this.events.push(JSON.stringify(value) + '-' + new Date());
    });

    this.eventBusService.eventBusClear.subscribe(value => {
      this.events = [];
    });
  }
}
