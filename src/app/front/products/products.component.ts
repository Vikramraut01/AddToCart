import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allPro: any = [];

  constructor(private server: DataServiceService) {}

  @ViewChild(NavbarComponent) nav: any;

  searchKey = '';

  ngOnInit() {
    this.server.getProducts().subscribe((res) => {
      this.allPro = res;
      console.log(res);
    });

    this.server.search.subscribe((res) => {
      this.searchKey = res;
    });
  }
  postdata(data: any) {
    this.server.postData(data).subscribe((res) => {});
   this.server.getCartData();
   location.reload();
  }

  alldatafatch(val: any) {
    this.server.getSearchString(val);
  }
}
