import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { TasktouserComponent } from './tasktouser/tasktouser.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'task', component:TaskComponent},
  {path:'user', component:UserComponent},
  {path:'tasktouser', component:TasktouserComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
