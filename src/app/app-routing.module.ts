import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ManagerLoginComponent} from "./components/auth/manager/manager-login/manager-login.component";
import {ManagerRegisterComponent} from "./components/auth/manager/manager-register/manager-register.component";
import { CreateSchoolComponent } from './components/auth/manager/manager-register/create-school/create-school.component';
import { MDashboardComponent } from './components/manager-dashboard/m-dashboard/m-dashboard.component';
import { MStudentsDashboardComponent } from './components/manager-dashboard/m-students-dashboard/m-students-dashboard.component';
import { MTeachersDashboardComponent } from './components/manager-dashboard/m-teachers-dashboard/m-teachers-dashboard.component';
import { MClassesDashboardComponent } from './components/manager-dashboard/m-classes-dashboard/m-classes-dashboard.component';
import { MSpecialtiesDashboardComponent } from './components/manager-dashboard/m-specialties-dashboard/m-specialties-dashboard.component';
import { MSubjectsDashboardComponent } from './components/manager-dashboard/m-subjects-dashboard/m-subjects-dashboard.component';
import {TeacherDashboardComponent} from "./components/teacher-dashboard/teacher-dashboard.component";
import {StudentDashboardComponent} from "./components/student/student-dashboard/student-dashboard.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "manager/login", component: ManagerLoginComponent },
  { path: "manager/register", component: ManagerRegisterComponent },
  { path: "manager/dashboard", component: MDashboardComponent },
  { path: "manager/dashboard/students", component: MStudentsDashboardComponent },
  { path: "manager/dashboard/teachers", component: MTeachersDashboardComponent },
  { path: "manager/dashboard/classes", component: MClassesDashboardComponent },
  { path: "manager/dashboard/specialties", component: MSpecialtiesDashboardComponent },
  { path: "manager/dashboard/subjects", component: MSubjectsDashboardComponent },
  { path: "school/register", component: CreateSchoolComponent },
  { path: "student/dashboard", component: StudentDashboardComponent },
  { path: "teacher/dashboard", component: TeacherDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
