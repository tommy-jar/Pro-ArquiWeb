import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentoComponent } from './component/rento/rento.component';
import { StartComponent } from './component/rento/start/start.component';
import { LoginComponent } from './component/rento/login/login.component';
import { RegisterUserComponent } from './component/rento/register-user/register-user.component';
import { RegisterLessorComponent } from './component/rento/register-lessor/register-lessor.component';
import { RegisterTenantComponent } from './component/rento/register-tenant/register-tenant.component';
import { ProfileLessorComponent } from './component/rento/profile-lessor/profile-lessor.component';
import { ProfileTenantComponent } from './component/rento/profile-tenant/profile-tenant.component';
import { HomeComponent } from './component/rento/home/home.component';
import { LookForComponent } from './component/rento/look-for/look-for.component';
import { LocalComponent } from './component/rento/local/local.component';
import { AddLocalComponent } from './component/rento/add-local/add-local.component';
import { LocalDescriptionComponent } from './component/rento/local-description/local-description.component';
import { ScheduleComponent } from './component/rento/schedule/schedule.component';

const routes: Routes = [
  {
    path:'rento', component: RentoComponent, children:[
      {
        path: 'start', component : StartComponent
      },

      {
        path: 'login', component : LoginComponent
      },

      {
        path: 'register-user', component : RegisterUserComponent
      },

      {
        path: 'register-lessor', component : RegisterLessorComponent ,
      },

      {
        path: 'register-tenant', component : RegisterTenantComponent,
      },

      {
        path: 'profil-tenant', component : ProfileTenantComponent
      },

      {
        path: 'profile-lessor', component : ProfileLessorComponent,
      },

      {
        path: 'home', component : HomeComponent,
      },

      {
        path: 'look-for', component : LookForComponent,
      },

      {
        path: 'local', component : LocalComponent,
      },

      {
        path: 'add-local', component : AddLocalComponent,
      },

      {
        path: 'local-description', component : LocalDescriptionComponent,
      },

      {
        path: 'schedule', component : ScheduleComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
