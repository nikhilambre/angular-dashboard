import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { SeoService, Seo } from './seo.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-seo-edit',
  templateUrl: './seo-edit.component.html',
  providers: [
    SeoService,
    ToastrService
  ]
})
export class SeoEditComponent implements OnInit {

  activeCard = '';
  seo: Seo[];
  pages: any;
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "SEO",
    subHeader : "Update Seo",
    activePage : "Site Management",
  }];

  constructor(
    private seoservice: SeoService, 
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute, 
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private elem: ElementRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.seoservice.getOne(id)
        .subscribe(
          response => {
            this.seo = response.data;
          });
    });
  }

  onChange(value) {
    this.activeCard = value;
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    let files = this.elem.nativeElement.querySelector('#seoImage').files;

    if (files.length > 0) {
      let formData:FormData = new FormData();
      formData.append('seoImage', files[0], files[0].name);

      for (var property in form) {
          if (form.hasOwnProperty(property)) {
              formData.append(property, form[property]);
          }
      }

      this.seoservice.updateWithImage(formData, form.id)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showSuccess('Seo', 'Updated');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
    } else {
    this.seoservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Seo', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }
  }

}
