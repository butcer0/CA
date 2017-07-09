"use strict";
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var ca_wizard_component_1 = require("./ca-wizard.component");
var _1 = require("../services/");
var CAWizardModule = (function () {
    function CAWizardModule() {
    }
    return CAWizardModule;
}());
CAWizardModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule
        ],
        exports: [
            ca_wizard_component_1.CAWizardComponent,
        ],
        declarations: [ca_wizard_component_1.CAWizardComponent],
        providers: [
            _1.WizardService
        ],
    })
], CAWizardModule);
exports.CAWizardModule = CAWizardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Etd2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhLXdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUV6QyxzQkFBc0I7QUFDdEIsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSw2REFBMEQ7QUFHMUQsaUNBQTZDO0FBaUI3QyxJQUFhLGNBQWM7SUFBM0I7SUFBOEIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUEvQixJQUErQjtBQUFsQixjQUFjO0lBZDFCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwrQkFBdUI7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1Q0FBaUI7U0FFcEI7UUFDRCxZQUFZLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQztRQUNqQyxTQUFTLEVBQUU7WUFDUCxnQkFBYTtTQUNoQjtLQUNKLENBQUM7R0FDVyxjQUFjLENBQUk7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBDQVdpemFyZENvbXBvbmVudCB9IGZyb20gJy4vY2Etd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDQVdpemFyZFFDYXJkc0NvbXBvbmVudCB9IGZyb20gJy4vY2Etd2l6YXJkLXFjYXJkcy9jYS13aXphcmQtcWNhcmRzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFdpemFyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy8nO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENBV2l6YXJkQ29tcG9uZW50LFxuXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtDQVdpemFyZENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFdpemFyZFNlcnZpY2VcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDQVdpemFyZE1vZHVsZSB7IH1cbiJdfQ==