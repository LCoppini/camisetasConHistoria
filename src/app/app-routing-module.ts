import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 1. Asegurate de importar el componente correcto de la lista
import { CamisetasList } from './camisetas-list/camisetas-list'; 
import { CamisetasAbout } from './camisetas-about/camisetas-about';

const routes: Routes = [
  // 2. AGREGADO: Si entran a la raíz sin escribir nada, que los mande directo a /camisetas
  {
    path: '',
    redirectTo: 'camisetas',
    pathMatch: 'full'
  },
  // 3. CORREGIDO: Cambiamos CamConHistoCamisetas por CamisetasList para que se vea tu tabla con MockAPI
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