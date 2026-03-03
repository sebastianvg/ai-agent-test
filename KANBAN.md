# 📋 Implementation Plan — Responsive Web Application

> **Stack:** Angular 21 · TypeScript · CSS (custom properties + light-blue palette)
> **Goal:** Deliver a responsive, modern UI with Header, Collapsable Side Menu, Footer, and four navigation sections (Dashboard, Devices, Sites, General Settings).

---

## 🎨 Design System Reference

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#29B6F6` | Buttons, active states, links |
| `--color-primary-dark` | `#0288D1` | Hover states, header/footer bg |
| `--color-primary-light` | `#B3E5FC` | Sidebar highlights, badges |
| `--color-primary-xlight` | `#E1F5FE` | Page background |
| `--color-accent` | `#0D47A1` | Headings, deep contrast |
| `--color-neutral-100` | `#FFFFFF` | Card surfaces |
| `--color-neutral-200` | `#F5F5F5` | Sidebar background |
| `--color-neutral-700` | `#616161` | Body text |
| `--color-neutral-900` | `#212121` | Primary text |
| `--color-danger` | `#EF5350` | Errors, destructive actions |
| `--color-success` | `#66BB6A` | Confirmations |

---

## 🗂️ Kanban Board

### 📌 BACKLOG

---

#### TASK-01 · Design Token & Global Styles Setup
**Type:** Foundation  
**Priority:** 🔴 Critical  
**Estimate:** 2h

**Description:**  
Create the global CSS file with all design tokens (CSS custom properties), typography scale, spacing scale, and reset/normalize rules. This is a prerequisite for all visual tasks.

**Acceptance Criteria:**
- [ ] CSS custom properties defined for all colour tokens listed in the Design System Reference
- [ ] Typography scale defined (`--font-size-xs` through `--font-size-3xl`)
- [ ] Spacing scale defined (`--space-1` through `--space-16`)
- [ ] Border-radius, box-shadow, and transition tokens defined
- [ ] Base reset applied (box-sizing, margin, padding, font defaults)
- [ ] File: `src/styles.css`

**Dependencies:** None

---

#### TASK-02 · Angular Project Structure & Routing Skeleton
**Type:** Architecture  
**Priority:** 🔴 Critical  
**Estimate:** 3h

**Description:**  
Scaffold the Angular modules, components, and routing structure for the four main sections. Set up lazy-loaded routes to keep initial bundle small.

**File/Folder Structure to Create:**
```
src/app/
├── layout/
│   ├── header/
│   │   ├── header.ts
│   │   ├── header.html
│   │   └── header.css
│   ├── sidebar/
│   │   ├── sidebar.ts
│   │   ├── sidebar.html
│   │   └── sidebar.css
│   └── footer/
│       ├── footer.ts
│       ├── footer.html
│       └── footer.css
├── pages/
│   ├── dashboard/
│   │   ├── dashboard.ts
│   │   ├── dashboard.html
│   │   └── dashboard.css
│   ├── devices/
│   │   ├── devices.ts
│   │   ├── devices.html
│   │   └── devices.css
│   ├── sites/
│   │   ├── sites.ts
│   │   ├── sites.html
│   │   └── sites.css
│   ├── general-settings/
│   │   ├── general-settings.ts
│   │   ├── general-settings.html
│   │   └── general-settings.css
│   └── account-settings/
│       ├── account-settings.ts
│       ├── account-settings.html
│       └── account-settings.css
└── shared/
    └── icons/          ← SVG icon components
```

**Acceptance Criteria:**
- [ ] All components scaffolded with Angular CLI (`ng generate component`)
- [ ] `app.routes.ts` configured with lazy-loaded routes for each page
- [ ] Default route redirects to `/dashboard`
- [ ] `RouterOutlet` placed correctly in the main layout shell
- [ ] `404 / wildcard` route added

**Dependencies:** None

---

#### TASK-03 · Header Component
**Type:** UI Component  
**Priority:** 🔴 Critical  
**Estimate:** 4h

**Description:**  
Build the top application header. The header spans the full viewport width, sits above the sidebar, and contains:
- **Left side:** Hamburger/toggle button to collapse/expand the sidebar
- **Centre:** Application name / logo wordmark
- **Right side:** "Account Settings" icon-button (user avatar or person icon) that navigates to `/account-settings`

