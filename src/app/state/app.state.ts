import {ClassState} from "./class.state";
import {SchoolState} from "./school.state";
import {SpecialtyState} from "./specialty.state";
import {StudentState} from "./student.state";
import {SubjectState} from "./subject.state";
import {TeacherState} from "./teacher.state";
import {AbsenceState} from "./absence.state";
import {YearState} from "./year.state";
import {AuthState} from "./auth.state";

export interface AppState {
  classes: ClassState,
  school: SchoolState,
  specialties: SpecialtyState,
  students: StudentState,
  teachers: TeacherState,
  subjects: SubjectState,
  absences: AbsenceState,
  years: YearState,
  user: AuthState
}
