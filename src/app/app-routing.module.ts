import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientSignInComponent } from './client-sign-in/client-sign-in.component';
import { ClientServiceComponent } from './client-service/client-service.component';

import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { BackofficeSettingsComponent } from './backoffice-settings/backoffice-settings.component';

import { EmpSignInComponent } from './emp-sign-in/emp-sign-in.component';
import { HomeComponent } from './home/home.component';

import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { NavBarAgentComponent } from './nav-bar-agent/nav-bar-agent.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AgentSettingsComponent } from './agent-settings/agent-settings.component';
import { AuthGuard } from './guards/auth.guard';





const routes: Routes = [
  {
    path: 'agent',
    component: NavBarAgentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'backoffice',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'emp-signin',
    component: EmpSignInComponent,

  },
  {
    path: 'client-signin',
    component: ClientSignInComponent,

  },
  {
    path: 'client-register',
    component: ClientRegisterComponent,
  },
  {
    path: 'client-home',
    component: ClientHomeComponent,
    children:[  
      {
      path:"profile",
      component:ClientProfileComponent
      },
      {
        path:"history",
        component:ClientHistoryComponent
      },
      {
        path:"",
        component:ClientServiceComponent
      }
    ]
  },
  

  {
    path: 'backoffice/settings',
   component: BackofficeSettingsComponent,
  },
  {
    path: 'backoffice/agents/:id',
    component: AgentProfileComponent,
  },
  {
    path: 'agent/client/:id',
    component: ClientProfileComponent,
  },
  {
    path: 'agent/settings',
    component: AgentSettingsComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
