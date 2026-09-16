# KreatedByKeora — Website
WEDE PoE
Part 1 - Building The Foundation

Project Overview
Front-end build for **KreatedByKeora**, a nail artistry studio based in
Kibler Park, Johannesburg South. Built to match the approved WEDE5020
Website Project Proposal (Part 1) and its low-fidelity wireframes.

Website Goals & Objectives 
- Redirect enquiries and bookings from scattered social media platforms comment section/direct messages onto a single professional platform. 
- Increase discoverability for clients searching online for her genre of nail art, not just client-based on followers. 
- The website must showcase a well-curated portfolio that builds trust and credibility with new clients before their first visit/booking. 

Features & functionality

 Homepage
•	Either the business owner’s image or business logo.
•	Simple, brief introduction. 
•	‘Book Now’ button as a call to action for the clients. 
•	A navigation menu.

About Us 	
•	Write a short story about Keora (the business owner), her journey into becoming a nail technician and her reasoning. 
•	Provide a business background and its challenges.
•	Provide a business studio philosophy 

Services provided 
•	Nail treatment with indicative pricing; Gel, acrylic, simple and dramatic nail art.
Enquiry
•	Develop a booking form that captures preferred and available dates, service and possibly an external or internal image reference.

Contact details.	
•	Have a WhatsApp and a call number 
•	Link the social media app and websites. 
•	Link the studio address with google map for easier access. 

Images	
•	All images will be taken from the business owner’ social media page. 
Policies 	
•	What is to be expected when booking, the deposit and late fee and last-minute cancellations.

Timelines & Milestones
Dates & Context 
24 July 2026 to 31 July 2026 
•	Research and planning.
•	Creating the sitemap, wireframes, content/images collections.

3 August 2026 to 14 August 2026 
•	Create the HTML website using VS Code & GitHub

17 August 2026 to 28 August 2026
•	Start Part 2: Building the homepage and add the ‘About Us’ section, setting up files and folder structure. 

31 August 2026 to 11 September 2026	
•	Building the service and enquiry pages &
•	Building the contact page and test the website navigation and links.
•	Add stylising and design colours to the website

14 September 2026 to 18 September 2026	
•	Proof -read and check the website. Test the links, loading times and everything else for the website. 
•	Submit Part 2

21 September 2026 to 02 October 2026
•	Review Part 1 and Part 2 and make improvements where necessary. 
•	Fixing errors and reviewing comments. 

06 October 2026 to 23 October 2026	
•	Part 3, Add JavaScript to the code.

27 October 2026 to 6 November 2026	
•	Reviewing all additions. 
•	Fixing bugs 

6 November 2026 – 20 November 2026	
•	Proof -read and check the website. Test the links, loading times and everything else for the website. 


## Structure> The Website stucuture outline

KreatedByKeora/
├── index.html          Homepage — hero, quick categories, featured/popular nail art
├── about.html           About Us — Keora's story, background, mission & vision
├── services.html        Services — filterable price list with portfolio images
├── enquiry.html          Booking form — validated client-side, policies, POPIA note
├── contact.html          Map, WhatsApp/call, socials, small contact form
├── art_work.html         Nail art samples that were completed by Keora
├── css/
│   └── style.css        Design tokens, layout, components
├── js/
│   ├── main.js           Mobile nav drawer, services filter, active nav state
│   └── form-validation.js Required-field / email / phone validation
├── images/
│   ├── hero/             Logo
│   ├── portfolio/         Nail art photography
│   └── icons/             (reserved for future iconography)
└── README.md
```

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

DevTools 
<img width="1858" height="948" alt="iPhone 16 view" src="https://github.com/user-attachments/assets/065e2659-dcf6-4de2-a44b-76d1639a1895" />


