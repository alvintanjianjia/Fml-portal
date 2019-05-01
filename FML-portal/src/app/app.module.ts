import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {Users, userDetails} from './_models/index';

import {UsersService, AuthenticationService, UploadFileService, userDetailsService} from './_services/index';
import {AuthGuard, RoleGuard} from './_guards/index';
import {RegisterUserComponent} from './register-user/register-user.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

import {routing} from './app.routing';
import {FormUploadComponent} from './form-upload/form-upload.component';
import {DetailsUploadComponent} from './details-upload/details-upload.component';

import {UserComponent} from './user/user.component';
import {TopItemsComponent} from './top-items/top-items.component';
import {RegisterClientComponent} from './register-client/register-client.component';
import {MyScheduleComponent} from './my-schedule/my-schedule.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'angular-calendar';
import 'flatpickr/dist/flatpickr.css';

import {CommonModule} from '@angular/common';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {FlatpickrModule} from 'angularx-flatpickr';
import {UserMedicationComponent} from './user-medication/user-medication.component';

import {ModalComponent} from './_directives';
import {ModalService} from './_services';

import {MatTableModule} from '@angular/material'


import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserInterestsComponent } from './user-interests/user-interests.component';
import { AddUserInterestDialogComponent } from './add-user-interest-dialog/add-user-interest-dialog.component';
import { ClientSolutionsComponent } from './client-solutions/client-solutions.component';
import { PortalOutlineComponent } from './portal-outline/portal-outline.component';
import { GenerateApiClientComponent } from './generate-api-client/generate-api-client.component';
import { GenerateApiUserComponent } from './generate-api-user/generate-api-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SuccessComponent } from './success/success.component';
import { UserSolutionsComponent } from './user-solutions/user-solutions.component';
import { ErrorComponent } from './error/error.component';
import { ResearchComponent } from './research/research.component';
import { GateBookingComponent } from './gate-booking/gate-booking.component';
import { BankdashboardComponent } from './bankdashboard/bankdashboard.component';
import { TransactionComponent } from './transaction/transaction.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    HomeComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    UserComponent,
    TopItemsComponent,
    RegisterClientComponent,
    MyScheduleComponent,
    UserMedicationComponent,
    ModalComponent,
    UserInterestsComponent,
    AddUserInterestDialogComponent,
    ClientSolutionsComponent,
    PortalOutlineComponent,
    GenerateApiClientComponent,
    GenerateApiUserComponent,
    UserDetailsComponent,
    SuccessComponent,
    UserSolutionsComponent,
    ErrorComponent,
    ResearchComponent,
    GateBookingComponent,
    BankdashboardComponent,
    TransactionComponent,
    
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    CommonModule,
    FlatpickrModule.forRoot(),
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot()
  

  ],
  
  exports: [
    MatTableModule],
  
  schemas: [ NO_ERRORS_SCHEMA],

  providers: [
    UsersService,
    userDetailsService,
    userDetails,
    Users,
    AuthenticationService,
    AuthGuard,
    RoleGuard,
    UploadFileService,
    ModalService,

  ],
  bootstrap: [AppComponent],
  entryComponents: [AddUserInterestDialogComponent, SuccessComponent, ErrorComponent]
})
export class AppModule {}
