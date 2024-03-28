import {StatusType} from "../../enums/status-type.enums";

export interface StudentRegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  status?: StatusType;
  city?: string;
  address?: string;
  image: File;
  specialtyId: number;
  classId: number;
}