**Visual Spec:**
```
┌──────────────────────────────────────────────────────────┐
│  ☰   App Logo / Name                         👤 Account  │
└──────────────────────────────────────────────────────────┘
```
- Background: `--color-primary-dark`
- Text / icon colour: `--color-neutral-100` (white)
- Height: `64px` desktop, `56px` mobile
- Fixed position (`position: sticky; top: 0`) with `z-index: 1000`
- Box-shadow below header

**Acceptance Criteria:**
- [ ] Hamburger button toggles a boolean signal/state that is passed to the sidebar
- [ ] Logo/wordmark centred (or left-of-centre on mobile)
- [ ] Account Settings button on the far right; clicking navigates to `/account-settings`
- [ ] Keyboard accessible (focus visible, ARIA labels on icon buttons)
- [ ] Responsive: on mobile the logo is hidden or abbreviated; account button remains visible
- [ ] `aria-label="Toggle navigation"` on hamburger button
- [ ] `aria-label="Account settings"` on account button

**Dependencies:** TASK-01, TASK-02

---

#### TASK-04 · Collapsable Side Menu Component
**Type:** UI Component  
**Priority:** 🔴 Critical  
**Estimate:** 5h

**Description:**  
Build the left-side navigation menu. It should support two modes:
- **Expanded** (default desktop): shows icon + label for each menu item, width `240px`
- **Collapsed** (toggled or mobile default): shows only icons, width `64px`
- **Hidden/Overlay** (mobile, `< 768px`): slides in as a drawer over content with a backdrop

**Navigation Items:**
| Icon (Material-style) | Label | Route |
|---|---|---|
| 📊 dashboard | Dashboard | `/dashboard` |
| 📱 devices | Devices | `/devices` |
| 📍 location_on | Sites | `/sites` |
| ⚙️ settings | General Settings | `/general-settings` |

**Visual Spec (expanded):**
```
┌──────────────┐
│ 📊 Dashboard │  ← active state: light-blue left border + bg
│ 📱 Devices   │
│ 📍 Sites     │
│ ⚙️  Settings  │
└──────────────┘
```

**Acceptance Criteria:**
- [ ] Collapse/expand animation (`transition: width 250ms ease`)
- [ ] Active route highlighted with `--color-primary-light` background and `--color-primary` left border
- [ ] `routerLinkActive` directive used for active state
- [ ] Collapsed mode shows only icons (tooltips on hover with full label)
- [ ] On mobile (`< 768px`): sidebar hidden by default; toggling opens an overlay drawer with semi-transparent backdrop
- [ ] Backdrop click closes the mobile drawer
- [ ] Keyboard accessible; `role="navigation"`, `aria-label="Main navigation"`
- [ ] Smooth icon-only tooltip via CSS `title` or Angular CDK Overlay

**Dependencies:** TASK-01, TASK-02, TASK-03

---

#### TASK-05 · Main Layout Shell (App Component)
**Type:** UI Component  
**Priority:** 🔴 Critical  
**Estimate:** 3h

**Description:**  
Wire together Header, Sidebar, Footer, and `<router-outlet>` into the root app shell. Manage the sidebar collapsed/expanded state here (or via a layout service) and pass it down to child components.

**Layout Grid:**
```
┌─────────────────────────────────────┐
│         HEADER  (sticky top)        │
├──────────┬──────────────────────────┤
│          │                          │
│ SIDEBAR  │   <router-outlet>        │
│          │   (main content area)    │
│          │                          │
├──────────┴──────────────────────────┤
│         FOOTER  (sticky bottom)     │
└─────────────────────────────────────┘
```

**CSS Layout Approach:**
- Root shell uses CSS Grid: `grid-template-rows: auto 1fr auto; grid-template-columns: auto 1fr`
- Header spans full width (`grid-column: 1 / -1`)
- Footer spans full width (`grid-column: 1 / -1`)
- `min-height: 100dvh` on the shell

**Acceptance Criteria:**
- [ ] Layout adapts correctly when sidebar collapses/expands (content area grows/shrinks)
- [ ] Main content area is scrollable independently of header/footer
- [ ] No horizontal scroll at any breakpoint
- [ ] `<main>` element wraps the router outlet with `role="main"` and `id="main-content"` (for skip-link)
- [ ] Skip-to-main-content accessibility link at the very top

**Dependencies:** TASK-03, TASK-04

---

#### TASK-06 · Footer Component
**Type:** UI Component  
**Priority:** 🟡 High  
**Estimate:** 2h

