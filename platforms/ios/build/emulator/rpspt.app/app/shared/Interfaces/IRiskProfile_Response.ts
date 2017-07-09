import { IModifier } from './';

export interface IRiskProfile_Response {
    questionId: string;
    answerId: string;
    answerModifier: IModifier;
}