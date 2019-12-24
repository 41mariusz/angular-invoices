import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  addProduct(InputName, InputDescription, InputTax, InputAmount, InputDate) {
    console.log(InputName, InputDescription, InputTax, InputAmount, InputDate);
    const obj = {
      'name': InputName,
      'description': InputDescription,
      'tax': InputTax,
      'amountNet': InputAmount,
      'date': InputDate
    };
    this.http.post(`${this.uri}/invoices`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}/invoices`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/invoices/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/invoices/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteProduct(id) {
    return this
              .http
              .delete(`${this.uri}/invoices/${id}`);
  }
}
