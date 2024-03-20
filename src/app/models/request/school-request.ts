import {SchoolType} from "../../enums/school-type.enums";

export interface SchoolRequest {
  name: string;
  type: SchoolType;
}
