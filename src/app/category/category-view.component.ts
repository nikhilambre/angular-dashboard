import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService, Category } from './category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  providers:[
    CategoryService
  ]
})
export class CategoryViewComponent implements OnInit {

  category: Category[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Category",
    subHeader : "Category view",
    activePage : "Category",
  }];

  constructor(
    private categoryservice: CategoryService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.process = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.categoryservice.getOne(id)
        .subscribe(
          response => {
            this.process = false;
            this.category = response.data;
          });
    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
