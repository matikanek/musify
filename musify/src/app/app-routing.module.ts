import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./+home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'browse',
    loadChildren: () => import('./+browse/browse.module').then(m => m.BrowseModule),
  },
  {
    path: 'authors',
    loadChildren: () => import('./+authors/authors.module').then(m => m.AuthorsModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./+settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
