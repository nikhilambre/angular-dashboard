import { OrderService, Order } from './order.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { OrderCommentService, Ordercomment } from './order-comment.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-order-comment',
  templateUrl: './order-comment.component.html',
  providers: [
    ToastrService,
    OrderCommentService,
    OrderService
  ]
})
export class OrderCommentComponent implements OnInit {

  ordercomment: Ordercomment[];
  order: Order[];
  
  linkId: any[] = [{
    id : "",
    name : "comment",
  }];
  
  pageHeaders: any[] = [{
    header : "Order",
    subHeader : "Order Comments",
    activePage : "Orders",
  }];

  constructor(
    private ordercommentservice: OrderCommentService,
    private orderservice: OrderService,
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
      this.linkId[0].id = id;

      this.ordercommentservice.getOne(id)
        .subscribe(
          response => {
            this.ordercomment = response.data;
          });

      this.orderservice.getOne(id)
        .subscribe(
          response => {
            this.order = response.data;
          });

    });
  }

  onCreate(form: HTMLInputElement) {
    this.ordercommentservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Comment', 'Added');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
