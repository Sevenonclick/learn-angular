import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.css']
})
export class ParentAndChildComponent implements OnInit {
  public mobile = '18511071096';
  constructor() { }

  ngOnInit() {
  }
  fatherEvent(val) {
    alert(val);
  }
}
