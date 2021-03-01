import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { ProductsItemComponent } from './components/products/products-list/products-item/products-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductNewComponent,
    ProductEditComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductsEditComponent,
    ProductsAddComponent,
    ProductsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
