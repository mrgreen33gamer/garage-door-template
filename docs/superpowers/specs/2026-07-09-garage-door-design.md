# Garage Door Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `garage-door-template`, sibling-cloned patterns from `electrical-services-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | Summit Door Pros |
| **Tagline** | Garage Doors Installed, Repaired & Maintained |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2011 |
| **Owner** | Marcus Hale |
| **License** | IDA-Trained Technicians · Bonded & Insured |
| **Guarantee** | Lifetime Spring Warranty + 2-Year Workmanship |
| **Social proof** | 4.9★, 800+ reviews, 5,000+ doors serviced |
| **Accent hex** | `#1d4ed8` (deep blue) — `$orange` token |
| **Phone** | (254) 720-1100 / `tel:+12547201100` |
| **Email** | hello@summitdoorpros.com |
| **Domain** | summitdoorpros.com |
| **Address** | 1401 Franklin Ave, Waco, TX 76701 |

## Services (6)

| Slug | Title |
|------|--------|
| `garage-door-repair` | Garage Door Repair |
| `spring-cable-repair` | Spring & Cable Repair |
| `new-door-installation` | New Door Installation |
| `opener-installation` | Opener Installation |
| `door-maintenance` | Door Maintenance Plans |
| `commercial-doors` | Commercial Doors |

## Industries (3)

| Slug | Title |
|------|--------|
| `property-management` | Property Management |
| `homebuilders` | Homebuilders & Remodelers |
| `commercial-facilities` | Commercial Facilities |

## Blogs (3)

1. `garage-door-spring-break-safety-waco`
2. `how-to-choose-garage-door-opener`
3. `signs-garage-door-needs-replacement`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #1d4ed8`, `$lightorange: #3b82f6`, `$darkorange: #1e3a8a`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#1d4ed8`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: Summit Door Pros throughout
