import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';//add mano

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { RentoComponent } from './component/rento/rento.component';
import { LoginComponent } from './component/rento/login/login.component';
import { StartComponent } from './component/rento/start/start.component';
import { RegisterUserComponent } from './component/rento/register-user/register-user.component';
import { RegisterTenantComponent } from './component/rento/register-tenant/register-tenant.component';
import { RegisterLessorComponent } from './component/rento/register-lessor/register-lessor.component';
import { HomeComponent } from './component/rento/home/home.component';
import { LookForComponent } from './component/rento/look-for/look-for.component';
import { LocalComponent } from './component/rento/local/local.component';
import { ScheduleComponent } from './component/rento/schedule/schedule.component';
import { ProfileTenantComponent } from './component/rento/profile-tenant/profile-tenant.component';
import { ProfileLessorComponent } from './component/rento/profile-lessor/profile-lessor.component';
import { AddLocalComponent } from './component/rento/add-local/add-local.component';
import { LocalDescriptionComponent } from './component/rento/local-description/local-description.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './component/rento/header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    RentoComponent,
    LoginComponent,
    StartComponent,
    RegisterUserComponent,
    RegisterTenantComponent,
    RegisterLessorComponent,
    HomeComponent,
    LookForComponent,
    LocalComponent,
    ScheduleComponent,
    ProfileTenantComponent,
    ProfileLessorComponent,
    AddLocalComponent,
    LocalDescriptionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,

    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
