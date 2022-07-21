import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { HelpService, Help } from './help.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  providers: [
    ToastrService,
    HelpService
  ]
})
export class HelpComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  help: Help[];

  pageHeaders: any[] = [{
    header : "Help",
    subHeader : "Help Question Answer List",
    activePage : "Help",
  }];

  constructor(
    private helpservice: HelpService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.helpservice.getAll()
      .subscribe(
        response => {
          this.help = response.data;
          this.dtTrigger.next();
        });
  }
}
