import { Injectable, OnInit } from '@angular/core';

import { IQAnswer, IQCard, IRiskProfile_Response, IModifier } from '../shared/Interfaces/';
import { QCard } from '../shared/Models/QCard';
import { QAnswer } from '../shared/Models/QAnswer';

import * as _ from 'lodash';

import { QDataJSON } from '../shared/example-data';

import { QCARD_INDEX } from '../shared/Interfaces/GlobalEnums';

@Injectable()
export class WizardService {
    private curQCardIndex: number = 0;
    private _curQCard: IQCard;
    private _qCards: Array<IQCard> = [];
    private _riskProfile: Array<IRiskProfile_Response> = [];

    public get CurQCard(): IQCard {
        return this._curQCard;
    }

    public get RiskProfile(): Array<IRiskProfile_Response> {
        return this._riskProfile;
    }

    constructor() {
        this.extractQData();
    }

    public NextCard() {
        if (this._qCards.length <= this.curQCardIndex) {
            //This signals routing to next page
            return QCARD_INDEX.COMPLETE;
        } else {
            this.curQCardIndex += 1;
            this.updateQCard();
        }

    }

    public PreviousCard() {
        if (this.curQCardIndex < 1) {
            return QCARD_INDEX.AT_BEGINNING;
        } else {
            this.curQCardIndex -= 1;
            this.updateQCard();
        }
    }

    public UpdateRiskProfile(riskProfile_Response: IRiskProfile_Response) {
        this._riskProfile[this.curQCardIndex];
        
    }

    private updateQCard() {
        let qCards = _.filter(this._qCards, (qCard) => qCard.id === this._qCards[this.curQCardIndex].id);
        if (qCards.length > 0) {
            this._curQCard = qCards[0];
        }
    }

    private extractQData() {
        try {
            this._qCards = _.map(QDataJSON, (question) => {
                let newQCard: IQCard = new QCard
                newQCard.id = question['id'];
                newQCard.question = question['question'];
                newQCard.description = question['description'];
                newQCard.answers = _.map(question['answers'], (answer) => {
                    let newQAnswer: QAnswer = new QAnswer();
                    newQAnswer.answer = answer['answer'];
                    newQAnswer.modifier = answer['modifiers'];
                    return newQAnswer;
                })
                return newQCard;
            })
        } catch (error) {
            console.log("JSON Extraction Failed");
        }

    }
}

