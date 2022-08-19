import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register/register.component';
import { ReserveComponent } from './components/reserve/reserve/reserve.component';
import { HistoryReserveComponent } from './components/history-reserve/history-reserve.component';
import { CalendarReserveComponent } from "./components/calendar-reserve/calendar-reserve.component";
import { MenuComponent } from './components/menu/menu.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then((m) => m.RegisterModule)
  },
  { path: 'menu', component: MenuComponent },
  { path: 'calendar-reserve', component: CalendarReserveComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'history-reserve', component: HistoryReserveComponent },
  { path: 'calendar-reserve', component: CalendarReserveComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: '**', redirectTo: 'page404' },
  { path: 'page404', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
