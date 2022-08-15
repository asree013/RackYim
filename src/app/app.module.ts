import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RegisterModule } from "./components/register/register.module";
import { HistoryReserveModule } from './components/history-reserve/history-reserve.module';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { CalendarReserveModule } from './components/calendar-reserve/calendar-reserve.module';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';






@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule,
    RegisterModule,
    FormsModule,
    ReactiveFormsModule,
    HistoryReserveModule,
    CalendarModule,
    CalendarReserveModule,
    ReserveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
