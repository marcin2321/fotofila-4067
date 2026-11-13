# FOTO FILA — Design
Polish, responsive desktop and mobile photography studio website inspired by the supplied Nestora reference, never copying its content.

## Visual system
Warm white #FAFAF7; ink #151614; muted olive #777B6E; vermilion #F45332. Manrope display with tight tracking and oversized wordmark; Poppins body. Self-host fonts. 32px desktop gutters, 20px mobile. 96–140px section spacing. Cinematic real-photo hero, giant brand line, dark studio panel, staggered portfolio, dark service accordion, clean FAQ, oversized contact typography. Circular orange arrows; restrained 8px radii. Reduced-motion and keyboard focus support.

## Screens and flows
Home: hero, studio, filterable gallery/lightbox, services accordion, FAQ, email composer, contact. Service routes: document photography, family sessions, wedding photography. Privacy page. All content in Polish. No fake contact success; form prepares email in the visitor's own mail app. No booking, auth or custom API/database needed. Web package only.

## SEO
Static prerender all marketing routes after Vite build; unique metadata, descriptive alt text, LocalBusiness JSON-LD. Final domain required before generating canonical and sitemap. Keep managed analytics. No Google/Meta trackers until account setup and valid consent implementation.

## Content integrity
Address/phone verified against supplied Facebook; current successor page confirms document/family services and email fotofilastudio@wp.pl. Founded in 1991 per original page. No invented price, review or opening-hour claims. Studio photos from visible Facebook thumbnails, upscaled where needed; publication permissions require owner confirmation before launch.

## Photo correction
Use the user-supplied 849×1273 PNG for all couple placements, with no AI upscaling or retouching. Preserve original color and full framing in hero/gallery/service pages. Replace the AI-upscaled cowboy image with the unchanged 960×640 Christmas studio cover photograph; gallery category Studio. Do not use screenshot attachment as a photo: it identifies the image to remove.
