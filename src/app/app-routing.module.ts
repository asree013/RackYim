import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register/register.component';
import { ReserveComponent } from './components/reserve/reserve/reserve.component';
import { HistoryReserveComponent } from './components/history-reserve/history-reserve.component';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo: 'register'},
  {path:'register',component: RegisterComponent},
  {path:'calendar-reserv', component: CalendarComponent},
  {path:'reserve',component: ReserveComponent},
  {path:'history',component: HistoryReserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
