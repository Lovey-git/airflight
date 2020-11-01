import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private api: ApiService,
        private router: Router,
    ) {

    }

    //login
    login(email, password) {
        return this.http.post<any>(this.api._Url + 'login', { email, password });
    }

    auth(uuid): void {
        localStorage.setItem('uuid', uuid);
        this.router.navigateByUrl('home');
    }

    isLoggedin(): Boolean {
        if (localStorage.getItem('uuid')) {
            return true;
        } else {
            return false;
        }
    }

    get_user() {
        var uuid = localStorage.getItem('uuid');
        return this.http.post<any>(this.api._Url + 'getUser', { uuid });
    }

    logout() {
        localStorage.removeItem('uuid');
    }

}
