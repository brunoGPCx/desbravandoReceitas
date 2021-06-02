import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./termos/termos.module').then(m => m.TermosPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./suporte/suporte.module').then(m => m.SuportePageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'vermais1',
    loadChildren: () => import('./vermais1/vermais1.module').then(m => m.Vermais1PageModule)
  },
  {
    path: 'vermais2',
    loadChildren: () => import('./vermais2/vermais2.module').then(m => m.Vermais2PageModule)
  },
  {
    path: 'vermais3',
    loadChildren: () => import('./vermais3/vermais3.module').then(m => m.Vermais3PageModule)
  },
  {
    path: 'vermais4',
    loadChildren: () => import('./vermais4/vermais4.module').then(m => m.Vermais4PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
