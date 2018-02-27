import { Component, OnInit, Input } from '@angular/core';

import { User } from '../_models/user';
import { UserService } from '../user.service';
import { AuthenticationService } from '../interceptors/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() user: User;
  model: any = {};

  constructor(
  	private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login() {
  	this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log(data)
                    this.router.navigate(['home']);
                },
                error => {
                    console.log("fail")
                    this.model = ""
                });
  }

}

