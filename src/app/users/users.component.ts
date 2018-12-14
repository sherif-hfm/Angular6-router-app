import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,private arouter:ActivatedRoute) { }

  ngOnInit() {
  }
  onclick()
  {
    console.log(this.arouter);
    this.router.navigate(['servers']);
    //this.router.navigate(['servers'],{relativeTo:this.arouter}); // this will gives error
  }
}
