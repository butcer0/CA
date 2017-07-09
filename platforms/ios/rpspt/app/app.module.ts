//angular imports
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

//nativescript imports
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

//app imports
import { AppRoutingModule, authProviders } from './app.routing';
import { AppComponent } from "./app.component";
import { LoginModule } from "./pt-login/pt-login.module";
import { PTBacklogModule } from "./pt-backlog/pt-backlog.module";
import { UserService, AuthenticationService } from './services';
import { setStatusBarColors } from "./shared/status-bar-util";

import { CAWizardModule } from "./ca-wizard/ca-wizard.module";
import { CAWizardQCardsModule } from "./ca-wizard/ca-wizard-qcards/ca-wizard-qcards.module";

setStatusBarColors();

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        LoginModule,
        PTBacklogModule,
        CAWizardModule,
        // CAWizardQCardsModule
    ],
    providers: [
        UserService,
        AuthenticationService,
        authProviders
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
