import { MediaAddComponent } from './media-add.component';
import { MediaComponent } from './media.component';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './../shared/shared.module';
import { MediaRoutingModule } from './media-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    ClipboardModule,
  ],
  exports:[],
  declarations: [
    MediaComponent,
    MediaAddComponent,
  ]
})
export class MediaModule { }
