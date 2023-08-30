import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsModuleComponent } from './products-module/products-module.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: ProductsModuleComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'orders', component: CustomerOrdersComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
