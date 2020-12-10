import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxService } from './tx.service';
import { LiPendingComponent } from './li-pending/li-pending.component';
import { CreateNewComponent } from './form/create-new/create-new.component';
import { EditComponent } from './form/edit/edit.component';
import { TxRoutingModule } from './TxRouting';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VPendingComponent } from './v-pending/v-pending.component';
import { TxCompleteComponent } from './tx-complete/tx-complete.component';
import { LiCompleteComponent } from './li-complete/li-complete.component';
import { VCompleteComponent } from './v-complete/v-complete.component';

@NgModule({
  declarations: [
    LiPendingComponent,
    CreateNewComponent,
    EditComponent,
    VPendingComponent,
    TxCompleteComponent,
    LiCompleteComponent,
    VCompleteComponent
  ],
  imports: [
    CommonModule,
    TxRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    TxService
  ],
  exports:[
    LiPendingComponent,
    LiCompleteComponent
  ]
})
export class TxModule { }
