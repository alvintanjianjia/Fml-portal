import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {UserComponent} from './user/user.component';
import {TopItemsComponent} from './top-items/top-items.component';
import {MyScheduleComponent} from './my-schedule/my-schedule.component';
import {RegisterClientComponent} from './register-client/register-client.component';
import {UserInterestsComponent} from './user-interests/user-interests.component';
import {ClientSolutionsComponent} from './client-solutions/client-solutions.component';
import {PortalOutlineComponent} from './portal-outline/portal-outline.component';
import {GenerateApiClientComponent} from './generate-api-client/generate-api-client.component';
import {GenerateApiUserComponent} from './generate-api-user/generate-api-user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserSolutionsComponent} from './user-solutions/user-solutions.component';
import {FormUploadComponent} from './form-upload/form-upload.component';
import {ResearchComponent} from './research/research.component';
import {GateBookingComponent} from './gate-booking/gate-booking.component';
import { BankdashboardComponent } from './bankdashboard/bankdashboard.component';
import { TransactionComponent } from './transaction/transaction.component';

import {AuthGuard} from './_guards/index';
import {RoleGuard} from './_guards/index';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent,
      },

      {
        path: 'contact-us',
        component: ContactUsComponent,
      },

      {
        path: 'my-schedule',
        component: MyScheduleComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },

      {
        path: 'user-interests',
        component: UserInterestsComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      {
        path: 'client-solutions',
        component: ClientSolutionsComponent,
        canActivate: [RoleGuard],
        data: {userType: 'client'}
      },
      
      {
        path: 'generate-api-client',
        component: GenerateApiClientComponent,
        canActivate: [RoleGuard],
        data: {userType: 'client'}
      },
      
      {
        path: 'generate-api-user',
        component: GenerateApiUserComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      {
        path: 'user-details',
        component: UserDetailsComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      {
        path: 'user-solutions',
        component: UserSolutionsComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      {
        path: 'form-upload',
        component: FormUploadComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      {
        path: 'research',
        component: ResearchComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      {
        path: 'gate-booking',
        component: GateBookingComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      {
        path: 'transaction',
        component: TransactionComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      
      {
        path: 'bankdashboard',
        component: BankdashboardComponent,
        canActivate: [RoleGuard],
        data: {userType: 'customer'}
      },
      
      
      
      
      

      {path: 'user', component: UserComponent},
      {path: 'top-items', component: TopItemsComponent},
      {path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard]}

    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'register-client', component: RegisterClientComponent},
 


  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);