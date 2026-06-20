import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Component, signal } from '@angular/core';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  let fixture: ComponentFixture<Sidebar>;
  let component: Sidebar;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a nav element with aria-label "Main navigation"', () => {
    const nav = element.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');
  });

  it('should render all four navigation links', () => {
    const links = element.querySelectorAll('.sidebar__link');
    expect(links.length).toBe(4);
  });

  it('should render a Dashboard link pointing to /dashboard', () => {
    const link = element.querySelector<HTMLAnchorElement>(
      'a[href="/dashboard"]',
    );
    expect(link).toBeTruthy();
    expect(link?.textContent).toContain('Dashboard');
  });

  it('should render a Devices link pointing to /devices', () => {
    const link = element.querySelector<HTMLAnchorElement>('a[href="/devices"]');
    expect(link).toBeTruthy();
    expect(link?.textContent).toContain('Devices');
  });

  it('should render a Sites link pointing to /sites', () => {
    const link = element.querySelector<HTMLAnchorElement>('a[href="/sites"]');
    expect(link).toBeTruthy();
    expect(link?.textContent).toContain('Sites');
  });

  it('should render a General Settings link pointing to /general-settings', () => {
    const link = element.querySelector<HTMLAnchorElement>(
      'a[href="/general-settings"]',
    );
    expect(link).toBeTruthy();
    expect(link?.textContent).toContain('General Settings');
  });

  it('should not show backdrop when mobileOpen is false', () => {
    const backdrop = element.querySelector('.sidebar__backdrop');
    expect(backdrop).toBeFalsy();
  });

  it('should show backdrop when mobileOpen is true', () => {
    fixture.componentRef.setInput('mobileOpen', true);
    fixture.detectChanges();
    const backdrop = element.querySelector('.sidebar__backdrop');
    expect(backdrop).toBeTruthy();
  });

  it('should emit closeRequested when backdrop is clicked', () => {
    fixture.componentRef.setInput('mobileOpen', true);
    fixture.detectChanges();

    let emitted = false;
    component.closeRequested.subscribe(() => (emitted = true));

    const backdrop = element.querySelector<HTMLElement>('.sidebar__backdrop');
    backdrop?.click();

    expect(emitted).toBe(true);
  });

  it('should apply sidebar--collapsed class when collapsed is true', () => {
    fixture.componentRef.setInput('collapsed', true);
    fixture.detectChanges();
    const aside = element.querySelector('.sidebar');
    expect(aside?.classList.contains('sidebar--collapsed')).toBe(true);
  });

  it('should not apply sidebar--collapsed class when collapsed is false', () => {
    fixture.componentRef.setInput('collapsed', false);
    fixture.detectChanges();
    const aside = element.querySelector('.sidebar');
    expect(aside?.classList.contains('sidebar--collapsed')).toBe(false);
  });

  it('should apply sidebar--mobile-open class when mobileOpen is true', () => {
    fixture.componentRef.setInput('mobileOpen', true);
    fixture.detectChanges();
    const aside = element.querySelector('.sidebar');
    expect(aside?.classList.contains('sidebar--mobile-open')).toBe(true);
  });

  it('should set title attribute on links when collapsed', () => {
    fixture.componentRef.setInput('collapsed', true);
    fixture.detectChanges();
    const links = element.querySelectorAll<HTMLAnchorElement>('.sidebar__link');
    links.forEach(link => {
      expect(link.title).toBeTruthy();
    });
  });

  it('should not set title attribute on links when not collapsed', () => {
    fixture.componentRef.setInput('collapsed', false);
    fixture.detectChanges();
    const links = element.querySelectorAll<HTMLAnchorElement>('.sidebar__link');
    links.forEach(link => {
      expect(link.title).toBe('');
    });
  });

  it('should render an SVG icon for each nav item', () => {
    const icons = element.querySelectorAll('.sidebar__icon');
    expect(icons.length).toBe(4);
  });
});
