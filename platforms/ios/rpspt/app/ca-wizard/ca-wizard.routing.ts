import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CAWizardComponent } from './ca-wizard.component';
import { CAWizardQCardsComponent } from './ca-wizard-qcards/ca-wizard-qcards.component';

const wizardRoutes: Routes = [
    { path: 'ca-wizard', component: CAWizardComponent },
    { path: 'ca-wizard-qcards', component: CAWizardQCardsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(wizardRoutes)],
    exports: [RouterModule],
})
export class CAWizardRoutingModule { }
