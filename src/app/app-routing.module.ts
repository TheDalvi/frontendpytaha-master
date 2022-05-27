import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlquilerFormPageModule } from './alquiler/alquiler-form/alquiler-form.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'alquiler-list',
    pathMatch: 'full'
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'categoria-list',
    loadChildren: () => import('./Categoria/categoria-list/categoria-list.module').then( m => m.CategoriaListPageModule)
  },
  {
    path: 'categoria-form',
    loadChildren: () => import('./Categoria/categoria-form/categoria-form.module').then( m => m.CategoriaFormPageModule)
  },
  {
    path: 'categoria-form/:id',
    loadChildren: () => import('./Categoria/categoria-form/categoria-form.module').then( m => m.CategoriaFormPageModule)
  },
  {
    path: 'rol-list',
    loadChildren: () => import('./rol/rol-list/rol-list.module').then( m => m.RolListPageModule)
  },
  {
    path: 'rol-form',
    loadChildren: () => import('./rol/rol-form/rol-form.module').then( m => m.RolFormPageModule)
  },
  {
    path: 'rol-form/:id',
    loadChildren: () => import('./rol/rol-form/rol-form.module').then( m => m.RolFormPageModule)
  },

  {
    path: 'usuario-form',
    loadChildren: () => import('./Usuario/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
  },
  {
    path: 'usuario-form/:id',
    loadChildren: () => import('./Usuario/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
  },
  {
    path: 'usuario-list',
    loadChildren: () => import('./Usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'alquiler-list',
    loadChildren: () => import('./alquiler/alquiler-list/alquiler-list.module').then( m => m.AlquilerListPageModule)
  },

  {
    path: 'alquiler-form',
    loadChildren: () => import('./alquiler/alquiler-form/alquiler-form.module').then( m => AlquilerFormPageModule)
  },
  {
    path: 'alquiler-form/:id',
    loadChildren: () => import('./alquiler/alquiler-form/alquiler-form.module').then( m => AlquilerFormPageModule)
  },
  {
    path: 'alquiler-list-admn',
    loadChildren: () => import('./alquiler/alquiler-list-admin/alquiler-list-admin.module').then( m => m.AlquilerListPageAdminModule)
  },
  {
    path: 'login-ingresar',
    loadChildren: () => import('./login/login-ingresar/login-ingresar.module').then( m => m.LoginIngresarPageModule)
  },
  {
    path: 'registrar-inicio',
    loadChildren: () => import('./registrar/registrar-inicio/registrar-inicio.module').then( m => m.RegistrarInicioPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
