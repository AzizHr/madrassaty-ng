import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerLoginComponent} from "./components/auth/manager/manager-login/manager-login.component";
import {ManagerRegisterComponent} from "./components/auth/manager/manager-register/manager-register.component";
import {StudentLoginComponent} from "./components/auth/student/student-login/student-login.component";
import {StudentRegisterComponent} from "./components/auth/student/student-register/student-register.component";
import {TeacherLoginComponent} from "./components/auth/teacher/teacher-login/teacher-login.component";
import {TeacherRegisterComponent} from "./components/auth/teacher/teacher-register/teacher-register.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "manager/login", component: ManagerLoginComponent },
  { path: "manager/register", component: ManagerRegisterComponent },
  { path: "student/login", component: StudentLoginComponent },
  { path: "student/register", component: StudentRegisterComponent },
  { path: "teacher/login", component: TeacherLoginComponent },
  { path: "teacher/register", component: TeacherRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
