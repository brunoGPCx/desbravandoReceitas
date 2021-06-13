import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { InicioPage } from './inicio/inicio.page';

// path: 'inicio', loadChildren: './inicio/inicio.module',  canActivate: [AuthGuard] TENTAMOS COLOCAR A LINHA 14 DESSA FORMA E NAO FOI POSSIVEL
// CREIO QUE TENHA SIDO DEVIDO AO PROBLEMA DE ROTA QUE TIVEMOS COM O INICIO, ONDE FOI PRECISO SUA AJUDA PARA ARRUMAR

const routes: Routes = [
  {
    path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
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
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'termos1',
    loadChildren: () => import('./termos1/termos1.module').then( m => m.Termos1PageModule)
  },
  {
    path: 'av',
    loadChildren: () => import('./av/av.module').then( m => m.AvPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'perfil1',
    loadChildren: () => import('./perfil1/perfil1.module').then( m => m.Perfil1PageModule)
  },
  {
    path: 'perfil2',
    loadChildren: () => import('./perfil2/perfil2.module').then( m => m.Perfil2PageModule)
  },
  {
    path: 'perfil3',
    loadChildren: () => import('./perfil3/perfil3.module').then( m => m.Perfil3PageModule)
  },
  {
    path: 'perfil4',
    loadChildren: () => import('./perfil4/perfil4.module').then( m => m.Perfil4PageModule)
  },
  {
    path: 'perfil5',
    loadChildren: () => import('./perfil5/perfil5.module').then( m => m.Perfil5PageModule)
  },
  {
    path: 'perfil6',
    loadChildren: () => import('./perfil6/perfil6.module').then( m => m.Perfil6PageModule)
  },
  {
    path: 'perfil7',
    loadChildren: () => import('./perfil7/perfil7.module').then( m => m.Perfil7PageModule)
  },
  {
    path: 'perfil8',
    loadChildren: () => import('./perfil8/perfil8.module').then( m => m.Perfil8PageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
