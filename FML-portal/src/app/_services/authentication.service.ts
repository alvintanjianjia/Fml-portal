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
    constructor(private http: HttpClient,        private router: Router,        private route: ActivatedRoute) { }




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

    /*     login(userData: Users): Promise<Users> {         console.log("Authenticating");         return this.http.post(this.baseUrl + '/authenticate', userData)             .toPromise().then(response => {
                                  console.log(response.json().username);                 if (response.status == 200) {                     localStorage.setItem('currentUser', JSON.stringify(response));                     localStorage.setItem('currentUserType', response.json().userType);                     localStorage.setItem('apiKey' ,response.json().apiKey);                      this.currentUserType = response.json().userType;                     this.router.navigate([''])                     //window.location.
                               return true;                 }                 else if (response.status == 400) {                     console.log('Authentication fail');                     return false;                 }             })             .catch(this.handleError);     }
    */


}


