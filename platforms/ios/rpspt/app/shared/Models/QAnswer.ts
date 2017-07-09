import { IQAnswer, IModifier } from '../Interfaces';

export class QAnswer implements IQAnswer {
    answer: string;
    modifier: IModifier;
}