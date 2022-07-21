import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Params, ActivatedRoute } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { ParentcatService, Parentcat } from './parentcat.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-parentcat-edit',
  templateUrl: './parentcat-edit.component.html',
  providers: [
    ToastrService,
    ParentcatService
  ]
})
export class ParentcatEditComponent implements OnInit {

  parentcat: Parentcat[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Parent Category",
    subHeader : "Parent Category Edit",
    activePage : "Category",
  }];

  constructor(
    private parentcatservice: ParentcatService,
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.parentcatservice.getOne(id)
        .subscribe(
          response => {
            this.parentcat = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.parentcatservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Parent Category', 'Updated');
        },
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
