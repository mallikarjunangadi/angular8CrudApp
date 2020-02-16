import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Product from "../Product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  prodForm: FormGroup;
  productDetails: Product;

  constructor(private fb: FormBuilder, private ps: ProductService) {
    this.createForm()
  }

  createForm() {
    this.prodForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    })
  }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    console.log(ProductName, ProductDescription, ProductPrice);

    this.ps.addProduct({ ProductName, ProductDescription, ProductPrice }).subscribe(res => {
      console.log("Product Added successfully");
    })
  }

  ngOnInit() { }

}
