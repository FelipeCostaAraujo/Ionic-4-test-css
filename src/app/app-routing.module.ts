import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'flutter', loadChildren: './flutter/flutter.module#FlutterPageModule' },
  { path: 'clima', loadChildren: './clima/clima.module#ClimaPageModule' },
  { path: 'panda', loadChildren: './panda/panda.module#PandaPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'randomly', loadChildren: './randomly/randomly.module#RandomlyPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
