import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { VisitorService, Visitor } from './visitor.service';
import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  providers: [
    ToastrService,
    VisitorService
  ]
})
export class VisitorComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  visitor: Visitor[];

  pageHeaders: any[] = [{
    header : "Visitor",
    subHeader : "Visitor List",
    activePage : "Site Management",
  }];

  constructor(
    private visitorservice: VisitorService,
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
    this.visitorservice.getAll()
    .subscribe(
      response => {
        this.visitor = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(form) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.visitorservice.delete(form.id)
      .subscribe(
        response => {
          let index = this.visitor.indexOf(form);
          this.visitor.splice(index, 1);
          this.toastrservice.showInfo('Visitor', 'Deleted');
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError)
            this.toastrservice.showError(error.originalError.statusText);
          else throw error;
        });
    }
  }

}
