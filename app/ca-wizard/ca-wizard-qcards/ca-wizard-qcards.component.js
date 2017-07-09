"use strict";
var core_1 = require("@angular/core");
var _1 = require("../../services/");
var CAWizardQCardsComponent = (function () {
    function CAWizardQCardsComponent(wizardService) {
        this.wizardService = wizardService;
        this._selectedAnswerScreenIndex = 0;
    }
    Object.defineProperty(CAWizardQCardsComponent.prototype, "curQCard", {
        get: function () {
            return this.wizardService.CurQCard;
        },
        enumerable: true,
        configurable: true
    });
    CAWizardQCardsComponent.prototype.ngOnInit = function () {
    };
    CAWizardQCardsComponent.prototype.onLoaded = function (args) {
        alert('onLoaded called');
    };
    CAWizardQCardsComponent.prototype.onItemLoading = function (args) {
        alert('onItemLoading called');
    };
    CAWizardQCardsComponent.prototype.onItemTap = function (args) {
        alert('onItemTap called');
    };
    return CAWizardQCardsComponent;
}());
CAWizardQCardsComponent = __decorate([
    core_1.Component({
        selector: 'ca-wizard-qcards',
        templateUrl: 'ca-wizard-qcards.component.html'
    }),
    __metadata("design:paramtypes", [_1.WizardService])
], CAWizardQCardsComponent);
exports.CAWizardQCardsComponent = CAWizardQCardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Etd2l6YXJkLXFjYXJkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYS13aXphcmQtcWNhcmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELG9DQUFnRDtBQVFoRCxJQUFhLHVCQUF1QjtJQVNoQyxpQ0FDVyxhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVIvQiwrQkFBMEIsR0FBVyxDQUFDLENBQUM7SUFTM0MsQ0FBQztJQVBMLHNCQUFXLDZDQUFRO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBT0QsMENBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSwwQ0FBUSxHQUFmLFVBQWdCLElBQVM7UUFDckIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLCtDQUFhLEdBQXBCLFVBQXFCLElBQVM7UUFDMUIsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLDJDQUFTLEdBQWhCLFVBQWlCLElBQVM7UUFDdEIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSx1QkFBdUI7SUFMbkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGlDQUFpQztLQUNqRCxDQUFDO3FDQVk0QixnQkFBYTtHQVY5Qix1QkFBdUIsQ0E0Qm5DO0FBNUJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaXphcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NhLXdpemFyZC1xY2FyZHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnY2Etd2l6YXJkLXFjYXJkcy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDQVdpemFyZFFDYXJkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RlZEFuc3dlclNjcmVlbkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIGdldCBjdXJRQ2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU2VydmljZS5DdXJRQ2FyZDtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgd2l6YXJkU2VydmljZTogV2l6YXJkU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWRlZChhcmdzOiBhbnkpIHtcbiAgICAgICAgYWxlcnQoJ29uTG9hZGVkIGNhbGxlZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1Mb2FkaW5nKGFyZ3M6IGFueSkge1xuICAgICAgICBhbGVydCgnb25JdGVtTG9hZGluZyBjYWxsZWQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3M6IGFueSkge1xuICAgICAgICBhbGVydCgnb25JdGVtVGFwIGNhbGxlZCcpO1xuICAgIH1cbn0iXX0=