
## Changelog

### Part 2 — 09 September 2026

**Addressing Part 1 feedback:**
- Added this Changelog section to the README. This was the only mark lost in
  Part 1 (0/5, "No changelog provided") — all edits made from this point on
  are logged here going forward.

**CSS styling (desktop):**
- Linked `css/style.css` in the `<head>` of every page (it existed from
  Part 1 but was never linked, so none of the site's styling was actually
  loading in the browser).
- Added Google Fonts `<link>` tags (Fraunces + Manrope) to every page, per
  the design system below.
- Built a full external stylesheet: CSS reset, design-token variables
  (colour, type scale, spacing, radius), base typography, header/nav,
  mobile drawer, buttons, hero, chip filters, card/grid layouts (services,
  gallery, featured/popular), forms, footer, and the sticky bottom tab bar.
- Used CSS Grid for card grids (`grid-3`, `grid-2`, `gallery-grid`) and
  Flexbox for the header, hero, chip row and forms.
- Added `:hover`, `:focus-visible` and `:active` states across nav links,
  buttons, chips, cards and form fields.
- Respected `prefers-reduced-motion` for all transitions.

**Responsive design:**
- Mobile-first base styles, with breakpoints at `600px` (tablet: 2→3 column
  grids) and `860px` (desktop: top nav replaces the hamburger/tab-bar, hero
  switches to a two-column layout).
- Used relative units (`rem`, `%`, `vw`) and `aspect-ratio` for responsive
  images instead of fixed pixel dimensions.


**Bug fixes:**
- `art_work.html` had a mismatched closing `</a>` tag, a duplicated
  `</body>` tag, and was missing the shared header/drawer/footer/tab-bar
  markup used on every other page — rebuilt it to match the rest of the
  site so the shared stylesheet applies consistently. Also replaced its
  placeholder `<title>Document</title>` with a real title and meta
  description.
- `enquiry.html` had a stray closing `</section>` tag with no matching
  opening tag around the page intro — fixed so the page's HTML is valid.


## Design system

- **Colour:** blush pink (`#f1c4d6`) and rose-gold (`#c79a7b`) on a
  charcoal base (`#18131a`), per the proposal's Design & UX brief.
- **Type:** Fraunces (serif, headings) paired with Manrope (sans-serif,
  body/UI).
- **Layout:** mobile-first, single column, with a sticky top header and
  a sticky bottom thumb-nav bar for one-handed browsing — the desktop
  breakpoint (≥860px) swaps in a conventional top nav.

References 
Glamour South Africa, 2025. Nailed it: 9 local nail artists who are changing the game. [online] Available at: [Accessed 27 July 2026].
KreatedByKeora, [s.a.]. TikTok profile. [TikTok] Available at: [Accessed 27 July 2026].
All images are taken from KreatedByKeora main business account from Instagram < https://www.instagram.com/kreatedbykeora/ > [Accessed: 28 July 2026]

**Part 2 additions:**
Google Fonts, [s.a.]. Fraunces. [online] Available at: <https://fonts.google.com/specimen/Fraunces> [Accessed 10 September 2026].
Google Fonts, [s.a.]. Manrope. [online] Available at: <https://fonts.google.com/specimen/Manrope> [Accessed 10 September 2026].
MDN Web Docs, [s.a.]. CSS Grid Layout. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout> [Accessed 10 September 2026].
MDN Web Docs, [s.a.]. Using media queries. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries> [Accessed 10 September 2026].
OpenAI, 2026. ChatGPT response to prompt regarding the  of "Change log and what it is might to be completed". [AI language model online] Available at: https://chatgpt.com/ [Accessed 12 September 2026].
