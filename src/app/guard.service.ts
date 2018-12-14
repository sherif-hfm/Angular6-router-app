import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild,CanDeactivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
  canDeactivate: ()=> boolean;
}
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate,CanActivateChild,CanDeactivate<CanComponentDeactivate> {
  
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
  {
    console.log('canActivate');
    return true;
    //this.router.navigate(['/']);
    //return false;
    
  }
  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
  {
    console.log('canActivateChild');
    return true;
    //this.router.navigate(['/']);
    //return false;
    
  }
  canDeactivate(component: CanComponentDeactivate,crRoute: ActivatedRouteSnapshot,crState:RouterStateSnapshot,nextRoute?: RouterStateSnapshot):boolean
  {
    return component.canDeactivate();
  }
}
