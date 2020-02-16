import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = "http://localhost:4000/products";

  constructor(private http: HttpClient) { }

  addProduct(productData) {
    return this.http.post(`${this.url}/add`, productData); //.subscribe(d )
  }

  getProductsList() {
    return this.http.get(`${this.url}/list`);
  }

  getProductById(id) {
    return this.http.get(`${this.url}/${id}`)
  }

  updateProduct(id, productData) {
    return this.http.put(`${this.url}/edit/${id}`, productData);
  }

  deleteProduct(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
