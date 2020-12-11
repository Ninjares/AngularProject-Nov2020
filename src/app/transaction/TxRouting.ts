import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CreateNewComponent } from './form/create-new/create-new.component';
import { EditGuard } from './form/edit.guard';
import { EditComponent } from './form/edit/edit.component';
import { TxCompleteComponent } from './tx-complete/tx-complete.component';
import { TxExistsGuard } from './tx-exists.guard';
const routes: Routes = [
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
        component: TxCompleteComponent,
        canActivate: [TxExistsGuard, AuthGuard],
        data:{
            isLogged: true,
            redirectTo: '404'
        }
    },
    {
        path: 'edit/:id',
        component: EditComponent,
        canActivate: [EditGuard]
    }
]
export const TxRoutingModule = RouterModule.forChild(routes);