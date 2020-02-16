import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList;

  constructor(private ps: ProductService) { }

  getProductsList() {
    this.ps.getProductsList().subscribe(res => {
      this.productsList = res;
    })
  }


  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.getProductsList();
      console.log("product deleted successfully");
    })
  }

  ngOnInit() {
    this.getProductsList()
  }

}
