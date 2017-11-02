(function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL) {"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dropdown_select_link_component_1 = require("./dropdown-select-link.component");
var core_1 = require("@angular/core");
var DropdownSelectListComponent = (function () {
    function DropdownSelectListComponent(renderer) {
        this.renderer = renderer;
    }
    DropdownSelectListComponent.prototype.toggleAll = function () {
        this.links.forEach(function (i) {
            i.toggleAll();
        });
    };
    DropdownSelectListComponent.prototype.closeDropdown = function () {
        this.links.forEach(function (i) {
            i.closeDropdown();
        });
    };
    DropdownSelectListComponent.prototype.removeAllDefaults = function () {
        this.links.forEach(function (i) {
            i.removeDefault();
        });
    };
    DropdownSelectListComponent.prototype.setContainerWidth = function () {
        var setWidth = 0;
        this.links.forEach(function (i) {
            setWidth = i.el.nativeElement.offsetWidth > setWidth ? i.el.nativeElement.offsetWidth : setWidth;
        });
        this.renderer.setStyle(this.listContainer.nativeElement, 'width', setWidth + 'px');
    };
    DropdownSelectListComponent.prototype.ngAfterViewInit = function () {
        this.setContainerWidth();
    };
    DropdownSelectListComponent.prototype.documentClick = function (target) {
        if (target.id !== 'dropdownChevron') {
            this.links.forEach(function (i) {
                i.closeDropdown();
            });
        }
    };
    DropdownSelectListComponent.prototype.windowResize = function (target) {
        this.renderer.removeStyle(this.listContainer.nativeElement, 'width');
        this.setContainerWidth();
    };
    __decorate([
        core_1.ContentChildren(core_1.forwardRef(function () { return dropdown_select_link_component_1.DropdownSelectLinkComponent; })),
        __metadata("design:type", core_1.QueryList)
    ], DropdownSelectListComponent.prototype, "links", void 0);
    __decorate([
        core_1.ViewChild('listContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], DropdownSelectListComponent.prototype, "listContainer", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownSelectListComponent.prototype, "documentClick", null);
    __decorate([
        core_1.HostListener('window:resize', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownSelectListComponent.prototype, "windowResize", null);
    DropdownSelectListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dropdown-select-list',
            template: "\n    <div class=\"dropdown-select-list\">\n        <div class=\"select-list\" #listContainer>\n            <ng-content></ng-content>\n        </div>\n    </div>\n    ",
            styleUrls: ['dropdown-select-list.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [core_1.Renderer2])
    ], DropdownSelectListComponent);
    return DropdownSelectListComponent;
}());
exports.DropdownSelectListComponent = DropdownSelectListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi1zZWxlY3QtbGlzdC9kcm9wZG93bi1zZWxlY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtRkFBK0U7QUFDL0Usc0NBUzJDO0FBZTNDO0lBT0kscUNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBRW5DLCtDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxtREFBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNoQixDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sdURBQWlCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSx1REFBaUIsR0FBeEI7UUFDSSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ2hCLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyRyxDQUFDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNNLHFEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUdELG1EQUFhLEdBQWIsVUFBYyxNQUFXO1FBQ3JCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssaUJBQWlCLENBQUMsQ0FBQSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFHRCxrREFBWSxHQUFaLFVBQWEsTUFBVztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBOUNHO1FBREgsc0JBQWUsQ0FBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSw0REFBMkIsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFFO2tDQUN0RCxnQkFBUzs4REFBOEI7SUFFdEI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWUsaUJBQVU7c0VBQUM7SUFnQ3JEO1FBREEsbUJBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7O29FQU9oRDtJQUdEO1FBREEsbUJBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7OzttRUFJL0M7SUFoRFEsMkJBQTJCO1FBYnZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUseUtBTVQ7WUFDRCxTQUFTLEVBQUMsQ0FBQyxvQ0FBb0MsQ0FBQztZQUNoRCxhQUFhLEVBQUMsd0JBQWlCLENBQUMsSUFBSTtTQUN2QyxDQUFDO3lDQVErQixnQkFBUztPQVA3QiwyQkFBMkIsQ0FpRHZDO0lBQUQsa0NBQUM7Q0FqREQsQUFpREMsSUFBQTtBQWpEWSxrRUFBMkIiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duLXNlbGVjdC1saXN0L2Ryb3Bkb3duLXNlbGVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3Bkb3duU2VsZWN0TGlua0NvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24tc2VsZWN0LWxpbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBcclxuICAgICAgICAgZm9yd2FyZFJlZiwgXHJcbiAgICAgICAgIFZpZXdFbmNhcHN1bGF0aW9uLCBcclxuICAgICAgICAgQ29udGVudENoaWxkcmVuLCBcclxuICAgICAgICAgUmVuZGVyZXIyLCBcclxuICAgICAgICAgUXVlcnlMaXN0LCBcclxuICAgICAgICAgSG9zdExpc3RlbmVyLCBcclxuICAgICAgICAgQWZ0ZXJWaWV3SW5pdCwgXHJcbiAgICAgICAgIFZpZXdDaGlsZCwgXHJcbiAgICAgICAgIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZHJvcGRvd24tc2VsZWN0LWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1zZWxlY3QtbGlzdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtbGlzdFwiICNsaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6Wydkcm9wZG93bi1zZWxlY3QtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOlZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlbGVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbiggZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93blNlbGVjdExpbmtDb21wb25lbnQpIClcclxuICAgICAgICBsaW5rczogUXVlcnlMaXN0PERyb3Bkb3duU2VsZWN0TGlua0NvbXBvbmVudD47XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbGlzdENvbnRhaW5lcicpIGxpc3RDb250YWluZXI6RWxlbWVudFJlZjtcclxuXHJcbiAgICBwcml2YXRlIG5ld1dpZHRoOmFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6UmVuZGVyZXIyKXsgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVBbGwoKXtcclxuICAgICAgICB0aGlzLmxpbmtzLmZvckVhY2goaSA9PntcclxuICAgICAgICAgICAgaS50b2dnbGVBbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbG9zZURyb3Bkb3duKCkge1xyXG4gICAgICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgaS5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsRGVmYXVsdHMoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKGkgPT57XHJcbiAgICAgICAgICAgIGkucmVtb3ZlRGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldENvbnRhaW5lcldpZHRoKCkge1xyXG4gICAgICAgIGxldCBzZXRXaWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICBzZXRXaWR0aCA9IGkuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA+IHNldFdpZHRoID8gaS5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIDogc2V0V2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsJ3dpZHRoJyxzZXRXaWR0aCsncHgnKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250YWluZXJXaWR0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSlcclxuICAgIGRvY3VtZW50Q2xpY2sodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICBpZih0YXJnZXQuaWQgIT09ICdkcm9wZG93bkNoZXZyb24nKXtcclxuICAgICAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaS5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudC50YXJnZXQnXSlcclxuICAgIHdpbmRvd1Jlc2l6ZSh0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsJ3dpZHRoJyk7XHJcbiAgICAgICAgdGhpcy5zZXRDb250YWluZXJXaWR0aCgpO1xyXG4gICAgfVxyXG59Il19

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);