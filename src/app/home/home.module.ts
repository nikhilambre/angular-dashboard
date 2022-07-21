import { HomeThreeComponent } from './home-three.component';
import { HomeTwoComponent } from './home-two.component';
import { HomeOneComponent } from './home-one.component';
import { AppErrorHandler } from './../shared/errorlibrary/app-error-handler';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  declarations: [
    HomeComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent
  ]
})
export class HomeModule { }
