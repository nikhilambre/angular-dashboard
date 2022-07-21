import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HelpService, Help } from './help.service';

@Component({
  selector: 'app-help-create',
  templateUrl: './help-create.component.html',
  providers: [
    HelpService,
    ToastrService
  ]
})
export class HelpCreateComponent implements OnInit {
  
  help: Help[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Help",
    subHeader : "Create Help Question",
    activePage : "Help",
  }];

  constructor(
    private helpservice: HelpService, 
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    this.helpservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Help Question', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
