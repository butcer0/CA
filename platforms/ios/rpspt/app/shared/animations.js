"use strict";
var core_1 = require("@angular/core");
// Component transition animations
exports.slideInDownAnimation = core_1.trigger('routeAnimation', [
    core_1.state('*', core_1.style({
        opacity: 1,
        transform: 'translate(0, 0)'
    })),
    core_1.transition(':enter', [
        core_1.style({
            opacity: 0,
            transform: 'translate(-500, 0)'
        }),
        core_1.animate(600)
    ]),
    core_1.transition(':leave', [
        core_1.animate(600, core_1.style({
            opacity: 0,
            transform: 'translate(0, 500)'
        }))
    ])
]);
exports.slideInAnimations = [
    core_1.trigger('slideIn', [
        core_1.state('on', core_1.style({ transform: 'translate(0, 0)', opacity: 1 })),
        core_1.state('off', core_1.style({ transform: 'translate(-20, 0)', opacity: 0 })),
        core_1.transition('off => on', core_1.animate(600)),
        core_1.transition('* => on', [
            core_1.style({ transform: 'translate(20, 0)', opacity: 0 }),
            core_1.animate(600)
        ])
    ])
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRztBQUVuRyxrQ0FBa0M7QUFDckIsUUFBQSxvQkFBb0IsR0FDN0IsY0FBTyxDQUFDLGdCQUFnQixFQUFFO0lBQ3RCLFlBQUssQ0FBQyxHQUFHLEVBQ0wsWUFBSyxDQUFDO1FBQ0YsT0FBTyxFQUFFLENBQUM7UUFDVixTQUFTLEVBQUUsaUJBQWlCO0tBQy9CLENBQUMsQ0FDTDtJQUNELGlCQUFVLENBQUMsUUFBUSxFQUFFO1FBQ2pCLFlBQUssQ0FBQztZQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDO1FBQ0YsY0FBTyxDQUFDLEdBQUcsQ0FBQztLQUNmLENBQUM7SUFDRixpQkFBVSxDQUFDLFFBQVEsRUFBRTtRQUNqQixjQUFPLENBQUMsR0FBRyxFQUFFLFlBQUssQ0FBQztZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLG1CQUFtQjtTQUNqQyxDQUFDLENBQUM7S0FDTixDQUFDO0NBQ0wsQ0FBQyxDQUFDO0FBR0ksUUFBQSxpQkFBaUIsR0FBRztJQUMzQixjQUFPLENBQUMsU0FBUyxFQUFFO1FBQ2YsWUFBSyxDQUFDLElBQUksRUFBRSxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsWUFBSyxDQUFDLEtBQUssRUFBRSxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkUsaUJBQVUsQ0FBQyxXQUFXLEVBQUUsY0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLGlCQUFVLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFlBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEQsY0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNmLENBQUM7S0FDTCxDQUFDO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvbkVudHJ5TWV0YWRhdGEsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnQgdHJhbnNpdGlvbiBhbmltYXRpb25zXG5leHBvcnQgY29uc3Qgc2xpZGVJbkRvd25BbmltYXRpb246IEFuaW1hdGlvbkVudHJ5TWV0YWRhdGEgPVxuICAgIHRyaWdnZXIoJ3JvdXRlQW5pbWF0aW9uJywgW1xuICAgICAgICBzdGF0ZSgnKicsXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMCknXG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwMCwgMCknXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoNjAwKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICAgICAgYW5pbWF0ZSg2MDAsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCA1MDApJ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIF0pXG4gICAgXSk7XG5cblxuZXhwb3J0IHZhciBzbGlkZUluQW5pbWF0aW9ucyA9IFtcbiAgICB0cmlnZ2VyKCdzbGlkZUluJywgW1xuICAgICAgICBzdGF0ZSgnb24nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAwKScsIG9wYWNpdHk6IDEgfSkpLFxuICAgICAgICBzdGF0ZSgnb2ZmJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTIwLCAwKScsIG9wYWNpdHk6IDAgfSkpLFxuICAgICAgICB0cmFuc2l0aW9uKCdvZmYgPT4gb24nLCBhbmltYXRlKDYwMCkpLFxuICAgICAgICB0cmFuc2l0aW9uKCcqID0+IG9uJywgW1xuICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMjAsIDApJywgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoNjAwKVxuICAgICAgICBdKVxuICAgIF0pXG5dOyJdfQ==