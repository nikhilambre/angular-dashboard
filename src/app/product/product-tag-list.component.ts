import { ToastrService } from './../services/toastr.service';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductTagService, ProductTag } from './product-tag.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-product-tag-list',
  templateUrl: './product-tag-list.component.html',
  providers: [
    ProductTagService,
    ToastrService
  ]
})
export class ProductTagListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  producttag: ProductTag[];

  constructor(
    private producttagservice: ProductTagService, 
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.producttagservice.getAll()
    .subscribe(
      response => {
        this.producttag = response.data;
        this.dtTrigger.next();
      });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onDelete(producttag) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.producttagservice.delete(producttag.id)
      .subscribe(
        response => {
          let index = this.producttag.indexOf(producttag);
          this.producttag.splice(index, 1);
          this.toastrservice.showInfo('Tag', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
      }
  }

}
