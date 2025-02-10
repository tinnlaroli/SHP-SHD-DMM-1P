import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash', pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  { 
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) 
  },
  { 
    path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) 
  },
  { 
    path: 'interests', loadChildren: () => import('./pages/interests/interests.module').then(m => m.InterestsPageModule) 
  },
  { 
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) 
  },
  { 
    path: 'discover', loadChildren: () => import('./pages/discover/discover.module').then(m => m.DiscoverPageModule) 
  },
  { 
    path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule) 
  },
  { 
    path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule) 
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
