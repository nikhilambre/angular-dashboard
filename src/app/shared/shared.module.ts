import { ProcessingComponent } from './processing.component';
import { TextEditorComponent } from './text-editor.component';
import { TopHeaderComponent } from './top-header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { TopNavComponent } from './top-nav.component';
import { SideNavComponent } from './side-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideNavComponent,
    TopNavComponent,
    FooterComponent,
    TopHeaderComponent,
    TextEditorComponent,
    ProcessingComponent,
  ],
  declarations: [
    SideNavComponent,
    TopNavComponent,
    FooterComponent,
    TopHeaderComponent,
    TextEditorComponent,
    ProcessingComponent,
  ]
})
export class SharedModule { }
