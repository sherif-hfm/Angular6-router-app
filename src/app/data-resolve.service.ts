import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolveService implements Resolve<string> {

  constructor() { }
  resolve(router: ActivatedRouteSnapshot,state: RouterStateSnapshot):string
  {
  return "OK Data";
  }
}
