import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { IframeService, Iframe } from './iframe.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  providers: [
    IframeService,
    ToastrService
  ]
})
export class IframeComponent implements OnInit {

  iframe: Iframe[];

  constructor(private iframeservice: IframeService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.iframeservice.getAll()
      .subscribe(
        response => {
          this.iframe = response.data;
        });
  }

  onUpdate(form: HTMLInputElement) {
    
    this.iframeservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('iFrame', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
