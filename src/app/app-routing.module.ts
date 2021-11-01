import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"products", canActivate:[AuthGuard], component: ProductsComponent},
  {path: 'products/:id', canActivate:[AuthGuard], component: ProductDetailComponent },
  {path: '', redirectTo:"/login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
