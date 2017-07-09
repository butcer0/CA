import { IQAnswer } from './IQAnswer';

export interface IQCard {
    id: string;
    question: string;
    description: string;
    answers: IQAnswer[];
}

