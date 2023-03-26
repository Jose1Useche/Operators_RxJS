import { NgModule } from '@angular/core'

import { BaseRoutingModule } from './base.routing.module';
import { BaseComponent } from './base/base.component';
import { PadreComponent } from './base/padre/padre.component';

@NgModule({
    declarations: [
        BaseComponent,
        PadreComponent
    ],
    imports: [BaseRoutingModule]
})
export class BaseModule {}