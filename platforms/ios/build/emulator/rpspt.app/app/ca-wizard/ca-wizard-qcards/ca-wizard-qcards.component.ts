import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../services/';


@Component({
    selector: 'ca-wizard-qcards',
    templateUrl: 'ca-wizard-qcards.component.html'
})

export class CAWizardQCardsComponent implements OnInit {

    private _selectedAnswerScreenIndex: number = 0;

    public get curQCard() {
        return this.wizardService.CurQCard;
    }


    constructor(
        public wizardService: WizardService
    ) { }

    ngOnInit() {

    }

    public onLoaded(args: any) {
        alert('onLoaded called');
    }

    public onItemLoading(args: any) {
        alert('onItemLoading called');
    }

    public onItemTap(args: any) {
        alert('onItemTap called');
    }
}