import { IQCard, IQAnswer } from '../Interfaces';

export class QCard implements IQCard {
    id: string;
    question: string;
    description: string;
    answers: IQAnswer[];
}