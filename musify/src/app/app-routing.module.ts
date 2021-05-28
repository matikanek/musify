import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./+home/home-routing.module').then(m => m.HomeRoutingModule),
  },
  {
    path: 'browse',
    loadChildren: () => import('./+browse/browse-routing.module').then(m => m.BrowseRoutingModule),
  },
  {
    path: 'authors',
    loadChildren: () => import('./+authors/authors-routing.module').then(m => m.AuthorsRoutingModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./+settings/settings-routing.module').then(m => m.SettingsRoutingModule),
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
