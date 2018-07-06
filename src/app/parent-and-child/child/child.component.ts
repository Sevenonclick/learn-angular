import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public panelTitle = '第一个组件title';

  @Input()
  set panelTit(value: string) {
    this.panelTitle = value;
  }

  get panelTit() {
    return this.panelTitle;
  }

  @Input() mobile = 'anymobile';
  @Output() mobileChange = new EventEmitter<string>();
  @Output()
  public printf = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }


  childFn() {
    this.panelTitle = '修改子组件属性';
  }

  emitAnEvent(value) {
    this.printf.emit(`子组件 ${this.panelTitle} 输入框内的值为：${value}`);
  }
}
