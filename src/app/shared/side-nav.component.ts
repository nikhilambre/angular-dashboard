import { AuthService } from './../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  providers: [AuthService]
})
export class SideNavComponent implements OnInit {

  menuList: any;
  selected: any;
  
  @Input() pageHeaders: any[];
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.menuList = [
    {
      "name": "Dashboard",
      "nameLink": "/home",
      "nameStyle": "auto",
      "nameIco": "braille"
    },
    {
      "name": "Products",
      "nameLink": "/product",
      "nameStyle": "none",
      "nameIco": "tasks",
      "sub": [
        { "subLink": "/product","subName": "Products" },
        { "subLink": "/product/price","subName": "Prices" },
        { "subLink": "/product/option","subName": "Options" },
        { "subLink": "/product/optiontype","subName": "Options Types" },
        { "subLink": "/product/optionmap","subName": "Map Options" },
        { "subLink": "/coupon","subName": "Discount Coupons" },
      ]
    },
    {
      "name": "Product Filters",
      "nameLink": "/filter",
      "nameStyle": "none",
      "nameIco": "cog",
      "sub": [
        { "subLink": "/filter","subName": "Filters" },
        { "subLink": "/category","subName": "Category" }
      ]
    },
    {
      "name": "Orders",
      "nameLink": "/order",
      "nameStyle": "auto",
      "nameIco": "diamond",
    },
    {
      "name": "Visitors Connect",
      "nameLink": "/messages",
      "nameStyle": "none",
      "nameIco": "coffee",
      "sub": [
        { "subLink": "/visitor-input/messages","subName": "Messages" },
        { "subLink": "/comment","subName": "Blog Comments" },
        { "subLink": "/like","subName": "Blog Likes" },
      ]
    },
    {
      "name": "Blog",
      "nameLink": "/blog",
      "nameStyle": "none",
      "nameIco": "file-text",
      "sub": [
        { "subLink": "/post","subName": "Blog Posts" },
        { "subLink": "/blog-category","subName": "Blog Categories" },
        { "subLink": "/media","subName": "Blog Media" },
        { "subLink": "/comment","subName": "Blog Comments" },
      ]
    },
    {
      "name": "Site Management",
      "nameLink": "/home",
      "nameStyle": "none",
      "nameIco": "address-book",
      "sub": [
        { "subLink": "/visitor","subName": "Visitors" },
        { "subLink": "/contact/address","subName": "Postal Addresses" },
        { "subLink": "/contact/social","subName": "Social Addresses" },
        { "subLink": "/seo","subName": "SEO" },
        { "subLink": "/pageupdator","subName": "Page Editor" },
        { "subLink": "/support","subName": "Support Questions" },
        { "subLink": "/affiliate","subName": "Affiliates" },
        { "subLink": "/template","subName": "Templates" },
      ]
    },
    {
      "name": "My Profile",
      "nameLink": "/profile",
      "nameStyle": "auto",
      "nameIco": "user",
    },
    {
      "name": "Create Users",
      "nameLink": "/admin",
      "nameStyle": "auto",
      "nameIco": "user-plus",
    },
    {
      "name": "Help",
      "nameLink": "/help",
      "nameStyle": "auto",
      "nameIco": "question",
    }]
  }

  select(item){
    this.selected = (this.selected === item ? null : item);
  }
  
  isActive(item){
    return this.selected === item;
  }

  onLogout() {
    this.authService.logout();
  }

}
