https://github.com/iselia0/twoticketsplease/new/main?filename=README.md

Two Tickets, Please!

A lightweight, static web application for browsing films and booking movie tickets in pairs.

License: MIT

Overview

Two Tickets, Please! is a front-end movie-ticketing site built with plain HTML, CSS, and JavaScript. It lets users browse a catalog of films, filter by genre, and complete a two-ticket booking flow through a simple modal-based UI. Users without a companion can opt into a matching feature to be paired with another user looking for the same thing.

Features
Feature	Description
Film catalog	Browse films currently showing and upcoming releases
Genre filtering	Filter the catalog by genre: Animation, Romance, Sci-Fi, Crime, Thriller, Mystery
Booking flow	Select a film and reserve two tickets via a guided modal
Solo matching	Opt-in feature to pair unaccompanied users with a compatible match
User profile	View and manage profile information
Checkout	Complete payment for a booking through a dedicated modal
Tech Stack
HTML5 — page structure (index.html)
CSS3 — layout and styling (website.css)
JavaScript (vanilla) — application logic (website.js)
Google Fonts — Caveat, Kalam, Patrick Hand, Reenie Beanie

No external frameworks, package managers, or build tooling are required — the project runs as a fully static site.

Getting Started
Prerequisites
A modern web browser
(Optional) Python 3 or Node.js, if you'd like to serve the site over a local HTTP server rather than opening the file directly
Installation
Clone the repository:
bash
   git clone https://github.com/iselia0/twoticketsplease.git
   cd twoticketsplease
Run the site locally. Either open index.html directly in a browser, or serve it over HTTP:
bash
   # Python
   python3 -m http.server 8000

   # Node.js
   npx serve .
Navigate to http://localhost:8000 in your browser.
Project Structure
twoticketsplease/
├── index.html      # Application markup and entry point
├── website.css     # Styling and theming
├── website.js      # Application logic (catalog, filters, modals, matching)
└── LICENSE         # MIT License
Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page or open a pull request.

