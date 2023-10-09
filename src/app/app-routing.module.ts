import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsModuleComponent } from './products-module/products-module.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'category/:name', component: CategoryComponent },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    children: [
      { path: 'orders', component: CustomerOrdersComponent },
      { path: 'order/:id', component: OrderComponent },
      { path: 'create-product', component: CreateProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
