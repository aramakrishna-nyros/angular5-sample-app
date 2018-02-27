import { Injectable } from '@angular/core';
import { User } from './_models/index';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  
  url = 'http://localhost:3000/api/v1'

  constructor(private http: HttpClient) { }

  signin(user: User) {
  	console.log(this.url)
        return this.http.post(this.url+'/signin', user);
    }

}
