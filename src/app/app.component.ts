import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-app';
  serverUrl = '/servers';

  constructor(private router:Router) { }


  onclick()
  {
    this.router.navigate(["/servers"],{queryParams:{AllowEdit:'true'}});
  }
}
