import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userInfo = {
    email: '',
    password: ''
  }
  @Output() eventEmitter = new EventEmitter();
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  register() {
    this.accountService.register(this.userInfo);
    this.eventEmitter.emit(false);
  }
}
