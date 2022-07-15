import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RegisterModule } from "./components/register/register.module";
import { ReserveModule } from "./components/reserve/reserve.module";
import { HistoryReserveModule } from './components/history-reserve/history-reserve.module';


import { CaledarReservModule } from './components/caledar-reserv/calendar-reserve.modole';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReserveModule,
    RegisterModule,
    FormsModule,
    ReactiveFormsModule,
    HistoryReserveModule,
    CalendarModule,
    CaledarReservModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
