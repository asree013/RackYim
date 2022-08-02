import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RegisterModule } from "./components/register/register.module";
import { ReserveModule } from "./components/reserve/reserve.module";
import { HistoryReserveModule } from './components/history-reserve/history-reserve.module';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { CalendarReserveModule } from './components/calendar-reserve/calendar-reserve.module';





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
    CalendarReserveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
