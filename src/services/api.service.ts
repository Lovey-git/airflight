import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  _Url = "http://localhost:8080/";
  //_Url = "https://kohaku-b.herokuapp.com/";

  //Register
  register(email, password, lname, fname) {
    return this.http.post<any>(this._Url + 'register', { email, password, lname, fname });
  }

  //UPDATE USER
  update_user(fname, lname, email, cell, gender, province) {
    var uuid = localStorage.getItem('uuid');
    return this.http.post<any>(this._Url + 'update_user', { fname, lname, email, cell, gender, province, uuid });
  }

  //UPDATE PASSWORD
  update_password(password) {
    var uuid = localStorage.getItem('uuid');
    return this.http.post<any>(this._Url + 'update_password', { password, uuid });
  }

  //Reset PASSWORD
  reset_password(email) {
    var uuid = localStorage.getItem('uuid');
    return this.http.get<any>(this._Url + 'resetPassword/' + email, {});
  }

  //Remove user
  remove_user() {
    var uuid = localStorage.getItem('uuid');
    return this.http.post<any>(this._Url + 'delete_user', { uuid });
  }

   //add ticket
   add_ticket(from, to, depart, Return, adults, children, adult_price, child_price, meals) {
    var uuid = localStorage.getItem('uuid');
    return this.http.post<any>(this._Url + 'add_ticket', { uuid, from, to, depart, Return, adults, children, adult_price, child_price, meals });
  }

   //get all users
   get_all_users() {
    return this.http.post<any>(this._Url + 'get_all_users', { });
  }



}
