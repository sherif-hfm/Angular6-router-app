import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from '../guard.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,CanComponentDeactivate {
  serverName: string;
  constructor(private arouter:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.serverName=this.arouter.snapshot.params['name']; // if the id is changed it will not shown
  }
  canDeactivate():boolean
  {
    console.log('canDeactivate');
    //return false;
    return true;
  }
}
