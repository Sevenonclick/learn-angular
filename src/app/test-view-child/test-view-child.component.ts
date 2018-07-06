import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ViewChildOneComponent} from './view-child-one/view-child-one.component';

@Component({
  selector: 'app-test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit, AfterViewInit {
// @ViewChild(ChildOneComponent)
  // childOne:ChildOneComponent;
  @ViewChildren(ViewChildOneComponent)
  children: QueryList<ViewChildOneComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log(this.childOne);
    // this.childOne.helloEvent.subscribe((param)=>{
    //   console.log(this.childOne.title);
    // });
    this.children.forEach((item, index) => {
      // console.log(item);
      // 动态监听子组件的事件
      item.helloEvent.subscribe((data) => {
        if (index === 2) {
          item.title = '索引为2的title';
        }
        console.log(data);
      });
    });
  }
}
