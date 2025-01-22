import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path:'ejemplo1',
    loadComponent:() => import('./signals/ejemplo1/ejemplo1.component').then(m => m.Ejemplo1Component)
  },
  {
    path:'ejemplo2',
    loadComponent:() => import('./signals/ejemplo2/ejemplo2.component').then(m => m.Ejemplo2Component)
  },
  {
    path:'ejemplo3',
    loadComponent:() => import('./signals/ejemplo3/ejemplo3.component').then(m => m.Ejemplo3Component)
  },
  {
    path:'ejemplo4',
    loadComponent:() => import('./signals/ejemplo4/ejemplo4.component').then(m => m.Ejemplo4Component)
  },
  {
    path:'ejemplo5',
    loadComponent:() => import('./signals/ejemplo5/ejemplo5.component').then(m => m.Ejemplo5Component)
  },
  {
    path:'ejemplo6',
    loadComponent:() => import('./signals/ejemplo6/ejemplo6.component').then(m => m.Ejemplo6Component)
  },
  {
    path:'ejemplo7',
    loadComponent:() => import('./signals/ejemplo7/ejemplo7.component').then(m => m.Ejemplo7Component)
  },
  {
    path:'ejemplo8',
    loadComponent:() => import('./signals/ejemplo8/ejemplo8.component').then(m => m.Ejemplo8Component)
  },
  {
    path:'ejemplo9',
    loadComponent:() => import('./signals/ejemplo9/ejemplo9.component').then(m => m.Ejemplo9Component)
  }
];
