import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Users} from '../_models/index';
import {UsersService} from '../_services/index';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ErrorComponent} from '../error/error.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

    errorMsg: boolean = false;
    user: Users = new Users()
    constructor(private userService: UsersService,
        private router: Router,
        public dialog: MatDialog,
        private http: HttpClient) { }

    ngOnInit() {
    }

    newUser(): void {
        this.user = new Users();
    }

  
    
    
    register() {
        this.user.userType = "customer"
        this.user.apiKey = this.createAPI();
        this.user.account_number = this.createAPI();
        this.user.balance = '1000';
        (this.userService.createUser(this.user)).subscribe(response => {
            if (response.success == 0) {
                throw Observable.throw(response);
            } else {
                this.router.navigate(['/login']);
            }
            //this.router.navigate(['/login']);
        });
    }
    
on
    createAPI() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-<>";

        for (var i = 0; i < 25; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    handleError(error: any): Promise<any> {
        //localStorage.setItem('Error', 'true');
        alert("The same username already exists! Please choose another username.");
        console.error('Error occured at users.', error);
        return Promise.reject(error);
    }

    openDialog(str) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        console.log(str);
        dialogConfig.data = {
            title: str
        };


        const dialogRef = this.dialog.open(ErrorComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            data => console.log("Dialog output:", data)
        );
    }

    redirectLogin() {
        this.router.navigate(['/login']);
    }






}
