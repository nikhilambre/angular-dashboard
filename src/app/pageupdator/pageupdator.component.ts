import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { PageupdatorService, Pageupdator } from './pageupdator.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-pageupdator',
  templateUrl: './pageupdator.component.html',
  providers: [
    PageupdatorService,
    ToastrService,
  ]
})
export class PageupdatorComponent implements OnInit {

  pageupdator: Pageupdator[];
  process: boolean = false;
  pageHeaders: any[] = [{
    header : "Page Editor",
    subHeader : "Page Editor",
    activePage : "Page Editor",
  }];

  constructor(
    private pageupdatorservice: PageupdatorService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.pageupdatorservice.getAll()
    .subscribe(
      response => {
        this.pageupdator = response.data;
      });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;

    this.pageupdatorservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Page Editor', 'Created');
          this.ngOnInit();
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

  onDelete(pageupdator) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {
      
      this.process = true;
      this.pageupdatorservice.delete(pageupdator.id)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showInfo('Page Editor', 'Deleted');
          this.ngOnInit();
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }

  }

}
