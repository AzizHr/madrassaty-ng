import {StatusType} from "../../enums/status-type.enums";

export interface TeacherRegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  status?: StatusType;
  city?: string;
  address?: string;
  image: string;
  subjectId: number;
}
