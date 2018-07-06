import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-view-child-one',
  templateUrl: './view-child-one.component.html',
  styleUrls: ['./view-child-one.component.scss']
})
export class ViewChildOneComponent implements OnInit {

  @Input()
  public title = '我是ViewChildOne';

  @Output()
  helloEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public sayHello(): void {
    this.helloEvent.emit('hello...');
  }
}
