/*
Copyright (C) Air Liquide S.A,  2017
Author(s) :  Tanguy Godin, Alexandre Transon, Turhan OZ,  Creative Foundry
This file is part of Darwin project.

This file is subject to the terms and conditions defined in
file 'LICENSE.txt', which is part of this source code package.
*/

import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginGuardService } from './auth/guard/login-guard.service';
import { LoginComponent } from './auth/login/login.component'
import { HomepageComponent, ImportsComponent, EquipementsComponent,  ClientsComponent, SettingsComponent, ValveComponent} from './pages';


const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuardService],
    children: [{
      path: '',
      component: HomepageComponent,
    }, {
      path : 'home',
      component: HomepageComponent
    }, {
      path: 'imports',
      component: ImportsComponent
    },
    {
      path: 'equipements',
      component: EquipementsComponent
    },
    {
      path: 'clients',
      component: ClientsComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    },
    {
      path: 'valve',
      component: ValveComponent
    },{
      path: 'valve:id',
      component: ValveComponent
    }]
  }
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
