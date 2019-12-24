import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMyInvoicesCompunent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { MyInvoicesComponent } from './product-get/product-get.component';

const routes: Routes = [
  {
    path: 'myinvoices/new',
    component: NewMyInvoicesCompunent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'myinvoices',
    component: MyInvoicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
