import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BaseComponent } from './base/base.component';
import { PadreComponent } from './base/padre/padre.component';
import { HijoComponent } from './base/padre/hijo/hijo.component';
import { HermanoComponent } from './base/padre/hermano/hermano.component';

const appRoutes: Routes = [
    {path: '', component: BaseComponent, children: [
        {path: 'padre', component: PadreComponent, children: [
            {path: 'hijo', component: HijoComponent},
            {path: 'hermano', component: HermanoComponent}
        ]}
    ]},
  ];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class BaseRoutingModule {}