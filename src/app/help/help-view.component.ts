import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ActivatedRoute, Params } from '@angular/router';
import { HelpService, Help } from './help.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-help-view',
  templateUrl: './help-view.component.html',
  providers: [
    HelpService
  ]
})
export class HelpViewComponent implements OnInit {

  help: Help[];
  pageHeaders: any[] = [{
    header : "Help",
    subHeader : "Help Question Answer",
    activePage : "Help",
  }];

  constructor(
    private helpservice: HelpService, 
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.helpservice.getOne(id)
        .subscribe(
          response => {
            this.help = response.data;
          });
    });
  }

}
