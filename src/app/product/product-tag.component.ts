import { ToastrService } from './../services/toastr.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductTagmapService, ProductTagMap } from './product-tagmap.service';
import { ProductTagService, ProductTag } from './product-tag.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductService, Product } from './product.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-tag',
  templateUrl: './product-tag.component.html',
  providers: [
    ProductService,
    ProductTagService,
    ProductTagmapService,
    ToastrService
  ]
})
export class ProductTagComponent implements OnInit {

  product: Product[];
  producttag: ProductTag[] = [];
  producttagmap: ProductTagMap[];
  productIdVal: string = '';
  checkboxes: any[] = [];
  isChecked: any[] = [];

  pageHeaders: any[] = [{
    header : "Tags",
    subHeader : "Tags",
    activePage : "Products",
  }];

  constructor(
    private productservice: ProductService,
    private producttagservice: ProductTagService,
    private producttagmapservice: ProductTagmapService,
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
    this.productservice.getAll()
      .subscribe(
        response => { 
          this.product = response.data;
        });
  }

  onCheckBox(value, event) {
    if (event.target.checked) {
      this.checkboxes.push(value);
    } else {
      let index = this.checkboxes.indexOf(value);
      this.checkboxes.splice(index, 1);
    }
  }

  onCreate(form: HTMLInputElement) {
    let formData: FormData = new FormData();

    if (this.checkboxes.length > 0) {
      for (let i = 0; i < this.checkboxes.length; i++) {
          formData.append('tagId[]', this.checkboxes[i]);
      }
    }

    for (var property in form) {
      if (form.hasOwnProperty(property)) {
          formData.append(property, form[property]);
          this.productIdVal = form[property];
      }
    }

    this.producttagmapservice.updateWithImage(formData, this.productIdVal)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Tag', 'Updated');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

  onProductChange(product) {
    this.isChecked = [];
    this.checkboxes = [];

    this.producttagmapservice.getForId(product)
    .subscribe(
      response => {
        this.producttagmap = response.data;

        this.producttagservice.getAll()
          .subscribe(
            response => {
              this.producttag = response.data;

              let i = 0;
              while (i < this.producttag.length) {
                for (let toMatch of this.producttagmap) {
                  if (toMatch.tagId == this.producttag[i].id) {
                    this.checkboxes.push(this.producttag[i].id);
                    this.isChecked[this.producttag[i].id] = true;
                    break;
                  } else {
                    this.isChecked[this.producttag[i].id] = false;
                  }
 
                } i++;
              }
          });

      });


  }

}
