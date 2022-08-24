import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo = {
    email: '',
    password: ''
  }
  constructor(private accoutService: AccountService, private cookieService: CookieService) { }
  @Output() eventEmitter = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
  login() {
    this.accoutService.login(this.userInfo).subscribe(token => 
      this.cookieService.set('jwt_token', token.toString()));
      this.accoutService.isLoggedIn = true;
      this.eventEmitter.emit(false);
  }
}
