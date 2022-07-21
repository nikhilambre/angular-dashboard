import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { ProfilePasswordComponent } from './profile-password.component';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule
  ],
  exports:[],
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    ProfilePasswordComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class ProfileModule { }
