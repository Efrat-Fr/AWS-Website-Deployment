import { Routes } from '@angular/router';
import { CategoriesComponent } from './Component/categories/categories.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

export const routes: Routes = [
     { path: '', component: CategoriesComponent },
  { path: 'products/:categoryCode', component: ProductListComponent },
  { path: 'product/:categoryCode/:productId', component: ProductDetailsComponent }
];

