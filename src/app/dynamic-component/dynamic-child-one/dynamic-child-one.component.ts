import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-child-one',
  templateUrl: './dynamic-child-one.component.html',
  styleUrls: ['./dynamic-child-one.component.scss']
})
export class DynamicChildOneComponent implements OnInit {
  title = '子组件啊';

  constructor() {
  }

  @Output()
  btnClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  public triggerEvent(): void {
    this.btnClick.emit('第一个子组件的点击事件...');
  }
}
