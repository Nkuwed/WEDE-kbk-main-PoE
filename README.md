# KreatedByKeora — Website

Front-end build for **KreatedByKeora**, a nail artistry studio based in
Kibler Park, Johannesburg South. Built to match the approved WEDE5020
Website Project Proposal (Part 1) and its low-fidelity wireframes.# KreatedByKeora — Website
WEDE PoE
Part 1 - Building The Foundation

Project Overview
Front-end build for **KreatedByKeora**, a nail artistry studio based in
Kibler Park, Johannesburg South. Built to match the approved WEDE5020
Website Project Proposal (Part 1) and its low-fidelity wireframes.

## Structure
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

```
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
│  
└── README.md
```

## Design system

- **Colour:** blush pink (`#f1c4d6`) and rose-gold (`#c79a7b`) on a
 charcoal base (`#18131a`), per the proposal's Design & UX brief.
- **Type:** Fraunces (serif, headings) paired with Manrope (sans-serif,

## Structure

```
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

## Design system

- **Colour:** blush pink (`#f1c4d6`) and rose-gold (`#c79a7b`) on a
  charcoal base (`#18131a`), per the proposal's Design & UX brief.
- **Type:** Fraunces (serif, headings) paired with Manrope (sans-serif,
  body/UI).
- **Layout:** mobile-first, single column, with a sticky top header and
  a sticky bottom thumb-nav bar for one-handed browsing — the desktop
  breakpoint (≥860px) swaps in a conventional top nav.

DevTools screenshots




