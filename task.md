# FOTO FILA task
- Approved reference: white/editorial typography, dark panels, staggered imagery.
- Polish website, desktop + mobile. Local Zielona Góra focus.
- Plan approved with responsive desktop addition. Priority document/family enquiries.
- Budget proposal 1500 PLN/month: Google 900, Meta 600. Not authorized to spend.
- No connected ads accounts. Deliver campaign planning draft, not platform campaign claim.
- Facebook original contact: 604081621, fotofila@gazeta.pl; successor/current page fotofilastudio@wp.pl. Use current email.
- Build static prerender and local SEO; final domain unknown, defer sitemap/canonical until configured.
- Gallery source thumbnails low-resolution; upscale selected only. Publication rights must be confirmed.
- Next: implement, build/lint, test desktop/mobile/gallery/enquiry/service routes, deliver website + campaign brief.

## Verified completion
- Build passed; lint passed (0 errors/warnings).
- Desktop/mobile 320/390/768/1024/1440 layouts: no horizontal overflow.
- All 8 visible homepage images loaded; gallery filters/modal arrows/escape, services, FAQ, mobile menu, mail composer validated.
- Production serves unique prerendered HTML for all marketing routes (200); unknown route 404/noindex; trailing slash redirects 308.
- No JS errors in production browser test.
- Campaign brief created at /home/user/foto-fila-marketing.report/content.md. No ads accounts connected; no campaign launch.
- Final domain not configured; sitemap/canonical intentionally deferred.
- Dev server running in tmux foto-fila on assigned 4200.

## Current revision
User provided original portrait-format couple photo and screenshot identifying cowboy image to remove. Replace all couple placements with original PNG, uncropped and unretouched. Replace cowboy gallery entry with original studio scene, add Studio filter, calculate counts dynamically. Build/lint + desktop/mobile/gallery check before delivery.

## Revision verified
Original couple PNG copied byte-for-byte; hero/gallery/wedding route use it without crop, tint or AI changes. Cowboy photo replaced with unchanged studio scene. Category counts and lightbox tested. Runable watermark badge removed at user request; AgentFeedback and analytics kept. Build/lint passed; no JS errors; no overflow at 320/390/768/1440.
