import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserExistsGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      return this.userService.getUser(route.params['id']).pipe(map(x => x!=null)).toPromise().then(userExists => {
        if(!userExists) this.router.navigate(['404']);
        return userExists;
      })
  }
  
}
