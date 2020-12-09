import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './form/create-new/create-new.component';
import { EditComponent } from './form/edit/edit.component';
import { TxCompleteComponent } from './tx-complete/tx-complete.component';
const routes: Routes = [
    {
        path: 'tx',
        children: [
            {
                path: 'create',
                component: CreateNewComponent
            },
            {
                path: 'transact/:id',
                component: TxCompleteComponent
            },
            {
                path: 'edit/:id',
                component: EditComponent
            }
        ]
    },
]
export const TxRoutingModule = RouterModule.forChild(routes);