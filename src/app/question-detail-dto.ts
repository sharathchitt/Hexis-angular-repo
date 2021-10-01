import { ExamInformationDto } from "./exam-information-dto";

export class QuestionDetailDto extends ExamInformationDto {
    questionid : number;
    question : string;
    optionA : string;
    optionB : string;
    optionC : string;
    optionD : string;
}
