import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../_models/users';
import { AuthenticationService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: Users = new Users()

    constructor(private authenticationService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
    }

    newUser(): void {
        this.user = new Users();
    }

    login() {
        console.log(this.user);
       
        (this.authenticationService.login(this.user));
           
        
    }

    private handleError(error: any): Promise<any> {
        //localStorage.setItem('Error', 'true');
        alert("Incorrect Username or Password.");
        console.error('Error occured at users.', error);
        return Promise.reject(error);
    }


    redirectNewUser() {
        this.router.navigate(['/register-user']);

    }

    redirectNewClient() {

        this.router.navigate(['/register-client']);
    }


}


