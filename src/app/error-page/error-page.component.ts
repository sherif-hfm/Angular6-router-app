import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
errMsg: string;
myData: string;
  constructor(private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.errMsg=this.aroute.snapshot.data['msg'];
    this.aroute.data.subscribe((data: Data)=>{
      this.errMsg=data['msg'];
    });
    this.myData=this.aroute.snapshot.data['myData'];
  }

}
