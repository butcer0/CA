import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

import { RouterExtensions } from 'nativescript-angular/router';

import { } from '../services/'

@Component({
    moduleId: module.id,
    selector: 'ca-wizard',
    templateUrl: 'ca-wizard.component.html'
})

export class CAWizardComponent implements OnInit {

    public itemTitle: string = ' ';
    constructor(
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit() { }

    public onNavBackTap() {
        this.routerExtensions.backToPreviousPage();
    }


}