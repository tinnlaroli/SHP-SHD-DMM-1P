import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { TabsComponent } from './tabs.component';
=======
import { TabsComponent } from '../tabs/tabs.component';
>>>>>>> f0a651d (Resolviendo conflicto en tabs-routing y tabs.module)

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'discover',
        loadChildren: () => import('../pages/discover/discover.module').then(m => m.DiscoverPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
