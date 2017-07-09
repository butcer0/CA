import { NgModule } from '@angular/core';

//nativescript imports
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CAWizardComponent } from './ca-wizard.component';
import { CAWizardQCardsComponent } from './ca-wizard-qcards/ca-wizard-qcards.component';

import { WizardService } from '../services/';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    exports: [
        CAWizardComponent,

    ],
    declarations: [CAWizardComponent],
    providers: [
        WizardService
    ],
})
export class CAWizardModule { }
