import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  userval: any;
  constructor(private http: HttpClient, private rout: Router) {}
  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }
  // Add data to  cart
  postData(data: any) {
    return this.http.post('http://localhost:3000/cart', data);
  }

  getCartData() {
    return this.http.get('http://localhost:3000/cart');
  }

  deleteCartPro(id: any) {
    return this.http.delete('http://localhost:3000/cart/' + id);
  }

  cartProductList: any;
  cartCount: any;

  getCartCount() {
    this.http.get(`http://localhost:3000/cart`).subscribe((res) => {
      this.cartProductList = res;
      console.log(this.cartProductList);
      let count = this.cartProductList.length;
      this.cartCount.next(count);
    });
  }

  public search = new Subject<any>();

  getSearchString(searchString: any) {
    this.search.next(searchString);
  }

  updateCartPro(data: any) {
    return this.http.put(`http://localhost:3000/cart/${data.id}`, data);
  }

  addUser(data: any) {
    return this.http.post(' http://localhost:3000/user', data);
  }

}
