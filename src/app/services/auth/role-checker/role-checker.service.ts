import {Injectable} from '@angular/core';
import {JwtStorageService} from "../../jwt/jwt-storage.service";
import {Role} from "../../../enums/role.enums";
import {ManagerProfileResponse} from "../../../models/response/manager-profile-response";
import {StudentProfileResponse} from "../../../models/response/student-profile-response";
import {TeacherProfileResponse} from "../../../models/response/teacher-profile-response";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {authSelector} from "../../../store/selectors/auth.selectors";
import * as AuthActions from "../../../store/actions/auth.actions";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleCheckerService {

  private auth$: Observable<ManagerProfileResponse | StudentProfileResponse | TeacherProfileResponse>;
  private auth: ManagerProfileResponse | StudentProfileResponse | TeacherProfileResponse;

  constructor(private jwtStorageService: JwtStorageService, private store: Store<AppState>) {
    this.auth$ = this.store.pipe(select(authSelector))
  }

  public isLoggedIn(): boolean {
    return !!this.jwtStorageService.getToken();
  }

  isManager(): boolean {
    this.store.dispatch(AuthActions.getLoggedInManager());
    this.auth$.subscribe(auth => this.auth = auth);
    return this.auth && this.auth.role === Role.MANAGER;
  }

  isTeacher(): boolean {
    this.store.dispatch(AuthActions.getLoggedInTeacher());
    this.auth$.subscribe(auth => this.auth = auth);
    return this.auth && this.auth.role === Role.TEACHER;
  }

  isStudent(): boolean {
    this.store.dispatch(AuthActions.getLoggedInStudent());
    this.auth$.subscribe(auth => this.auth = auth);
    return this.auth && this.auth.role === Role.STUDENT;
  }

}
