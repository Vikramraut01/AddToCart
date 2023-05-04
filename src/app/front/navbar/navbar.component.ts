import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  productCount: any;
  b: number = 0;
  constructor(private server: DataServiceService) {
    this.server.getCartData().subscribe((res) => {
      this.productCount = res;
      this.b = this.productCount.length;
    });
  }

  searchKey(event: any) {
    this.server.getSearchString(event.target.value);
  }
  getElectronics(val: any) {
    this.server.getSearchString(val);
  }

  getGrosary(item: any) {
    this.server.getSearchString(item);
  }
  getAppliences(item:any){
    this.server.getSearchString(item);
  }



}
