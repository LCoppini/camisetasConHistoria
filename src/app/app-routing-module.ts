import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamConHistoCamisetas } from './camconhisto-camisetas/camconhisto-camisetas';
import { CamisetasAbout } from './camisetas-about/camisetas-about';


const routes: Routes = [

  {
    path: 'camisetas',
    component: CamConHistoCamisetas,
  }
,
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
