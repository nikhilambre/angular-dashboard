import { BadInput } from './../shared/errorlibrary/bad-input';
import { ToastrService } from './../services/toastr.service';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductImageService } from './product-image.service';
import { FilterService, Filter } from './../filter/filter.service';
import { CategoryService, Category } from './../category/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ProductService } from './product.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  providers: [
    FilterService,
    CategoryService,
    ToastrService,
    ProductImageService,
    ProductService
  ]
})
export class ProductEditComponent implements OnInit {

  product: Product[];
  category: Category[];
  filter: Filter[];
  image: any[];
  catmap: any[];
  filterKey: any[] = [];
  imageCount: number = 0;
  tinymcyContent: any = '';
  contentFromDB: any = '';
  url: string = '';
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Product Edit",
    activePage : "Products",
  }];
  
  constructor(
    private productservice: ProductService, 
    private productimageservice: ProductImageService,
    private categoryservice: CategoryService,
    private filterservice: FilterService,
    private elem: ElementRef,
    private activatedRoute: ActivatedRoute,
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
    this.url = this.productservice.getBaseUrl();

    this.filterservice.getAll()
    .subscribe(
      response => { this.filter = response.data;
      });

    this.categoryservice.getAll()
    .subscribe(
      response => {
        this.category = response.data;
      });

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.productservice.getOne(id)
        .subscribe(
          response => {
            this.product = response.product;
            this.tinymcyContent = response.product[0].description;
            this.contentFromDB = response.product[0].description;

            this.image = response.images;
            this.catmap = response.catmaps;

            this.imageCount = 5 - this.image.length;

            //  To set filters current data
            for (let map of this.catmap) {
              this.filterKey[map.filterId] = map.categoryId;
            }
          });
    });
  }

  public tinymcyFunction(postContent: any):void {
    this.tinymcyContent = postContent;
  }

  onImageDelete(image) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.process = true;
    this.productimageservice.delete(image.imageId)
      .subscribe(
        response => {
          this.process = false;
          let index = this.image.indexOf(image);
          this.image.splice(index, 1);
          this.imageCount++;
          this.toastrservice.showSuccess('Image', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
      }
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    let formData:FormData = new FormData();
    let files = this.elem.nativeElement.querySelector('#productImage').files;

    //  For Max limit control with existing images
    if (files.length <= this.imageCount) {

      //  Uploaded images 0 && images to be uploaded is also 5 then total is 0.
      if (files.length == 0 && this.imageCount == 5) {
        this.toastrservice.showWarning('A Product Must have a image.');
        return false;
      } 
      else {
        for (let i = 0; i < files.length; i++) {
          formData.append(`productImage[]`, files[i], files[i].name);

          if (files[i].size > 900000) {
            this.toastrservice.showWarning('Product Image Size must be less than 900KB.');
            return false;
          }
        }
      }

    } else{ 
      this.toastrservice.showWarning('A Product can have MAX 5 images.');
      return false;
    }

    for (var property in form) {
      if (form.hasOwnProperty(property)) {
          formData.append(property, form[property]);
      }
    }

    this.productservice.updateWithImage(formData, form.id)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Product', 'Updated');
        },
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
