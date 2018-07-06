import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildOneComponent } from './content-child-one.component';

describe('ContentChildOneComponent', () => {
  let component: ContentChildOneComponent;
  let fixture: ComponentFixture<ContentChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
