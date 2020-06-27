import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FuseSharedModule } from '@fuse/shared.module';


//COMPONENTS
import { ProductContentlistComponent } from './product-content-list/product-content-list.component';
import { MainSidebarComponent } from 'app/layout/components/main-sidebar/main-sidebar.component';
import { ContactFormModal } from 'app/layout/modals/contacts/contact-form.modal';

//<!---Angular material--->
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

///NGX-MODULE
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AgmCoreModule } from '@agm/core';







@NgModule({
    declarations: [
        ProductComponent,
        ProductContentlistComponent,
        MainSidebarComponent,
        ContactFormModal,
     
    ],
    imports: [
        ProductRoutingModule,
        FuseSharedModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatDatepickerModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        NgxChartsModule,
        MatRippleModule,
        MatChipsModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatSortModule,
        MatTabsModule,
        AgmCoreModule
    ],
    entryComponents: [ContactFormModal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class ProductModule { }