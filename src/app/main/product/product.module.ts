import { NgModule } from "@angular/core";
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FuseSharedModule } from '@fuse/shared.module';

import { ProductContentlistComponent } from './product-content-list/product-content-list.component';

//<!---Angular material--->




@NgModule({
    declarations: [ProductComponent,ProductContentlistComponent],
    imports: [
        ProductRoutingModule,
        FuseSharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})

export class ProductModule { }