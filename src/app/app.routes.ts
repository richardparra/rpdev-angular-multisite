import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    loadChildren:() => import('./sites/www/www.routes').then(m=>m.WWW_ROUTES)
  },
  {
    path:'admin',
    loadChildren:() => import('./sites/admin/admin.routes').then(m=>m.ADMIN_ROUTES)
  },
  {
    path:'landing',
    loadChildren:() => import('./sites/landing/landing.routes').then(m=>m.LANDING_ROUTES)
  }
];
