import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { CamisetasList } from './camisetas-list/camisetas-list';
import { CamisetasCarrito } from './camisetas-carrito/camisetas-carrito';

@NgModule({
  declarations: [App, CamisetasList, CamisetasCarrito],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
