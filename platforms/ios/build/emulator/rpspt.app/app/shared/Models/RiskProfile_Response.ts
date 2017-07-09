import { IRiskProfile_Response, IModifier } from '../Interfaces/';

export class RiskProfile_Response implements IRiskProfile_Response {
    questionId: string;
    answerId: string;
    answerModifier: IModifier;
}