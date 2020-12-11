import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CreateNewComponent } from './form/create-new/create-new.component';
import { EditGuard } from './form/edit.guard';
import { EditComponent } from './form/edit/edit.component';
import { TxCompleteComponent } from './tx-complete/tx-complete.component';
const routes: Routes = [
    {
        path: 'tx',
        children: [
            {
                path: 'create',
                component: CreateNewComponent,
                canActivate: [AuthGuard],
                data:{
                    isLogged: true,
                    redirectTo: 'user/login'
                }
            },
            {
                path: 'transact/:id',
                component: TxCompleteComponent
            },
            {
                path: 'edit/:id',
                component: EditComponent,
                canActivate: [EditGuard]
            }
        ]
    },
]
export const TxRoutingModule = RouterModule.forChild(routes);