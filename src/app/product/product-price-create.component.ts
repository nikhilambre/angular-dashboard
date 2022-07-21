import { ProductTaxService, Producttax } from './product-tax.service';
import { ToastrService } from './../services/toastr.service';
import { ProductService, Product } from './product.service';
import { ProductPriceService, Productprice } from './product-price.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-product-price-create',
  templateUrl: './product-price-create.component.html',
  providers: [
    ProductPriceService,
    ProductService,
    ToastrService,
    ProductTaxService
  ]
})
export class ProductPriceCreateComponent implements OnInit {

  product: Product[];
  currencyList: any;
  currencyProduct: any;
  priceAdded: boolean = true;
  productAdded: boolean = true;
  currencyValue: string;
  price: number = 0;
  finalPriceCal: number = 0;
  discount: number = 0;
  tax: number = 0;
  producttax: Producttax[];

  pageHeaders: any[] = [{
    header : "Product",
    subHeader : "Price Create",
    activePage : "Products",
  }];

  constructor(
    private productpriceservice: ProductPriceService, 
    private productservice: ProductService,
    private producttaxservice: ProductTaxService,
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

    this.producttaxservice.getAll()
    .subscribe(
      response => {
        this.producttax = response.data;
      });

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
  }

  onProductChange(product) {
    this.currencyValue = "";

    this.productpriceservice.getForId(product)
    .subscribe(
      response => {
        this.currencyProduct = response.data;
        this.productAdded = false;

        let i = 0;
        while (i < this.currencyList.length) {
          for (let toMatch of this.currencyProduct) {

              //  Check if two values match then set status of option to disabled
              if (toMatch.currency == this.currencyList[i].value) {
                this.currencyList[i].status = true;
                break;
              } else {
                this.currencyList[i].status = "";
              }
          }

          //  Check if current product had no currency attached then all currency are available
          if (this.currencyProduct.length == 0) {
            this.currencyList[i].status = "";
          }
          i++;
        }

      });
  }

  onPriceChange(price: number) {
    this.price = price;
    this.finalPriceCal = this.price - (this.price * (this.discount / 100));
    //this.finalPriceCal = this.finalPriceCal + (this.finalPriceCal * (this.tax / 100));

    if(price > 0){
      this.priceAdded = false;
    } else {
      this.priceAdded = true;
    }
  }

  onDiscountChange(discount: number) {
    this.discount = discount;
    this.finalPriceCal = this.price - (this.price * (this.discount / 100));
    //this.finalPriceCal = this.finalPriceCal + (this.finalPriceCal * (this.tax / 100));
  }

  onTaxChange(tax: number) {
    this.tax = tax;
    this.finalPriceCal += this.finalPriceCal * (this.tax / 100);
  }

  onCreate(form: HTMLInputElement) {
    this.productpriceservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Product Price', 'Created');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });

  }

}
