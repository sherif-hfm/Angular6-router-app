import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 userId: string;
  constructor(private arouter:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.userId=this.arouter.snapshot.params['id']; // if the id is changed it will not shown
    // to handle id changing
    this.arouter.params.subscribe((prms: Params)=>{
      this.userId=prms['id'];
    })
    var mode=this.arouter.snapshot.queryParams['Mode'];
    var fragment=this.arouter.snapshot.fragment;

    console.log(mode);
    console.log(fragment);
  }

  onclock(){
    this.router.navigate(['/users','4'],{queryParams:{Mode:'Edit',Status:'True'},fragment:'loading'});
  }

}
