import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:product-id', component: ProductsViewComponent },
  { path: 'categories/:category-name', component: ProductsListComponent },
  
  {path:'cart', component:CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
