import { AdminGuard } from './auth/admin-guard.service';
import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [ AuthGuard ] },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [ AuthGuard, AdminGuard ] },
  { path: 'pageupdator', loadChildren: 'app/pageupdator/pageupdator.module#PageupdatorModule', canActivate: [ AuthGuard, AdminGuard ] },
  { path: 'filter', loadChildren: 'app/filter/filter.module#FilterModule', canActivate: [ AuthGuard ] },
  { path: 'product', loadChildren: 'app/product/product.module#ProductModule', canActivate: [ AuthGuard ] },
  { path: 'category', loadChildren: 'app/category/category.module#CategoryModule', canActivate: [ AuthGuard ] },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule', canActivate: [ AuthGuard ] },
  { path: 'visitor-input', loadChildren: 'app/visitor-input/visitor-input.module#VisitorInputModule', canActivate: [ AuthGuard ] },
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule', canActivate: [ AuthGuard ] },
  { path: 'affiliate', loadChildren: 'app/affiliate/affiliate.module#AffiliateModule', canActivate: [ AuthGuard ] },
  { path: 'template', loadChildren: 'app/template/template.module#TemplateModule', canActivate: [ AuthGuard ] },
  { path: 'support', loadChildren: 'app/support/support.module#SupportModule', canActivate: [ AuthGuard ] },
  { path: 'order', loadChildren: 'app/order/order.module#OrderModule', canActivate: [ AuthGuard ] },
  { path: 'coupon', loadChildren: 'app/coupon/coupon.module#CouponModule', canActivate: [ AuthGuard ] },
  { path: 'visitor', loadChildren: 'app/visitor/visitor.module#VisitorModule', canActivate: [ AuthGuard ] },
  { path: 'media', loadChildren: 'app/media/media.module#MediaModule', canActivate: [ AuthGuard ] },
  { path: 'seo', loadChildren: 'app/seo/seo.module#SeoModule', canActivate: [ AuthGuard ] },
  { path: 'comment', loadChildren: 'app/comment/comment.module#CommentModule', canActivate: [ AuthGuard ] },
  { path: 'like', loadChildren: 'app/like/like.module#LikeModule', canActivate: [ AuthGuard ] },
  { path: 'post', loadChildren: 'app/post/post.module#PostModule', canActivate: [ AuthGuard ] },
  { path: 'help', loadChildren: 'app/help/help.module#HelpModule', canActivate: [ AuthGuard ] },
  { path: 'blog-category', loadChildren: 'app/blog-category/category.module#CategoryModule', canActivate: [ AuthGuard ] },
  //{path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/auth/login'}  //{path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}