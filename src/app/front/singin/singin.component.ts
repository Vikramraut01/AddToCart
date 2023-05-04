import { Component } from '@angular/core';
import { Inject } from '@angular/core';

import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
})
export class SinginComponent {
  constructor(
    private server: DataServiceService,
    private fb: FormBuilder,
    private rout: Router
  ) {}

  logIn = this.fb.group({
    name: new FormControl(''),
    mail: new FormControl(''),
    phoneNo: new FormControl(''),
    userName: new FormControl(''),
    passWard: new FormControl(''),
  });

  signIn(data: any) {
    console.log(data);
  }

  addUser(data: any) {
    this.server.addUser(data).subscribe((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.rout.navigate(['/']);
    });
  }
}
