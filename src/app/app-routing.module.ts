import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ManagerLoginComponent} from "./components/auth/manager/manager-login/manager-login.component";
import {ManagerRegisterComponent} from "./components/auth/manager/manager-register/manager-register.component";
import { CreateSchoolComponent } from './components/auth/manager/manager-register/create-school/create-school.component';
import {StudentDashboardComponent} from "./components/student/student-dashboard/student-dashboard.component";
import {AbsenceComponent} from "./components/student/student-dashboard/absence/absence.component";
import {ClassroomComponent} from "./components/student/student-dashboard/classroom/classroom.component";
import {TeacherDashboardComponent} from "./components/teacher/teacher-dashboard/teacher-dashboard.component";
import {ProfileComponent} from "./components/student/student-dashboard/profile/profile.component";
import {MyClassroomsComponent} from "./components/teacher/teacher-dashboard/my-classrooms/my-classrooms.component";
import {
  TeacherProfileComponent
} from "./components/teacher/teacher-dashboard/teacher-profile/teacher-profile.component";
import {
  MyClassroomDetailsComponent
} from "./components/teacher/teacher-dashboard/my-classrooms/my-classroom-details/my-classroom-details.component";
import {
  MyStudentProfileComponent
} from "./components/teacher/teacher-dashboard/my-student-profile/my-student-profile.component";
import {ManagerDashboardComponent} from "./components/manager/manager-dashboard/manager-dashboard.component";
import {MainComponent} from "./components/manager/manager-dashboard/main/main.component";
import {StudentsComponent} from "./components/manager/manager-dashboard/students/students.component";
import {TeachersComponent} from "./components/manager/manager-dashboard/teachers/teachers.component";
import {ClassesComponent} from "./components/manager/manager-dashboard/classes/classes.component";
import {SubjectsComponent} from "./components/manager/manager-dashboard/subjects/subjects.component";
import {SpecialtiesComponent} from "./components/manager/manager-dashboard/specialties/specialties.component";
import {SchoolYearsComponent} from "./components/manager/manager-dashboard/school-years/school-years.component";
import {TeacherLoginComponent} from "./components/auth/teacher/teacher-login/teacher-login.component";
import {
  RegisterATeacherComponent
} from "./components/manager/manager-dashboard/teachers/register-a-teacher/register-a-teacher.component";
import {StudentLoginComponent} from "./components/auth/student/student-login/student-login.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "manager/login", component: ManagerLoginComponent },
  { path: "manager/register", component: ManagerRegisterComponent },
  { path: "manager/dashboard", component: ManagerDashboardComponent, children: [
      {path: "", component: MainComponent},
      {path: "students", component: StudentsComponent},
      {path: "teachers", component: TeachersComponent},
      {path: "classrooms", component: ClassesComponent},
      {path: "subjects", component: SubjectsComponent},
      {path: "specialties", component: SpecialtiesComponent},
          {path: "years", component: SchoolYearsComponent}
    ] },
  { path: "teacher/login", component: TeacherLoginComponent },
  { path: "teacher/dashboard", component: TeacherDashboardComponent, children: [
      {path: "classrooms", component: MyClassroomsComponent},
      {path: "profile", component: TeacherProfileComponent},
      {path: "classrooms/:id", component: MyClassroomDetailsComponent},
      {path: "students/profile/:id", component: MyStudentProfileComponent},
    ] },
  { path: "school/register", component: CreateSchoolComponent },
  { path: "student/login", component: StudentLoginComponent },
  { path: "student/dashboard", component: StudentDashboardComponent, children: [
    {path: "absence", component: AbsenceComponent},
    {path: "profile", component: ProfileComponent},
      {path: "classroom", component: ClassroomComponent}
      ] },
  { path: "teacher/dashboard", component: TeacherDashboardComponent, children: [
      {path: "classrooms", component: MyClassroomsComponent},
      {path: "profile", component: TeacherProfileComponent},
      {path: "classrooms/:id", component: MyClassroomDetailsComponent},
      {path: "students/profile/:id", component: MyStudentProfileComponent},
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
