import { Component } from '@angular/core';
import { SchoolType } from 'src/app/enums/school-type.enums';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent {
  schoolTypes = Object.keys(SchoolType)
}
