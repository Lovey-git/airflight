import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  //_Url = "http://localhost:8080/";
  _Url = "https://kohaku-b.herokuapp.com/";

  validateCell(phone) {
    const re = /^[0]{1}[6-8]{1}[1-9]{1}/;
    if (re.test(String(phone).toLowerCase())) {
      return true;
    }else{
      return false;
    }
  }

  validateName(name) {
    var format =  /^[0-9!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]*$/;
    var re = /.*[0-9].*/;
    if( name.match(format) ||  name.match(re)){
      return true;
    }else{
      return false;
    }
  }

  validatePass(password) {
    let numberOfElements = 0;
    numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Lowercase letters
    numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Uppercase letters
    numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements;      // Numbers
    numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements;   // Special characters (inc. space)
    return numberOfElements;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //Register
  register(email, password, lname, fname) {
    return this.http.post<any>(this._Url + 'register', { email, password, fname, lname });
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
  remove_user(uuid) {
    return this.http.post<any>(this._Url + 'delete_user', { uuid });
  }

  //add ticket
  add_ticket(from, to, depart, Return, adults, children, adult_price, child_price, meals, Class, totalAmt) {
    var uuid = localStorage.getItem('uuid');
    return this.http.post<any>(this._Url + 'add_ticket', { uuid, from, to, depart, Return, adults, children, adult_price, child_price, meals, Class, totalAmt });
  }

  //get all users
  get_all_verrified_users() {
    return this.http.post<any>(this._Url + 'get_all_verrified_users', {});
  }
  get_all_nonverrified_users() {
    return this.http.post<any>(this._Url + 'get_all_nonverrified_users', {});
  }
  get_all_users_by_search(searchText) {
    return this.http.post<any>(this._Url + 'get_all_users_by_search', { searchText });
  }
  get_all_users() {
    return this.http.post<any>(this._Url + 'get_all_users', {});
  }

  //register as admin
  register_as_admin(uuid: string, ur: string) {
    return this.http.post<any>(this._Url + 'register_admin', { uuid, ur });
  }

  //add user payment
  add_user_payment(ticket_id, amount, card_number, cvv, expire_date) {
    return this.http.post<any>(this._Url + 'add_user_payment', { ticket_id, amount, card_number, cvv, expire_date });
  }

  //add user payment
  get_user_tickets(searchText) {
    var uuid = localStorage.getItem('uuid');
    return this.http.post<any>(this._Url + 'get_user_tickets', { searchText, uuid });
  }

   //add user payment
   generate_report(data) {
    return this.http.post<any>(this._Url + 'generate_report', { data });
  }
}
