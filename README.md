# Angular Dropdown

An npm Package Angular 2 Dropdown.

## Basic Usage

This example has four links's in the dropdown
```html
 
  <dropdown-select-list>
     <dropdown-select-link [default]="true">                  
      <a href="#" class="nav-link">
        <span> About </span>
      </a>
     </dropdown-select-link>
     <dropdown-select-link> 
      <a href="#" class="nav-link">
        <span> Contact  </span>
      </a>
     </dropdown-select-link>
     <dropdown-select-link> 
      <a href="#" class="nav-link">
        <span> Delivery  </span>
      </a>
     </dropdown-select-link>
     <dropdown-select-link> 
      <a href="#" class="nav-link">
        <span> Refunds  </span>
      </a>
     </dropdown-select-link>                                          
  </dropdown-select-list>   

```

## Install

use the npm install --save to add it.
```html
$ npm install angular-2-dropdown --save
```

## Add the Module to your App or Shared component

Add to the Shared module.
```html
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
..........
import { DropdownModule } from 'angular-2-dropdown/mk-dropdown/dropdown.module';

@NgModule({
  imports: [
  CommonModule,
  DropdownModule],
  declarations: [
    ......
    ],
  exports: [
    CommonModule,
    .......,
    DropdownModule
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}

```


## Make sure component has the Shared module.

Add to the Shared module to page requiring the dropdown (eg AboutComponent)
```html
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
........
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, SharedModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }

```

## Html rendering of dropdown on About page.

Html to page.
```html

  <dropdown-select-list>
     <dropdown-select-link [default]="true">                  
      <a href="#" class="nav-link">
        <span> About </span>
      </a>
     </dropdown-select-link>
     <dropdown-select-link> 
      <a href="#" class="nav-link">
        <span> Contact  </span>
      </a>
     </dropdown-select-link>
     <dropdown-select-link> 
      <a href="#" class="nav-link">
        <span> Delivery  </span>
      </a>
     </dropdown-select-link>
     <dropdown-select-link> 
      <a href="#" class="nav-link">
        <span> Refunds  </span>
      </a>
     </dropdown-select-link>                                          
  </dropdown-select-list>  

```

## Module not found 
If after your install, you are getting module not found, you will need to update the project.config.ts file
```html
      {
        name: 'angular-2-dropdown',
        path: 'node_modules/angular-2-dropdown',
        packageMeta: {
          main: 'dropdown.module.js',
          defaultExtension: 'js'
        }
      },
```

