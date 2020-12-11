import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { fromEventPattern, Observable } from 'rxjs';
import { TxService } from './tx.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TxExistsGuard implements CanActivate {
  constructor(private tx: TxService, private router: Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.tx.getPendingTx(route.params['id']).pipe(map(x => x!=null)).toPromise().then(txExists => {
      if(!txExists) this.router.navigate([route.data.redirectTo]);
      return txExists;
    })
  }
  
}
