import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { TxService } from '../tx.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-tx-complete',
  templateUrl: './tx-complete.component.html',
  styleUrls: ['./tx-complete.component.css']
})
export class TxCompleteComponent implements OnInit {

  itemId:string = this.activatedRoute.snapshot.params.id;
  transaction;
  buyerFunds: number;
  constructor(private activatedRoute: ActivatedRoute, private txService: TxService, private userService:UserService, private router: Router) {

  }

  errorMessage:string = "N/A";
  showErrorMessage:boolean = false;

  showLoadingMessage: boolean = false;

  showSuccessMessage: boolean = false;
  successMessage: string = "Success";
  
  showPurchaseQuery:boolean = false;
  showMainQuery: boolean = true;
  showPurchase(){
    this.showPurchaseQuery = !this.showPurchaseQuery;
    this.showMainQuery = !this.showMainQuery;
  }

  ngOnInit(): void {
    this.txService.getPendingTx(this.activatedRoute.snapshot.params.id).subscribe(
      (success) => {
        this.transaction = success;
      },
      (error) => {
        console.log(error.message);
      })
    this.userService.getUser(this.userService.LoggedUser).pipe(map(x => x.USD)).subscribe((funds)=>{
      console.log(funds);
      this.buyerFunds = funds;
    })
  }

  purchase(){
    this.showLoadingMessage = true;
    this.showPurchaseQuery = false;
    this.txService.purchase(this.itemId).subscribe(
    (userPass) => {
      userPass.subscribe(
      (fundPass) => { 
        fundPass.subscribe(
          (txCreated) => {
            txCreated.subscribe(
              (pendingDeleted) => {
                this.showLoadingMessage = false;
                console.log('Success');
                this.successMessage = "Purchase successful";
                this.showSuccessMessage = true;
                setTimeout(() =>{
                 this.showSuccessMessage = false;
                 this.router.navigate([`user/${this.userService.LoggedUser}`])
                },1500)
              },
              (error) => {
                this.showLoadingMessage = false;
                this.errorMessage = error.message;
                this.showErrorMessage = true
              })
          },
          (error) => {
            this.showLoadingMessage = false;
            this.errorMessage = error.message;
            this.showErrorMessage = true
          })
      }, 
      (error) => {
        this.showLoadingMessage = false;
        this.errorMessage = error.message;
        this.showErrorMessage = true
      });
    },
    (error) => {
      this.showLoadingMessage = false;
      this.errorMessage = error.message;
      this.showErrorMessage = true
    });
  }

}
