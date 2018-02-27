import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthenticationService } from '../interceptors/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(
  	private authenticationService: AuthenticationService,
  	private router: Router
  	) { 
	  	this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  	if (this.currentUser == null) {
  		this.router.navigate(['login']);
  	}
  }

  logout(){
  	this.authenticationService.logout(this.currentUser.id).subscribe(() => { 
  		localStorage.removeItem('currentUser');
  		this.router.navigate(['login']);
  	});
  }

}
