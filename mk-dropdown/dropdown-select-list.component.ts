import { DropdownSelectLinkComponent } from './dropdown-select-link.component';
import { Component, 
         forwardRef, 
         ViewEncapsulation, 
         ContentChildren, 
         Renderer2, 
         QueryList, 
         HostListener, 
         AfterViewInit, 
         ViewChild, 
         ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dropdown-select-list',
    template: `
    <div class="dropdown-select-list">
        <div class="select-list" #listContainer>
            <ng-content></ng-content>
        </div>
    </div>
    `,
    styleUrls:['dropdown-select-list.component.css'],
    encapsulation:ViewEncapsulation.None,
})
export class DropdownSelectListComponent implements AfterViewInit{
    @ContentChildren( forwardRef(() => DropdownSelectLinkComponent) )
        links: QueryList<DropdownSelectLinkComponent>;

    @ViewChild('listContainer') listContainer:ElementRef;

    private newWidth:any;
    constructor(private renderer:Renderer2){ }

    public toggleAll(){
        this.links.forEach(i =>{
            i.toggleAll();
        });
    }
    public closeDropdown() {
        this.links.forEach(i => {
            i.closeDropdown();
        });
    }
    public removeAllDefaults() {
        this.links.forEach(i =>{
            i.removeDefault();
        });
    }
    public setContainerWidth() {
        let setWidth = 0;
        this.links.forEach(i => {
            setWidth = i.el.nativeElement.offsetWidth > setWidth ? i.el.nativeElement.offsetWidth : setWidth;
        });
         this.renderer.setStyle(this.listContainer.nativeElement,'width',setWidth+'px');
    }
    public ngAfterViewInit() {
        this.setContainerWidth();
    }

   @HostListener('document:click', ['$event.target'])
    documentClick(target: any) {
        if(target.id !== 'dropdownChevron'){
            this.links.forEach(i => {
                i.closeDropdown();
            });
        }
    }

   @HostListener('window:resize', ['$event.target'])
    windowResize(target: any) {
        this.renderer.removeStyle(this.listContainer.nativeElement,'width');
        this.setContainerWidth();
    }
}