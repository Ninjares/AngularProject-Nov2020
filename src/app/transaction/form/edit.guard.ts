import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { TxService } from '../tx.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router, private tx: TxService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if(this.userService.isLogged){
     let isOwner:boolean = false
     return this.tx.getPendingTx(route.params['id']).toPromise().then((txData) => {
        if(txData == null){
          this.router.navigate(['404']);
          return false;
        }
        isOwner = txData.publisherUsername == this.userService.LoggedUser;
        if(isOwner) return isOwner;
        else {
          this.router.navigate(['404']);
          return false;
        }
      });
    }
    else return false;
  }
  
}
