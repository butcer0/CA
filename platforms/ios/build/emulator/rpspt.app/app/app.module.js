"use strict";
//angular imports
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
//app imports
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var pt_login_module_1 = require("./pt-login/pt-login.module");
var pt_backlog_module_1 = require("./pt-backlog/pt-backlog.module");
var services_1 = require("./services");
var status_bar_util_1 = require("./shared/status-bar-util");
var ca_wizard_module_1 = require("./ca-wizard/ca-wizard.module");
status_bar_util_1.setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            app_routing_1.AppRoutingModule,
            pt_login_module_1.LoginModule,
            pt_backlog_module_1.PTBacklogModule,
            ca_wizard_module_1.CAWizardModule
        ],
        providers: [
            services_1.UserService,
            services_1.AuthenticationService,
            app_routing_1.authProviders
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQixzQ0FBMkQ7QUFFM0Qsc0JBQXNCO0FBQ3RCLDBEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsYUFBYTtBQUNiLDZDQUFnRTtBQUNoRSxpREFBK0M7QUFDL0MsOERBQXlEO0FBQ3pELG9FQUFpRTtBQUNqRSx1Q0FBZ0U7QUFDaEUsNERBQThEO0FBRTlELGlFQUE4RDtBQUU5RCxvQ0FBa0IsRUFBRSxDQUFDO0FBMEJyQixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF4QnJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1lBQ2xCLGlDQUF3QjtZQUN4Qiw4QkFBZ0I7WUFDaEIsNkJBQVc7WUFDWCxtQ0FBZTtZQUNmLGlDQUFjO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asc0JBQVc7WUFDWCxnQ0FBcUI7WUFDckIsMkJBQWE7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgYXV0aFByb3ZpZGVycyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tIFwiLi9wdC1sb2dpbi9wdC1sb2dpbi5tb2R1bGVcIjtcbmltcG9ydCB7IFBUQmFja2xvZ01vZHVsZSB9IGZyb20gXCIuL3B0LWJhY2tsb2cvcHQtYmFja2xvZy5tb2R1bGVcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3NoYXJlZC9zdGF0dXMtYmFyLXV0aWxcIjtcblxuaW1wb3J0IHsgQ0FXaXphcmRNb2R1bGUgfSBmcm9tIFwiLi9jYS13aXphcmQvY2Etd2l6YXJkLm1vZHVsZVwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBMb2dpbk1vZHVsZSxcbiAgICAgICAgUFRCYWNrbG9nTW9kdWxlLFxuICAgICAgICBDQVdpemFyZE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIGF1dGhQcm92aWRlcnNcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19