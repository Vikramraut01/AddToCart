import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';
import { AuthgardGuard } from '../auth/authgard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign', component: SinginComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule {}
