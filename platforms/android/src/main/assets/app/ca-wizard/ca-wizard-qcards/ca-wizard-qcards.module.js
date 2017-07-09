"use strict";
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var ca_wizard_qcards_component_1 = require("./ca-wizard-qcards.component");
var CAWizardQCardsModule = (function () {
    function CAWizardQCardsModule() {
    }
    return CAWizardQCardsModule;
}());
CAWizardQCardsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule
        ],
        exports: [ca_wizard_qcards_component_1.CAWizardQCardsComponent],
        declarations: [ca_wizard_qcards_component_1.CAWizardQCardsComponent],
        providers: [],
    })
], CAWizardQCardsModule);
exports.CAWizardQCardsModule = CAWizardQCardsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Etd2l6YXJkLXFjYXJkcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYS13aXphcmQtcWNhcmRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLHNCQUFzQjtBQUN0QiwwREFBbUU7QUFDbkUsb0RBQXFFO0FBRXJFLDJFQUF1RTtBQVd2RSxJQUFhLG9CQUFvQjtJQUFqQztJQUFvQyxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBQXJDLElBQXFDO0FBQXhCLG9CQUFvQjtJQVRoQyxlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1NBQzFCO1FBQ0QsT0FBTyxFQUFFLENBQUMsb0RBQXVCLENBQUM7UUFDbEMsWUFBWSxFQUFFLENBQUMsb0RBQXVCLENBQUM7UUFDdkMsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztHQUNXLG9CQUFvQixDQUFJO0FBQXhCLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgQ0FXaXphcmRRQ2FyZHNDb21wb25lbnQgfSBmcm9tICcuL2NhLXdpemFyZC1xY2FyZHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtDQVdpemFyZFFDYXJkc0NvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbQ0FXaXphcmRRQ2FyZHNDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENBV2l6YXJkUUNhcmRzTW9kdWxlIHsgfVxuIl19