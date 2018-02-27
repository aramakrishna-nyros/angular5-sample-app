import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../interceptors/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
  	console.log(this.model)
   
    this.authenticationService.register(this.model.username, this.model.password, this.model.firstName, this.model.lastName)
            .subscribe(
                data => {
                    console.log(data)
                    this.router.navigate(['login']);
                },
                error => {
                    console.log("fail")
                });
  
  }
  
}
