import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { CamisetasList } from './camisetas-list/camisetas-list';

import { CartComponent } from './cart/cart';

import { CamConHistoCamisetas } from './camconhisto-camisetas/camconhisto-camisetas';
import { CamisetasAbout } from './camisetas-about/camisetas-about';
import { InputInteger } from './input-integer/input-integer';
import {HttpClient,HttpClientModule} from  '@angular/common/http';

@NgModule({
  declarations: [
    App,
    CamisetasList,
    CartComponent, // CORRECCIÓN: Se cambió 'CamisetasCarrito' y 'Cart' por 'CartComponent'
    CamConHistoCamisetas,
    CamisetasAbout,
    InputInteger,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
