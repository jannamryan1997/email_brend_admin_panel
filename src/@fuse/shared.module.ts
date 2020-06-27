import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FuseDirectivesModule } from '@fuse/directives/directives';
import { FusePipesModule } from '@fuse/pipes/pipes.module';

////COMPONENTS
import { HeaderComponent } from 'app/layout/components/header/header.component';


//MATERIAL MODULE

import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';


@NgModule({
    declarations:[HeaderComponent],
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule,
        MatIconModule,
        MatButtonModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule,
        HeaderComponent
    ]
})
export class FuseSharedModule
{
}
