import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {classReducer} from "./store/reducers/class.reducers";
import {subjectReducer} from "./store/reducers/subject.reducers";
import {studentReducer} from "./store/reducers/student.reducers";
import {teacherReducer} from "./store/reducers/teacher.reducers";
import {ClassEffects} from "./store/effects/class.effects";
import {SubjectEffects} from "./store/effects/subject.effects";
import {StudentEffects} from "./store/effects/student.effects";
import {TeacherEffects} from "./store/effects/teacher.effects";
import {SchoolEffects} from "./store/effects/school.effects";
import { ManagerLoginComponent } from './components/auth/manager/manager-login/manager-login.component';
import { ManagerRegisterComponent } from './components/auth/manager/manager-register/manager-register.component';
import {AuthLayoutComponent} from "./components/auth/auth-layout/auth-layout.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {schoolReducer} from "./store/reducers/school.reducers";
import {specialtyReducer} from "./store/reducers/specialty.reducers";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateSchoolComponent } from './components/auth/manager/manager-register/create-school/create-school.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {SpecialtyEffects} from "./store/effects/specialty.effects";
import {absenceReducer} from "./store/reducers/absence.reducers";
import {AbsenceEffects} from "./store/effects/absence.effects";
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './components/student/student-dashboard/profile/profile.component';
import { AbsenceComponent } from './components/student/student-dashboard/absence/absence.component';
import { ClassroomComponent } from './components/student/student-dashboard/classroom/classroom.component';
import { TeacherProfileComponent } from './components/teacher/teacher-dashboard/teacher-profile/teacher-profile.component';
import { MyClassroomsComponent } from './components/teacher/teacher-dashboard/my-classrooms/my-classrooms.component';
import {TeacherDashboardComponent} from "./components/teacher/teacher-dashboard/teacher-dashboard.component";
import { MyClassroomDetailsComponent } from './components/teacher/teacher-dashboard/my-classrooms/my-classroom-details/my-classroom-details.component';
import { MyStudentProfileComponent } from './components/teacher/teacher-dashboard/my-student-profile/my-student-profile.component';
import { MainComponent } from './components/manager/manager-dashboard/main/main.component';
import {AddClassComponent} from "./components/manager/manager-dashboard/classes/add-class/add-class.component";
import {
  AddSpecialtyComponent
} from "./components/manager/manager-dashboard/specialties/add-specialty/add-specialty.component";
import {AddSubjectComponent} from "./components/manager/manager-dashboard/subjects/add-subject/add-subject.component";
import {
  RegisterATeacherComponent
} from "./components/manager/manager-dashboard/teachers/register-a-teacher/register-a-teacher.component";
import {
  RegisterAStudentComponent
} from "./components/manager/manager-dashboard/students/register-a-student/register-a-student.component";
import {ClassesComponent} from "./components/manager/manager-dashboard/classes/classes.component";
import {StudentsComponent} from "./components/manager/manager-dashboard/students/students.component";
import {TeachersComponent} from "./components/manager/manager-dashboard/teachers/teachers.component";
import {SubjectsComponent} from "./components/manager/manager-dashboard/subjects/subjects.component";
import {SpecialtiesComponent} from "./components/manager/manager-dashboard/specialties/specialties.component";
import {ManagerDashboardComponent} from "./components/manager/manager-dashboard/manager-dashboard.component";
import { SchoolYearsComponent } from './components/manager/manager-dashboard/school-years/school-years.component';
import { StudentYearsComponent } from './components/manager/manager-dashboard/student-years/student-years.component';
import {yearReducer} from "./store/reducers/year.reducers";
import {YearEffects} from "./store/effects/year.effects";
import { AddYearComponent } from './components/manager/manager-dashboard/school-years/add-year/add-year.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagerLoginComponent,
    ManagerRegisterComponent,
    AuthLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CreateSchoolComponent,
    AddClassComponent,
    AddSpecialtyComponent,
    AddSubjectComponent,
    RegisterATeacherComponent,
    RegisterAStudentComponent,
    StudentDashboardComponent,
    ProfileComponent,
    AbsenceComponent,
    ClassroomComponent,
    TeacherProfileComponent,
    MyClassroomsComponent,
      TeacherDashboardComponent,
      MyClassroomDetailsComponent,
      MyStudentProfileComponent,
      MainComponent,
    ClassesComponent,
    StudentsComponent,
    TeachersComponent,
    SubjectsComponent,
    SpecialtiesComponent,
    ManagerDashboardComponent,
    SchoolYearsComponent,
    StudentYearsComponent,
    AddYearComponent
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature('classes', classReducer),
      StoreModule.forFeature('specialties', specialtyReducer),
    StoreModule.forFeature('subjects', subjectReducer),
    StoreModule.forFeature('students', studentReducer),
    StoreModule.forFeature('teachers', teacherReducer),
    StoreModule.forFeature('absences', absenceReducer),
    StoreModule.forFeature('years', yearReducer),
    StoreModule.forFeature('school', schoolReducer),
    EffectsModule.forFeature([ClassEffects, SpecialtyEffects, SubjectEffects, StudentEffects, TeacherEffects, SchoolEffects, AbsenceEffects, YearEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
