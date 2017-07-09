import { NgModule } from '@angular/core';

//nativescript imports
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { CAWizardQCardsComponent } from './ca-wizard-qcards.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    exports: [CAWizardQCardsComponent],
    declarations: [CAWizardQCardsComponent],
    providers: [],
})
export class CAWizardQCardsModule { }
