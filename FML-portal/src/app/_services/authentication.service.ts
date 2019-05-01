import {Injectable} from '@angular/core';
import {Users} from '../_models/users';
import {Headers, Http, Response} from '@angular/http';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {throwError} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    private baseUrl = environment.apiUrl + 'users';





    public currentUserType: any;

    authenticate(userData: Users): Observable<any> {
        let getHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<any>(this.baseUrl + '/authenticate', userData, { headers: getHeaders });
    }

    login(userData: Users) {
        let tmpUser: Users;
        let getHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        console.log("Authenticating");
        this.http.post<any>(this.baseUrl + '/authenticate', userData, { headers: getHeaders })
            .subscribe(response => {
                tmpUser = response;

                console.log(tmpUser.username);
                if (tmpUser.username == userData.username) {
                    localStorage.setItem('currentUser', response.username);
                    localStorage.setItem('currentUserType', response.userType);
                    localStorage.setItem('account_number', response.apiKey);

                    this.router.navigate(['']);
                    //window.location.

                    return true;
                }
            }, error => {alert("Incorrect Username or Password!");
            });

    }

    /*

          
    */


}

