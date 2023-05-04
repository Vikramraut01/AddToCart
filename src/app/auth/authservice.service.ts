import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private http: HttpClient, private rout: Router) {}

  us: any = [];

  public authgard = new BehaviorSubject<boolean>(false);

  logIn(userName: any, passWard: any) {
    this.http.get('http://localhost:3000/user').subscribe((res) => {
      this.us = res;
      const user = this.us.find((a: any) => {
        return a.userName === userName && a.passWard == passWard;
      });
      if (user) {
        this.authgard.next(true);
        this.rout.navigate(['nav']);
        localStorage.setItem('userName', JSON.stringify(user.userName));

        localStorage.setItem('passWard', JSON.stringify(user.passWard));
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'NotFound',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
