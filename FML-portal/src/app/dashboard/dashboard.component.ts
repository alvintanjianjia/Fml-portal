import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {ContactUsComponent} from '../contact-us/contact-us.component';
import {AboutUsComponent} from '../about-us/about-us.component';
import {UserComponent} from '../user/user.component';
import {BankdashboardComponent} from '../bankdashboard/bankdashboard.component';
import {TransactionComponent} from '../transaction/transaction.component';
import {TopItemsComponent} from '../top-items/top-items.component';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../_services/';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    client: boolean = false;
    admin: boolean = false;
    customer: boolean = false;

    constructor(private router: Router,
        private route: ActivatedRoute,
        public AuthenticationService: AuthenticationService,


    ) { }

    ngOnInit() {


        if (localStorage.getItem("currentUserType") == "client") {
            this.client = true;
        }
        else if (localStorage.getItem("currentUserType") == "admin") {
            this.admin = true;
        }
        else if (localStorage.getItem("currentUserType") == "customer") {
            this.customer = true;
        }


    }

    ngDoCheck() {

    }


    redirectMySchedule() {
        this.router.navigateByUrl('/my-schedule');
    }

    redirectTopItems() {
        this.router.navigateByUrl('/top-items');
    }

    redirectHome() {
        this.router.navigateByUrl('/home');
    }

    redirectContactUs() {
        this.router.navigateByUrl('/contact-us')
    }

    redirectAboutUs() {
        this.router.navigateByUrl('/about-us');
    }
    
    redirectResearch() {
        this.router.navigateByUrl('/research');
    }
    
    redirectGateBooking() {
        this.router.navigateByUrl('/user-details');
    }

    redirectUser() {
        this.router.navigateByUrl('/user');
    }

    redirectMyItems() {
        this.router.navigateByUrl('/my-items');
    }

    redirectUserInterest() {
        this.router.navigateByUrl('/user-interests');
    }

    redirectUserSolutions() {
        this.router.navigateByUrl('/user-solutions');
    }
    
     redirectClientSolutions() {
        this.router.navigateByUrl('/client-solutions');
    }

    redirectGenerateUserAPIKey() {
        this.router.navigateByUrl('/generate-api-user');
    }

    redirectGenerateClientAPIKey() {
        this.router.navigateByUrl('/generate-api-client');
    }

    redirectUserDetails() {
        this.router.navigateByUrl('/user-details');
    }
    
    redirectMakeTransaction() {
        this.router.navigateByUrl('/transaction');
        }
    
    redirectPastTransaction() {
        this.router.navigateByUrl('/bankdashboard');
       }


    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserType');
        localStorage.removeItem('apiKey');
        this.router.navigate(['/login']);
    }

}
