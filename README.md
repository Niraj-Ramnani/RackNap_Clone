# RackNap Homepage Clone

A lightweight, modular recreation of the [RackNap](https://www.racknap.com/) homepage built using semantic HTML5, modular CSS3, and vanilla JavaScript.

---

## 🎨 Design Overview

- **Color Palette**:
  - **Brand Orange (`#E85D24`)**: High-energy accent used for CTAs, highlights, and active states.
  - **Dark Charcoal (`#1A1614` / `#000000`)**: Deep contrast used in the Features section and Footer for an enterprise, tech-forward aesthetic.
  - **Warm Cream (`#FDF8F4`)**: Soft backdrop in the Hero section to balance bold dark sections.
  - **Card Hover State (`#241F1C`)**: Smooth card background transition on hover with drop shadow elevation.
- **Typography**:
  - **Headings**: `Archivo` (bold, geometric, authoritative).
  - **Body**: `Montserrat` (clean, accessible sans-serif).
- **Layout & Visual Hierarchy**: Alternating light/dark themes with spacious whitespace, clean pill tags, and smooth micro-interactions that keep the interface dynamic without bloated libraries.

---

## 🧩 Components & Purpose

The page is structured into modular, reusable HTML partials inside `components/`:

| Component | File | Purpose |
| :--- | :--- | :--- |
| **Header** | `header.html` | Clean navigation bar featuring brand identity, links, mobile toggle, and primary demo CTA. |
| **Hero** | `hero.html` | Above-the-fold conversion area with G2/Capterra social proof, core value proposition, CTAs, and dashboard preview. |
| **Trusted Bar** | `trusted-bar.html` | Industry validation bar highlighting analyst citations (IDC, Forrester, Gartner) alongside a continuous partner logo ticker. |
| **Features** | `features.html` | High-contrast dark section presenting 4 audience segments (MSPs, Telcos, Distributors, ISVs) with key metrics and an interactive CTA strip. |
| **Footer** | `footer.html` | Comprehensive footer with multi-region contact details, newsletter subscription, social links, and copyright information. |

---

## 📁 Project Architecture

- **`index.html`**: Entry point linking stylesheets and mounting components dynamically.
- **`components/`**: Clean HTML files for each page section.
- **`css/`**: Logically split stylesheets (`base.css`, `header.css`, `hero.css`, `trusted-bar.css`, `features.css`, `footer.css`, `responsive.css`).
- **`js/components.js`**: Lightweight asynchronous component loader using vanilla `fetch()`.
- **`js/main.js`**: UI interaction handler (mobile hamburger toggle and event listeners).

---

## 🚀 Running Locally

Because components are loaded dynamically via `fetch()`, run via a local web server:

```bash
# Python
python -m http.server 8080

# Or Node (npx)
npx serve .
```

Open `http://localhost:8080` in your browser.
