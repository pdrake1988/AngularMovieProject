import { Component, OnInit } from '@angular/core';
import { CastService } from 'src/app/user/services/cast.service';

@Component({
  selector: 'app-create-cast',
  templateUrl: './create-cast.component.html',
  styleUrls: ['./create-cast.component.css']
})
export class CreateCastComponent implements OnInit {
  castInfo = {
    name: '',
    gender: '',
    imdbUrl: ''
  }
  constructor(private castService: CastService) { }

  ngOnInit(): void {
  }
  createCastMember() {
    this.castService.createCastMember(this.castInfo);
  }
}
