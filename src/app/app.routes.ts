import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { Devices } from './devices';
import { Sites } from './sites';
import { GeneralSettings } from './general-settings';
import { AccountSettings } from './account-settings';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'devices', component: Devices },
  { path: 'sites', component: Sites },
  { path: 'general-settings', component: GeneralSettings },
  { path: 'account-settings', component: AccountSettings },
];
