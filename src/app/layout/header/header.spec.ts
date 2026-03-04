import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let component: Header;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hamburger toggle button', () => {
    const toggleBtn = element.querySelector('.header__toggle-btn');
    expect(toggleBtn).toBeTruthy();
  });

  it('should have aria-label "Toggle navigation" on hamburger button', () => {
    const toggleBtn = element.querySelector('.header__toggle-btn');
    expect(toggleBtn?.getAttribute('aria-label')).toBe('Toggle navigation');
  });

  it('should render the logo wordmark', () => {
    const logo = element.querySelector('.header__logo');
    expect(logo).toBeTruthy();
    expect(logo?.textContent?.trim()).toBe('Welcome App');
  });

  it('should render the account settings button', () => {
    const accountBtn = element.querySelector('.header__account-btn');
    expect(accountBtn).toBeTruthy();
  });

  it('should have aria-label "Account settings" on account button', () => {
    const accountBtn = element.querySelector('.header__account-btn');
    expect(accountBtn?.getAttribute('aria-label')).toBe('Account settings');
  });

  it('should navigate to /account-settings via routerLink', () => {
    const accountBtn = element.querySelector('.header__account-btn');
    expect(accountBtn?.getAttribute('href')).toBe('/account-settings');
  });

  it('should emit sidebarToggled when hamburger button is clicked', () => {
    let emitted = false;
    component.sidebarToggled.subscribe(() => (emitted = true));

    const toggleBtn = element.querySelector<HTMLButtonElement>('.header__toggle-btn');
    toggleBtn?.click();

    expect(emitted).toBe(true);
  });

  it('should have a sticky header element', () => {
    const header = element.querySelector('.header');
    expect(header).toBeTruthy();
  });
});