**Description:**  
Build the application footer. The footer should be minimal and elegant:
- Vertically and horizontally centred application logo / name
- Optional tagline or copyright notice below the logo

**Visual Spec:**
```
┌──────────────────────────────────────────────────────────┐
│                    🔵  AppName                           │
│               © 2026 Company Name                        │
└──────────────────────────────────────────────────────────┘
```
- Background: `--color-primary-dark`
- Text colour: `--color-neutral-100`
- Height: `72px` (auto on smaller content)
- Logo centred using flexbox

**Acceptance Criteria:**
- [ ] Logo/app name is centred horizontally and vertically
- [ ] Copyright text is present and styled
- [ ] Responsive: stays centred at all breakpoints
- [ ] Does not overlap with sidebar (spans only the content column on large screens OR full width — design decision to confirm)

**Dependencies:** TASK-01, TASK-05

---

#### TASK-07 · Dashboard Page
**Type:** Page  
**Priority:** 🟡 High  
**Estimate:** 3h

**Description:**  
Create the Dashboard landing page. This is the default route. It should provide a high-level overview with placeholder widgets/cards.

**Suggested Layout:**
- Welcome banner with user name placeholder
- 4 summary stat cards (e.g., Total Devices, Active Sites, Alerts, Settings to Review)
- Responsive card grid: 4 cols desktop → 2 cols tablet → 1 col mobile

**Acceptance Criteria:**
- [ ] Page title: "Dashboard"
- [ ] At least 4 summary stat cards with placeholder data
- [ ] Responsive card grid using CSS Grid
- [ ] Cards use `--color-primary-light` accent
- [ ] Route: `/dashboard`

**Dependencies:** TASK-05

---

#### TASK-08 · Devices Page
**Type:** Page  
**Priority:** 🟡 High  
**Estimate:** 3h

**Description:**  
Create the Devices management page. Placeholder content with a data table or card list showing mock device data.

**Acceptance Criteria:**
- [ ] Page title: "Devices"
- [ ] Table or card list with mock device entries (Name, Status, Location, Last Seen)
- [ ] Responsive: table scrolls horizontally on mobile OR converts to card list
- [ ] "Add Device" button (non-functional placeholder) styled with primary colour
- [ ] Route: `/devices`

**Dependencies:** TASK-05

---

#### TASK-09 · Sites Page
**Type:** Page  
**Priority:** 🟡 High  
**Estimate:** 3h

**Description:**  
Create the Sites management page. Placeholder content with a list or grid of site cards.

**Acceptance Criteria:**
- [ ] Page title: "Sites"
- [ ] Card grid of mock sites (Name, Address, Device Count, Status)
- [ ] "Add Site" button (non-functional placeholder)
- [ ] Responsive layout
- [ ] Route: `/sites`

**Dependencies:** TASK-05

---

#### TASK-10 · General Settings Page
**Type:** Page  
**Priority:** 🟡 High  
**Estimate:** 3h

**Description:**  
Create the General Settings page. Placeholder settings form with grouped sections.

**Suggested Sections:**
- Application Preferences (theme toggle, language, timezone)
- Notifications (email, push notification toggles)
- Display (density, items per page)

**Acceptance Criteria:**
- [ ] Page title: "General Settings"
- [ ] At least 3 settings sections, each in a card
- [ ] Form controls are styled consistently (toggle switches, dropdowns, inputs)
- [ ] "Save Changes" button (non-functional placeholder)
- [ ] Route: `/general-settings`

**Dependencies:** TASK-05

---

#### TASK-11 · Account Settings Page
**Type:** Page  
**Priority:** 🟡 High  
**Estimate:** 3h

**Description:**  
Create the Account Settings page, accessible from the header account button.

**Suggested Sections:**
- Profile Information (avatar, name, email)
- Security (change password, 2FA placeholder)
- Preferences (notification preferences)

**Acceptance Criteria:**
- [ ] Page title: "Account Settings"
- [ ] Avatar placeholder (circle with initials)
- [ ] Editable profile form fields
- [ ] "Save Profile" button (non-functional placeholder)
- [ ] Route: `/account-settings`
- [ ] Back navigation or breadcrumb to return to Dashboard

**Dependencies:** TASK-05

---

#### TASK-12 · Responsive Breakpoints & Mobile Polish
**Type:** Cross-cutting  
**Priority:** 🟠 Medium  
**Estimate:** 4h

