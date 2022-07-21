import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { HelpService, Help } from './help.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-help-edit',
  templateUrl: './help-edit.component.html',
  providers: [
    ToastrService,
    HelpService
  ]
})
export class HelpEditComponent implements OnInit {

  help: Help[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Help",
    subHeader : "Help Question Edit",
    activePage : "Help",
  }];

  constructor(
    private helpservice: HelpService,
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
  
        this.helpservice.getOne(id)
          .subscribe(
            response => {
              this.help = response.data;
            });
      });
    }

    onUpdate(form: HTMLInputElement) {
      this.process = true;
      this.helpservice.update(form)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showSuccess('Help', 'Updated');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
    }

    onDelete(filter) {
      var result = confirm("Sure you Want to Delete?");
      if (result) {
        
        this.process = true;
        this.helpservice.delete(filter.id)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showInfo('Help Question', 'Deleted');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
      }
  
    }
}
