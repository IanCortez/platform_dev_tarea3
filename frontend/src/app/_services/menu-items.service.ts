import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor(
    private http: HttpClient
  ) { }

  getMenuItems(){
    return this.http.get<any>('http://localhost:3000/menu');
  }
}
