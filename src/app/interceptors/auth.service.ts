import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient){

  }

  register(username: string, password: string, firstName: string, lastName:string) {
        return this.http.post<any>(this.url+'/api/v1/user_rigistration', { email: username, password: password, firstname: firstName, lastname: lastName})
            .map(user => {                
                if (user && user['data']) {
                    localStorage.setItem('currentUser', JSON.stringify(user['data']));
                }
                return user;
            });
    }

  login(username: string, password: string) {
        return this.http.post<any>(this.url+'/auth/sign_in', { email: username, password: password})
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user['data']) {
                    localStorage.setItem('currentUser', JSON.stringify(user['data']));
                }
                return user;
            });
    }

    logout(id:number){
        return this.http.put(this.url+'/api/v1/logout', { id: id});
    }

  
}