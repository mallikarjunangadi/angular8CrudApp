import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [{
  path: "product/add",
  component: ProductAddComponent
},{
  path: "product/edit/:id",
  component: ProductEditComponent
},{
  path: "product/list",
  component: ProductListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
