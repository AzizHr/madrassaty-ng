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
import { MDashboardComponent } from './components/manager-dashboard/m-dashboard/m-dashboard.component';
import { MStudentsDashboardComponent } from './components/manager-dashboard/m-students-dashboard/m-students-dashboard.component';
import { MTeachersDashboardComponent } from './components/manager-dashboard/m-teachers-dashboard/m-teachers-dashboard.component';
import { MClassesDashboardComponent } from './components/manager-dashboard/m-classes-dashboard/m-classes-dashboard.component';
import { MSubjectsDashboardComponent } from './components/manager-dashboard/m-subjects-dashboard/m-subjects-dashboard.component';
import { MSpecialtiesDashboardComponent } from './components/manager-dashboard/m-specialties-dashboard/m-specialties-dashboard.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {SpecialtyEffects} from "./store/effects/specialty.effects";
import { AddClassComponent } from './components/manager-dashboard/m-classes-dashboard/add-class/add-class.component';
import { AddSpecialtyComponent } from './components/manager-dashboard/m-specialties-dashboard/add-specialty/add-specialty.component';
import { AddSubjectComponent } from './components/manager-dashboard/m-subjects-dashboard/add-subject/add-subject.component';
import { AssignASubjectToASpecialtyComponent } from './components/manager-dashboard/m-subjects-dashboard/assign-a-subject-to-a-specialty/assign-a-subject-to-a-specialty.component';
import { RegisterATeacherComponent } from './components/manager-dashboard/m-teachers-dashboard/register-a-teacher/register-a-teacher.component';
import { RegisterAStudentComponent } from './components/manager-dashboard/m-students-dashboard/register-a-student/register-a-student.component';
import {
  AssignATeacherToAClassComponent
} from "./components/manager-dashboard/m-teachers-dashboard/assign-a-teacher-to-a-class/assign-a-teacher-to-a-class.component";
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { NoteAbsentForAStudentComponent } from './components/teacher-dashboard/note-absent-for-a-student/note-absent-for-a-student.component';
import {absenceReducer} from "./store/reducers/absence.reducers";
import {AbsenceEffects} from "./store/effects/absence.effects";
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './components/student/student-dashboard/profile/profile.component';
import { AbsenceComponent } from './components/student/student-dashboard/absence/absence.component';

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
    MDashboardComponent,
    MStudentsDashboardComponent,
    MTeachersDashboardComponent,
    MClassesDashboardComponent,
    MSubjectsDashboardComponent,
    MSpecialtiesDashboardComponent,
    AddClassComponent,
    AddSpecialtyComponent,
    AddSubjectComponent,
    AssignASubjectToASpecialtyComponent,
    AssignATeacherToAClassComponent,
    RegisterATeacherComponent,
    RegisterAStudentComponent,
    TeacherDashboardComponent,
    NoteAbsentForAStudentComponent,
    StudentDashboardComponent,
    ProfileComponent,
    AbsenceComponent
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
    StoreModule.forFeature('school', schoolReducer),
    EffectsModule.forFeature([ClassEffects, SpecialtyEffects, SubjectEffects, StudentEffects, TeacherEffects, SchoolEffects, AbsenceEffects]),
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
