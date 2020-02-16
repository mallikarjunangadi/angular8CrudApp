import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any = {};
  prodForm: FormGroup;

  constructor(private ps: ProductService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.prodForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    })
  }

  updateProduct(ProductName, ProductDescription, ProductPrice) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(params["id"], { ProductName, ProductDescription, ProductPrice }).subscribe(res => {
        this.router.navigate(["product/list"]);
      })
    })
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.getProductById(params["id"]).subscribe(res => {
        this.product = res;
      })
    })
  }

}
