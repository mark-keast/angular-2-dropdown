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
var dropdown_select_list_component_1 = require("./dropdown-select-list.component");
var core_1 = require("@angular/core");
var DropdownSelectLinkComponent = (function () {
    function DropdownSelectLinkComponent(dropdownSelectList, el, renderer) {
        this.dropdownSelectList = dropdownSelectList;
        this.el = el;
        this.renderer = renderer;
        this.default = false;
        this.isOpen = false;
    }
    DropdownSelectLinkComponent.prototype.ngAfterViewInit = function () {
        if (this.default) {
            this.renderer.addClass(this.el.nativeElement, 'defaultLink');
        }
        else {
            this.renderer.addClass(this.el.nativeElement, 'link');
        }
    };
    DropdownSelectLinkComponent.prototype.removeDefault = function () {
        this.removeClass('defaultLink');
        this.addClass('link');
    };
    DropdownSelectLinkComponent.prototype.makeDefault = function () {
        this.dropdownSelectList.removeAllDefaults();
        this.addClass('defaultLink');
        this.dropdownSelectList.closeDropdown();
    };
    DropdownSelectLinkComponent.prototype.toggleAllItems = function () {
        this.dropdownSelectList.toggleAll();
    };
    DropdownSelectLinkComponent.prototype.addClass = function (className) {
        this.renderer.addClass(this.el.nativeElement, className);
    };
    DropdownSelectLinkComponent.prototype.removeClass = function (className) {
        this.renderer.removeClass(this.el.nativeElement, className);
    };
    DropdownSelectLinkComponent.prototype.toggleAll = function () {
        if (this.el.nativeElement.classList.contains('toggleList')) {
            this.renderer.removeClass(this.el.nativeElement, 'toggleList');
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.el.nativeElement, 'toggleList');
            this.isOpen = true;
        }
    };
    DropdownSelectLinkComponent.prototype.closeDropdown = function () {
        this.renderer.removeClass(this.el.nativeElement, 'toggleList');
        this.isOpen = false;
    };
    __decorate([
        core_1.Input('default'),
        __metadata("design:type", Boolean)
    ], DropdownSelectLinkComponent.prototype, "default", void 0);
    DropdownSelectLinkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dropdown-select-link',
            template: "\n    <span id=\"dropdownChevron\" class=\"fa fa-chevron-down dropdown-select-list-arrow\" \n\n        (click)=\"toggleAllItems()\"></span>\n    <div class=\"dropdown-select-link-container\" (click)=\"makeDefault()\">\n     <ng-content></ng-content>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [dropdown_select_list_component_1.DropdownSelectListComponent,
            core_1.ElementRef,
            core_1.Renderer2])
    ], DropdownSelectLinkComponent);
    return DropdownSelectLinkComponent;
}());
exports.DropdownSelectLinkComponent = DropdownSelectLinkComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi1zZWxlY3QtbGlzdC9kcm9wZG93bi1zZWxlY3QtbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtRkFBK0U7QUFDL0Usc0NBQWlIO0FBY2pIO0lBT0kscUNBQW9CLGtCQUE4QyxFQUMvQyxFQUFjLEVBQ2IsUUFBbUI7UUFGbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUMvQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVJyQixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBSW5DLFdBQU0sR0FBVyxLQUFLLENBQUM7SUFJWSxDQUFDO0lBR3BDLHFEQUFlLEdBQXRCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUMvRCxDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBQyxNQUFNLENBQUMsQ0FBQTtRQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQUNNLG1EQUFhLEdBQXBCO1FBQ1EsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSxpREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFDTSxvREFBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBTU0sOENBQVEsR0FBZixVQUFnQixTQUFnQjtRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBQyxTQUFTLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ00saURBQVcsR0FBbEIsVUFBbUIsU0FBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNNLCtDQUFTLEdBQWhCO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFDTSxtREFBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFyRGlCO1FBQWpCLFlBQUssQ0FBQyxTQUFTLENBQUM7O2dFQUF5QjtJQURqQywyQkFBMkI7UUFadkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSw2UUFPVDtTQUNKLENBQUM7eUNBUXlDLDREQUEyQjtZQUMzQyxpQkFBVTtZQUNILGdCQUFTO09BVDlCLDJCQUEyQixDQXVEdkM7SUFBRCxrQ0FBQztDQXZERCxBQXVEQyxJQUFBO0FBdkRZLGtFQUEyQiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24tc2VsZWN0LWxpc3QvZHJvcGRvd24tc2VsZWN0LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJvcGRvd25TZWxlY3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1zZWxlY3QtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdkcm9wZG93bi1zZWxlY3QtbGluaycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gaWQ9XCJkcm9wZG93bkNoZXZyb25cIiBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93biBkcm9wZG93bi1zZWxlY3QtbGlzdC1hcnJvd1wiIFxyXG5cclxuICAgICAgICAoY2xpY2spPVwidG9nZ2xlQWxsSXRlbXMoKVwiPjwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1zZWxlY3QtbGluay1jb250YWluZXJcIiAoY2xpY2spPVwibWFrZURlZmF1bHQoKVwiPlxyXG4gICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25TZWxlY3RMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgnZGVmYXVsdCcpIGRlZmF1bHQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gQElucHV0KCdhY3RpdmUnKSBhY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIHB1YmxpYyBsaW5rQWN0aXZlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc09wZW46Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJvcGRvd25TZWxlY3RMaXN0OkRyb3Bkb3duU2VsZWN0TGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMil7IH1cclxuXHJcbiAgICAvLy8gZm9yICdvcmRlcicgY3NzIHRvIHdvcmsgbmVlZCB0byBhZGQgY2xhc3NlcyB0byB0aGUgY29tcG9uZW50IHRhZyBpdHMgc2VsZi4gICAgICAgICAgICAgICAgXHJcbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsJ2RlZmF1bHRMaW5rJylcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCdsaW5rJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlRGVmYXVsdCgpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCdkZWZhdWx0TGluaycpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzKCdsaW5rJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbWFrZURlZmF1bHQoKXtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duU2VsZWN0TGlzdC5yZW1vdmVBbGxEZWZhdWx0cygpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoJ2RlZmF1bHRMaW5rJyk7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93blNlbGVjdExpc3QuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvZ2dsZUFsbEl0ZW1zKCl7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93blNlbGVjdExpc3QudG9nZ2xlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgXHJcbiAgICAvLyAgICAgdGhpcy5saW5rQWN0aXZlID0gY2hhbmdlcy5hY3RpdmUuY3VycmVudFZhbHVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDbGFzcyhjbGFzc05hbWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCxjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZUNsYXNzKGNsYXNzTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9nZ2xlQWxsKCl7XHJcbiAgICAgICAgaWYodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlTGlzdCcpKXtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsJ3RvZ2dsZUxpc3QnKTtcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCd0b2dnbGVMaXN0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xvc2VEcm9wZG93bigpe1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCd0b2dnbGVMaXN0Jyk7XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);