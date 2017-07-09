"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var CAWizardComponent = (function () {
    function CAWizardComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.itemTitle = ' ';
    }
    CAWizardComponent.prototype.ngOnInit = function () { };
    CAWizardComponent.prototype.onNavBackTap = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return CAWizardComponent;
}());
CAWizardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ca-wizard',
        templateUrl: 'ca-wizard.component.html'
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CAWizardComponent);
exports.CAWizardComponent = CAWizardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Etd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhLXdpemFyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUlsRCxzREFBK0Q7QUFVL0QsSUFBYSxpQkFBaUI7SUFHMUIsMkJBQ1ksZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdkMsY0FBUyxHQUFXLEdBQUcsQ0FBQztJQUczQixDQUFDO0lBRUwsb0NBQVEsR0FBUixjQUFhLENBQUM7SUFFUCx3Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFHTCx3QkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQyxDQUFDO3FDQU1nQyx5QkFBZ0I7R0FKckMsaUJBQWlCLENBYzdCO0FBZFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IH0gZnJvbSAnLi4vc2VydmljZXMvJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnY2Etd2l6YXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NhLXdpemFyZC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDQVdpemFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgaXRlbVRpdGxlOiBzdHJpbmcgPSAnICc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgcHVibGljIG9uTmF2QmFja1RhcCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuXG59Il19