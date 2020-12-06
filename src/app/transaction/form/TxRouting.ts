import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
const routes: Routes = [
    {
        path: 'tx',
        children: [
            {
            path: 'create',
            component: CreateNewComponent
            }
        ]
    }
]
export const TxRoutingModule = RouterModule.forChild(routes);