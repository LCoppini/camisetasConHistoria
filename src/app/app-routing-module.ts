import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamisetasList } from './camisetas-list/camisetas-list'; 
import { CamisetasAbout } from './camisetas-about/camisetas-about';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'camisetas',
    pathMatch: 'full'
  },
  
  {
    path: 'camisetas',
    component: CamisetasList,
  },
  {
    path: 'about',
    component: CamisetasAbout,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }