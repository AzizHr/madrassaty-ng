import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {ManagerRegisterComponent} from "./components/auth/manager/manager-register/manager-register.component";
import {StudentRegisterComponent} from "./components/auth/student/student-register/student-register.component";
import {TeacherRegisterComponent} from "./components/auth/teacher/teacher-register/teacher-register.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ManagerLoginComponent} from "./components/auth/manager/manager-login/manager-login.component";
import {StudentLoginComponent} from "./components/auth/student/student-login/student-login.component";
import {TeacherLoginComponent} from "./components/auth/teacher/teacher-login/teacher-login.component";
import {AuthInterceptorProvider} from "./interceptors/auth.interceptor";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerLoginComponent,
    ManagerRegisterComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    TeacherLoginComponent,
    TeacherRegisterComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true
    }),
    ReactiveFormsModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
