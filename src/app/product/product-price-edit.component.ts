import { ProductTaxService, Producttax } from './product-tax.service';
import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProductPriceService, Productprice } from './product-price.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-price-edit',
  templateUrl: './product-price-edit.component.html',
  providers: [
    ProductPriceService,
    ProductTaxService,
    ToastrService
  ]
})
export class ProductPriceEditComponent implements OnInit {

  currencyList: any;
  currencyProduct: any;
  productprice: Productprice[];
  priceAdded: boolean = true;
  price: number = 0;
  finalPriceCal: number = 0;
  discounts: number = 0;
  taxes: number = 0;
  producttax: Producttax[];

  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Price Edit",
    activePage : "Products",
  }];

  constructor(
    private productpriceservice: ProductPriceService,
    private producttaxservice: ProductTaxService,
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

    this.currencyList = [
      {
        "value" : "usd",
        "status" : "",
        "text" : "DOLLOR (USD)"
      },
      {
        "value" : "inr",
        "status" : "",
        "text" : "Indian Rupees (INR)"
      },
      {
        "value" : "gbp",
        "status" : "",
        "text" : "POUND (GBP)"
      },
      {
        "value" : "eur",
        "status" : "",
        "text" : "EURO (EUR)"
      },
      // {
      //   "value" : "ils",
      //   "status" : "",
      //   "text" : "Israeli Sheke (ILS)"
      // },
      // {
      //   "value" : "btc",
      //   "status" : "",
      //   "text" : "BITCOIN"
      // },
      // {
      //   "value" : "jpy",
      //   "status" : "",
      //   "text" : "Japanese Yen (JPY)"
      // },
      // {
      //   "value" : "krw",
      //   "status" : "",
      //   "text" : "Korean Won (KRW)"
      // },
      // {
      //   "value" : "rub",
      //   "status" : "",
      //   "text" : "Russian Ruble (RUB)"
      // },
      // {
      //   "value" : "try",
      //   "status" : "",
      //   "text" : "Turkish Lira (TRY)"
      // },
    ]

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.productpriceservice.getOne(id)
        .subscribe(
          response => {
            this.productprice = response.data;
            this.price = response.data[0].price;
            this.finalPriceCal = this.productprice[0].finalPrice;
            this.discounts = this.productprice[0].discount;
            //this.taxes = this.productprice[0].tax;

            this.productpriceservice.getForId(this.productprice[0].productId)
            .subscribe(
              response => {
                this.currencyProduct = response.data;
        
                let i = 0;
                while (i < this.currencyList.length) {
                  for (let toMatch of this.currencyProduct) {
                    if (toMatch.currency == this.currencyList[i].value) {
                      if (this.productprice[0].currency != toMatch.currency) {
                        this.currencyList[i].status = true;    
                      }
                      break;
                    } else {
                      this.currencyList[i].status = "";
                    }
                  }
        
                  if (this.currencyProduct.length == 0) {
                    this.currencyList[i].status = "";
                  }
                  i++;
                }
          });
        });
    });

    this.producttaxservice.getAll()
    .subscribe(
      response => {
        this.producttax = response.data;
      });

  }

  onPriceChange(price: number) {
    this.price = price;
    this.finalPriceCal = this.price - (this.price * (this.discounts / 100));
    //this.finalPriceCal = this.finalPriceCal + (this.finalPriceCal * (this.taxes / 100));

    if(price > 0){
      this.priceAdded = false;
    } else {
      this.priceAdded = true;
    }
  }

  onDiscountChange(discount: number) {
    this.discounts = discount;
    this.finalPriceCal = this.price - (this.price * (this.discounts / 100));
    //this.finalPriceCal = this.finalPriceCal + (this.finalPriceCal * (this.taxes / 100));
  }

  onTaxChange(tax: number) {
    this.taxes = tax;
    this.finalPriceCal += this.finalPriceCal * (this.taxes / 100);
  }

  onUpdate(form: HTMLInputElement) {
    this.productpriceservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Price', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
