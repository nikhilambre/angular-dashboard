import { AuthService } from '../auth/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  providers: [AuthService]
})
export class TopNavComponent implements OnInit {

  @Input() pageHeaders: any[];
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  showSideBar() {
    this.open.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
