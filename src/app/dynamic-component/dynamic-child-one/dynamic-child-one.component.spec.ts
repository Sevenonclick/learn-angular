import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChildOneComponent } from './dynamic-child-one.component';

describe('DynamicChildOneComponent', () => {
  let component: DynamicChildOneComponent;
  let fixture: ComponentFixture<DynamicChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
