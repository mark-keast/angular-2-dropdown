import { DropdownSelectListComponent } from './dropdown-select-list.component';
import { Component, Input, ElementRef, Renderer2, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dropdown-select-link',
    template: `
    <span id="dropdownChevron" class="fa fa-chevron-down dropdown-select-list-arrow" 

        (click)="toggleAllItems()"></span>
    <div class="dropdown-select-link-container" (click)="makeDefault()">
     <ng-content></ng-content>
    </div>
    `
})
export class DropdownSelectLinkComponent implements AfterViewInit, OnChanges {
    @Input('default') default:boolean = false;
    // @Input('active') active:boolean = false;

    // public linkActive:boolean = false;
    public isOpen:boolean = false;

    constructor(private dropdownSelectList:DropdownSelectListComponent,
                public el: ElementRef,
                private renderer: Renderer2){ }

    /// for 'order' css to work need to add classes to the component tag its self.                
    public ngAfterViewInit() {
        if (this.default) {
            this.renderer.addClass(this.el.nativeElement,'defaultLink')
        }else {
            this.renderer.addClass(this.el.nativeElement,'link')
        }
    }
    public removeDefault(){
            this.removeClass('defaultLink');
            this.addClass('link');
    }
    public makeDefault(){
        this.dropdownSelectList.removeAllDefaults();
        this.addClass('defaultLink');
        this.dropdownSelectList.closeDropdown();
    }
    public toggleAllItems(){
        this.dropdownSelectList.toggleAll();
    }

    // public ngOnChanges(changes: SimpleChanges) { 
    //     this.linkActive = changes.active.currentValue;
    // }

    public addClass(className:string){
        this.renderer.addClass(this.el.nativeElement,className);
    }
    public removeClass(className:string){
        this.renderer.removeClass(this.el.nativeElement,className);
    }
    public toggleAll(){
        if(this.el.nativeElement.classList.contains('toggleList')){
            this.renderer.removeClass(this.el.nativeElement,'toggleList');
            this.isOpen = false;
        }else {
            this.renderer.addClass(this.el.nativeElement,'toggleList');
            this.isOpen = true;
        }
    }
    public closeDropdown(){
        this.renderer.removeClass(this.el.nativeElement,'toggleList');
        this.isOpen = false;
    }
}