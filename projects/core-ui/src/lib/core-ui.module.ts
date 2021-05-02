import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CoreUiModule { }
