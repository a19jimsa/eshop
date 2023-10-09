import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModuleComponent } from './products-module/products-module.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductPageComponent } from './product-page/product-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsModuleComponent,
    NavbarComponent,
    ProductPageComponent,
    DashboardComponent,
    ProductFormComponent,
    ChartComponent,
    CheckoutComponent,
    OrderComponent,
    CheckoutFormComponent,
    CustomerOrdersComponent,
    AdminComponent,
    AdminLoginComponent,
    DialogBoxComponent,
    CreateProductComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
