import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GuardService } from './guard.service';
import { DataResolveService } from './data-resolve.service';

const routes: Routes = [
  {path : '', redirectTo:'/home',pathMatch: 'full'}, // tell the router how to math the path full path or prefix
  {path : 'home',component:HomeComponent,pathMatch: 'prefix'},
  {path : 'users',
  canActivate:[GuardService],  
  component:UsersComponent},
  {path : 'servers',canActivateChild:[GuardService],component:ServersComponent , children:[
    {path : ':name',canDeactivate:[GuardService] ,component:ServerComponent}
  ]},
  {path : 'users/:id',component:UserComponent},
  {path : 'admin',redirectTo:'/users'},
  {path : '**',component:ErrorPageComponent,data:{msg:'error1'},resolve:{myData:DataResolveService}} // must be last route this for and undefined path - data used for static data , resolve used to dynamic data from service
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes,{useHash:true})], // useHash to make web server let the routing to angular
  exports: [RouterModule]
})
export class AppRoutingModule { }
