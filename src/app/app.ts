import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'welcome-app';
  protected sidebarCollapsed = signal(false);

  toggleSidebar(): void {
    this.sidebarCollapsed.update((v) => !v);
  }
}
