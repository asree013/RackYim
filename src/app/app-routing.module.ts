import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register/register.component';
import { ReserveComponent } from './components/reserve/reserve/reserve.component';
import { HistoryReserveComponent } from './components/history-reserve/history-reserve.component';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { CalendarReserveComponent } from "./components/calendar-reserve/calendar-reserve.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo: 'register'},
  {path:'register',component: RegisterComponent},
  {path:'calendar-reserve', component: CalendarReserveComponent},
  {path:'reserve',component: ReserveComponent},
  {path:'history-reserve',component: HistoryReserveComponent},
  {path:'calendar-reserve',component: CalendarReserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