**Description:**  
Audit and polish the full application at all defined breakpoints. Ensure no layout breaks, overflow issues, or readability problems.

**Breakpoints:**
| Name | Min Width | Description |
|---|---|---|
| mobile | `0px` | Single column, overlay sidebar |
| tablet | `768px` | Two columns, collapsible sidebar |
| desktop | `1024px` | Full sidebar expanded |
| wide | `1280px` | Max-width content container |

**Acceptance Criteria:**
- [ ] All pages tested at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Font sizes appropriate at each breakpoint
- [ ] Sidebar overlay works correctly on touch devices
- [ ] Header account button always visible

**Dependencies:** TASK-03 through TASK-11

---

#### TASK-13 · Accessibility Audit & ARIA Improvements
**Type:** Quality  
**Priority:** 🟠 Medium  
**Estimate:** 3h

**Description:**  
Review and improve accessibility compliance to WCAG 2.1 AA standard across all components and pages.

**Acceptance Criteria:**
- [ ] Colour contrast ratio ≥ 4.5:1 for all text
- [ ] All interactive elements reachable via keyboard (Tab order logical)
- [ ] Focus indicators visible on all focusable elements
- [ ] Landmark roles present: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] All icon-only buttons have `aria-label`
- [ ] Screen reader tested with NVDA or VoiceOver (or automated with axe-core)
- [ ] `skip to main content` link implemented and functional
- [ ] Page `<title>` updates on route change

**Dependencies:** TASK-03 through TASK-11

---

#### TASK-14 · Unit Tests for Layout Components
**Type:** Testing  
**Priority:** 🟠 Medium  
**Estimate:** 3h

**Description:**  
Write Vitest unit tests for the three layout components (Header, Sidebar, Footer) and the App shell.

**Acceptance Criteria:**
- [ ] Header: renders toggle button, logo, and account button; toggle emits event
- [ ] Sidebar: renders all 4 nav items; collapsed class applied when `isCollapsed` is true
- [ ] Footer: renders logo/app name
- [ ] App shell: sidebar state toggles correctly
- [ ] Tests run with `ng test` and all pass

**Dependencies:** TASK-03, TASK-04, TASK-05, TASK-06

---

#### TASK-15 · Documentation Update
**Type:** Documentation  
**Priority:** 🟢 Low  
**Estimate:** 1h

**Description:**  
Update `README.md` with project overview, architecture description, available routes, and design system notes.

**Acceptance Criteria:**
- [ ] README includes project description and tech stack
- [ ] All routes documented
- [ ] Design token table included
- [ ] Development setup instructions updated
- [ ] Screenshot or wireframe of the layout included

**Dependencies:** All other tasks

---

## 📊 Summary

| Priority | Tasks | Total Estimate |
|---|---|---|
| 🔴 Critical | TASK-01, 02, 03, 04, 05 | 17h |
| 🟡 High | TASK-06, 07, 08, 09, 10, 11 | 17h |
| 🟠 Medium | TASK-12, 13, 14 | 10h |
| 🟢 Low | TASK-15 | 1h |
| **Total** | **15 tasks** | **~45h** |

---

## 🔄 Suggested Sprint Order

### Sprint 1 — Foundation & Shell (Days 1–2)
`TASK-01` → `TASK-02` → `TASK-05` → `TASK-03` → `TASK-04` → `TASK-06`

### Sprint 2 — Pages (Days 3–4)
`TASK-07` → `TASK-08` → `TASK-09` → `TASK-10` → `TASK-11`

### Sprint 3 — Quality & Polish (Days 5–6)
`TASK-12` → `TASK-13` → `TASK-14` → `TASK-15`

---

## 🚧 Risks & Considerations

| Risk | Impact | Mitigation |
|---|---|---|
| Angular CDK not installed (needed for overlay/tooltip) | Medium | Install `@angular/cdk` or implement pure CSS tooltips |
| No icon library in project | Medium | Use Google Material Symbols (web font) or inline SVGs |
| Sidebar animation performance on low-end devices | Low | Use `transform: translateX` instead of `width` animation |
| CSS-only responsive table on Devices page may be complex | Low | Fallback to horizontal scroll with `overflow-x: auto` |
| WCAG colour contrast for light-blue palette | Medium | Validate all colour combinations with Contrast Checker before implementation |
