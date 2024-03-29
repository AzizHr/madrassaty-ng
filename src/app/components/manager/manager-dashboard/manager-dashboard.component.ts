import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {authSelector} from "../../../store/selectors/auth.selectors";
import {Observable} from "rxjs";
import {ManagerProfileResponse} from "../../../models/response/manager-profile-response";
import {StudentProfileResponse} from "../../../models/response/student-profile-response";
import {TeacherProfileResponse} from "../../../models/response/teacher-profile-response";
import * as AuthActions from "../../../store/actions/auth.actions";

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  auth$: Observable<ManagerProfileResponse | StudentProfileResponse | TeacherProfileResponse>
  auth: ManagerProfileResponse | StudentProfileResponse | TeacherProfileResponse;

  public constructor(private store: Store<AppState>) {
    this.auth$ = this.store.pipe(select(authSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.getLoggedInManager());
    this.auth$.subscribe(auth => this.auth = auth);
  }

}
