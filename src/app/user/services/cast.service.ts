import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private httpClient: HttpClient) { }

  getAllCastMembers() {
    return this.httpClient.get('http://localhost:7210/api/Cast/GetAllCastMembers');
  }
  getCastMemberById(id: number) {
    return this.httpClient.get('http://localhost:7210/api/Cast/GetCastMemberById/' + id);
  }
}
