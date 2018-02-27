import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentUser: any = {};

  constructor(
    private router: Router
  ){ 
  	this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  	if (this.currentUser == null) {
  		this.router.navigate(['login']);
  	}else{
  		this.router.navigate(['home']);
  	}
  }
}

