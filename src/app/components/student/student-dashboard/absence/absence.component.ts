import { Component } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import {Observable} from "rxjs";
import {AbsenceResponse} from "../../../../models/response/absence-response";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {absencesSelector, errorSelector, isLoadingSelector} from "../../../../store/selectors/absence.selectors";
import * as AbsenceActions from "../../../../store/actions/absence.actions";
import {DurationType} from "../../../../enums/duration-type.enums";

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  isLoading$: Observable<boolean>;
  absences$: Observable<AbsenceResponse[]>;
  absences: AbsenceResponse[];
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.absences$ = this.store.pipe(select(absencesSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(AbsenceActions.loadAbsencesByStudentId({ studentId: 'k' }));
    this.absences$.subscribe(absences => {
      this.absences = absences;
      const events = this.absences.map((absence: AbsenceResponse) => ({
        title: this.durationType(absence),
        date: absence.date,
        backgroundColor: this.bgColor(absence),
        textColor: this.textColor(absence)
      }));
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],
        events: events
      };
    });
  }

  durationType(absence: AbsenceResponse): string {
    if (absence.durationType == DurationType.MINUTE) {
      return `late for ${absence.duration} minutes`;
    } else if (absence.durationType == DurationType.HOUR) {
      return `late for ${absence.duration} hours`;
    } else if (absence.durationType == DurationType.DAY) {
      return `absent on this day`;
    }
    return '';
  }

  bgColor(absence: AbsenceResponse): string {
    if (absence.durationType == DurationType.MINUTE || absence.durationType == DurationType.HOUR) {
      return 'yellow';
    } else if (absence.durationType == DurationType.DAY) {
      return 'red';
    }
    return '';
  }

  textColor(absence: AbsenceResponse): string {
    if (absence.durationType == DurationType.MINUTE || absence.durationType == DurationType.HOUR) {
      return 'black';
    } else if (absence.durationType == DurationType.DAY) {
      return 'white';
    }
    return '';
  }

}
