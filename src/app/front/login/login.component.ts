import { Component } from '@angular/core';
import { SinginComponent } from '../singin/singin.component';
import { DataServiceService } from 'src/app/data-service.service';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private server: AuthserviceService) {}

  logIn(userName: any, passWard: any) {
    let result = this.server.logIn(userName, passWard);

    console.log(result);
  }
}
