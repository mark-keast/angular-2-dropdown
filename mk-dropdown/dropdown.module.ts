import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectLinkComponent } from './dropdown-select-link.component';
import { DropdownSelectListComponent } from './dropdown-select-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownSelectListComponent ,
    DropdownSelectLinkComponent 
  ],
  exports: [
    DropdownSelectListComponent ,
    DropdownSelectLinkComponent 
  ]
})
export class DropdownModule { }