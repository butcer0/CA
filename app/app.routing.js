"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//app imports
var auth_guard_service_1 = require("./services/auth-guard.service");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
var routes = [
    // { path: '', redirectTo: '/pt-backlog', pathMatch: 'full' }
    { path: '', redirectTo: 'ca-wizard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxhQUFhO0FBQ2Isb0VBQTBEO0FBRTdDLFFBQUEsYUFBYSxHQUFHO0lBQ3pCLDhCQUFTO0NBQ1osQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFXO0lBQ25CLDZEQUE2RDtJQUM3RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQzNELENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuICAgIEF1dGhHdWFyZFxuXTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wdC1iYWNrbG9nJywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdjYS13aXphcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==