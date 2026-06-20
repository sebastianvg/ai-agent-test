import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';

const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly isCollapsed = signal(false);
  protected readonly isMobileOpen = signal(false);

  onSidebarToggle(): void {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      this.isMobileOpen.update(v => !v);
    } else {
      this.isCollapsed.update(v => !v);
    }
  }

  onSidebarClose(): void {
    this.isMobileOpen.set(false);
  }
}
