import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { CamisetasList } from './camisetas-list/camisetas-list';

// CORRECCIÓN: Importamos la clase real 'CartComponent' y eliminamos el duplicado
import { CartComponent } from './cart/cart'; 

import { CamConHistoCamisetas } from './camconhisto-camisetas/camconhisto-camisetas';
import { CamisetasAbout } from './camisetas-about/camisetas-about';

@NgModule({
  declarations: [
    App, 
    CamisetasList, 
    CartComponent, // CORRECCIÓN: Se cambió 'CamisetasCarrito' y 'Cart' por 'CartComponent'
    CamConHistoCamisetas, 
    CamisetasAbout
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App],
})
export class AppModule {}
