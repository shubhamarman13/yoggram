# Yog Gram — Website

Modern, responsive website for **Yog Naturopathy Panchkarma Treatment & Research Centre (Yog Gram), Haridwar**.

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| About (story, facilities, daily routine, gallery) | `about.html` |
| Therapies (filterable therapies, conditions, Prakriti Analyzer quiz) | `therapies.html` |
| Stay & Pricing (cottage tariffs, cost estimator, policies) | `stay.html` |
| Book & Contact (booking enquiry form, contacts, map) | `contact.html` |

## Features
- **Yog Mitra** — an on-page AI wellness assistant (every page). It answers questions about therapies, prices, rooms, booking, timings, location and health conditions, and calculates stay costs ("cost for 10 days in Tapasvi"). It runs entirely in the browser, so it needs no server or API key.
- **Booking enquiry form** with validation, live cost estimate and one-tap sending to the centre via WhatsApp or email.
- **Prakriti Analyzer**: a 6-question Ayurvedic dosha quiz.
- Smart cost estimator, gallery lightbox, scroll animations, mobile-first responsive design.

## Editing content
- Phone, emails, addresses: `SITE` object at the top of `assets/js/main.js`.
- Cottage tariffs: `assets/js/data.js` (updates the pricing cards, calculator, form and chatbot together).
- Chatbot answers: `INTENTS` and `DISEASES` in `assets/js/bot.js`.

## Hosting
Static site on GitHub Pages. No build step is needed. Push to `main` and Pages serves the repository root.
