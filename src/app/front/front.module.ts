import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchPipe } from './search.pipe';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SinginComponent } from './singin/singin.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    ProductsComponent,
    FooterComponent,
    CartComponent,
    SearchPipe,
    LoginComponent,
    SinginComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
})
export class FrontModule {}
