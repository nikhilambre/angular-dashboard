import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { Category, CategoryService } from './category.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [
    ToastrService,
    CategoryService
  ]
})
export class CategoryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  category: Category[];

  pageHeaders: any[] = [{
    header: "Category",
    subHeader: "Category List",
    activePage: "Category",
  }];

  constructor(
    private categoryservice: CategoryService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.categoryservice.getAll()
      .subscribe(
        response => {
          this.category = response.data;
          this.dtTrigger.next();
        });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onDelete(category) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

      this.categoryservice.delete(category.id)
        .subscribe(
          response => {
            let index = this.category.indexOf(category);
            this.category.splice(index, 1);
            this.toastrservice.showInfo('Category', 'Deleted');
          },
          (error: AppError) => {
            this.toastrservice.showError(error.originalError.statusText);
          });
    }
  }

}
