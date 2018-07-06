import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildOneComponent } from './view-child-one.component';

describe('ViewChildOneComponent', () => {
  let component: ViewChildOneComponent;
  let fixture: ComponentFixture<ViewChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
