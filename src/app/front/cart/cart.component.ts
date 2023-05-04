import { Component, DoCheck } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartList: any;
  constructor(private server: DataServiceService) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.server.getCartData().subscribe((res) => {
      this.cartList = res;
      // console.log(res);
    });
  }

  deleteCartPro(id: any) {
    this.server.deleteCartPro(id).subscribe((res) => {
      this.ngOnInit();
      location.reload();
    });
  }

  displayedColumns: string[] = [
    'i',
    'pro_img',
    'pro_name',
    'comp_name',
    'description',
    'price',
    'action',
  ];

  sum: number = 0;
  getTotal() {
    let total = 0;
    this.cartList.map((a: any) => {
      for (let i = 1; i <= a.quantity; i++) {
        total = total + a.price;
      }
    });
    return total;
  }

  reduceCartPro(data: any) {
    data.quantity = data.quantity - 1;
    if (data.quantity == 0) {
      this.server.deleteCartPro(data.id).subscribe((res) => {
        console.log(res);
        this.ngOnInit();
        this.getTotal();
      });
    } else {
      this.server.updateCartPro(data).subscribe((res) => {
        console.log(res);
      });
    }
  }

  increaseCartPro(data: any) {
    data.quantity = data.quantity + 1;
    this.server.updateCartPro(data).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
      this.getTotal();
    });
  }
}
