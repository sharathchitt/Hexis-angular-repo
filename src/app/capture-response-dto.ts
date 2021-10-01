import { ExamInformationDto } from "./exam-information-dto";
import { User } from "./model/user";
import { UserDto } from "./user-dto";

export class CaptureResponseDto extends UserDto {

    studentResponse:string[];
    //userId:number;
    status : string;
    marks:number;
    examSpecialization : string;
	examLevel : string;
    //userDetail:UserDto = new UserDto();
    

    
    
    
}
