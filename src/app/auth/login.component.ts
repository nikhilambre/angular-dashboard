import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { BadInput } from '../shared/errorlibrary/bad-input';
import { AppError } from '../shared/errorlibrary/app-error';

import { Admin } from '../admin/admin.service';
import { AuthService } from './auth.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  admin: Admin[];
  process: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

  onLogin(form: HTMLInputElement) {
    this.process = true;
    this.authService.login(form)
      .subscribe(
        response => {
          this.process = false;
          this.router.navigate(['home']);
          this.toastr.success('You Have Logged In Successfully!', 'WelCome!');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastr.error( error.originalError.message, 'Oops! We have an Error..!', {toastLife: 5000});
        });
  }


}
