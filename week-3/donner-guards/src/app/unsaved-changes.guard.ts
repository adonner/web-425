/*============================================
; Title: unsaved-changes.guard.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  unsaved-changes.guard.ts
;===========================================
*/


// start program

import { CanDeactivate, Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

    canDeactivate(component: ProductComponent) {
        if (component.name.dirty) {
            return window.confirm("You have unsaved changes.  Still want to leave?");
        } else {
            return true;
        }
    }
}

// end program