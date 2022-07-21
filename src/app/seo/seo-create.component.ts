import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { SeoService, Seo } from './seo.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-seo-create',
  templateUrl: './seo-create.component.html',
  providers: [
    SeoService,
    ToastrService
  ]
})
export class SeoCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  activeCard = '';
  seo: Seo[];
  pages: any;
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "SEO",
    subHeader : "Seo Create",
    activePage : "Site Management",
  }];

  constructor(
    private seoservice: SeoService, 
    private toastrservice: ToastrService,
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

    this.pages = [{
        'id': 'home',
        'pageName': 'Home/Index Page'
      },{
        'id': 'about',
        'pageName': 'About Us Page'
      },{
        'id': 'featr',
        'pageName': 'Feature Page'
      },{
        'id': 'conta',
        'pageName': 'Contact Page'
    }]
  }

  onChange(value) {
    this.activeCard = value;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    let formData:FormData = new FormData();
    let files = this.elem.nativeElement.querySelector('#seoImage').files;

    if (files.length > 0) {
      formData.append('seoImage', files[0], files[0].name);
    }

    for (var property in form) {
        if (form.hasOwnProperty(property)) {
            formData.append(property, form[property]);
        }
    }
    
    this.seoservice.createWithImage(formData)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Seo', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
