import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';

import { SampleRoutingModule } from './sample.routing.module';



@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [

        TranslateModule,

        FuseSharedModule,

        SampleRoutingModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
