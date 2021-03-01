import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductNewComponent} from './components/product-new/product-new.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"newProduct",component:ProductNewComponent},
  {path:'editProduct/:id',component:ProductEditComponent},
  {path:"",component:HomeComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
