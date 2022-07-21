import { SharedModule } from './../shared/shared.module';
import { AdminGuard } from './admin-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AppErrorHandler } from '../shared/errorlibrary/app-error-handler';
import { LoginComponent } from './login.component';
import { AuthRoutingModule } from "./auth-routing.module";

import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';

@NgModule({       // Add this module in imports of app.module
  imports: [      // List of required moodul for this module like HttpModule
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    HttpModule
  ],
  exports: [],
  providers: [    // service provider of this module
    AuthService,
    AuthGuard,
    AdminGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler }  //  It use only class AppErrorHandler of module ErrorHandler of core
  ],
  declarations: [ // list of all components, directives and pipes
    LoginComponent
  ]
})
export class AuthModule { }
