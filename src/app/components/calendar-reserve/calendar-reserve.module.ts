import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarReserveComponent } from './calendar-reserve.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    CalendarReserveComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule

  ],
  exports: [
    CalendarReserveComponent
  ]
})
export class CalendarReserveModule { }
