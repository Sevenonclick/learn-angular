import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import {FormsModule} from '@angular/forms';
import { BrothersComponent } from './brothers/brothers.component';
import { ChildOneComponent } from './brothers/child-one/child-one.component';
import { ChildTwoComponent } from './brothers/child-two/child-two.component';
import {EventBusService} from './brothers/service/event-bus.service';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { ContentChildOneComponent } from './test-ng-content/content-child-one/content-child-one.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicChildOneComponent } from './dynamic-component/dynamic-child-one/dynamic-child-one.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { ViewChildOneComponent } from './test-view-child/view-child-one/view-child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAndChildComponent,
    ChildComponent,
    BrothersComponent,
    ChildOneComponent,
    ChildTwoComponent,
    TestNgContentComponent,
    ContentChildOneComponent,
    DynamicComponentComponent,
    DynamicChildOneComponent,
    TestViewChildComponent,
    ViewChildOneComponent,
  ],
  entryComponents: [DynamicChildOneComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
