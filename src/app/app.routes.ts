import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: 'devices',
    loadComponent: () =>
      import('./pages/devices/devices').then(m => m.Devices),
  },
  {
    path: 'sites',
    loadComponent: () =>
      import('./pages/sites/sites').then(m => m.Sites),
  },
  {
    path: 'general-settings',
    loadComponent: () =>
      import('./pages/general-settings/general-settings').then(
        m => m.GeneralSettings,
      ),
  },
  {
    path: 'account-settings',
    loadComponent: () =>
      import('./pages/account-settings/account-settings').then(
        m => m.AccountSettings,
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
];
