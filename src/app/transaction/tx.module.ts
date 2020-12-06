import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxService } from './tx.service';
import { LiPendingComponent } from './li-pending/li-pending.component';
import { CreateNewComponent } from './form/create-new/create-new.component';
import { EditComponent } from './form/edit/edit.component';
import { TxRoutingModule } from './form/TxRouting';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LiPendingComponent,
    CreateNewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    TxRoutingModule,
    FormsModule
  ],
  providers:[
    TxService
  ],
  exports:[
    LiPendingComponent
  ]
})
export class TxModule { }
