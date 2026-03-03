import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() collapsed = false;

  readonly navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Devices', icon: 'devices', route: '/devices' },
    { label: 'Sites', icon: 'sites', route: '/sites' },
    { label: 'General Settings', icon: 'settings', route: '/general-settings' },
  ];
}
