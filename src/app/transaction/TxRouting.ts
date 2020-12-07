import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './form/create-new/create-new.component';
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
            }
        ]
    },
]
export const TxRoutingModule = RouterModule.forChild(routes);