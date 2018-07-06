import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-content-child-one',
  templateUrl: './content-child-one.component.html',
  styleUrls: ['./content-child-one.component.scss']
})
export class ContentChildOneComponent implements OnInit {
  @Output() childFn = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sayHello() {
    this.childFn.emit('派发内容投影事件');
  }
}
