# NL Pack Verpakkingsmaterialen - Design Guidelines

## Design Approach: Professional B2B System
**Rationale**: B2B packaging materials website requiring clear information hierarchy, trustworthy presentation, and efficient navigation. Emphasis on functionality and credibility over visual experimentation.

**Core Principle**: Clean, professional aesthetic that builds trust with industrial clients while maintaining modern web standards. Design should communicate reliability, efficiency, and expertise in packaging solutions.

---

## Typography System

**Font Families** (via Google Fonts):
- **Headings**: Inter (weights: 600, 700)
- **Body**: Inter (weights: 400, 500)
- **Accents**: Inter (weight: 500)

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl, font-bold, leading-tight
- Section Headers: text-3xl md:text-4xl, font-semibold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Card/Component Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text/Captions: text-sm, font-medium

---

## Layout System

**Spacing Framework**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8
- Section spacing: py-16 md:py-24
- Grid gaps: gap-6, gap-8
- Container max-width: max-w-7xl

**Grid Systems**:
- Product categories: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- USP highlights: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Services: grid-cols-1 lg:grid-cols-2

---

## Component Library

### Navigation
**Header**: 
- Fixed/sticky top navigation
- Logo left-aligned (height: h-12 to h-16)
- Horizontal menu: Assortiment | Diensten | Over Ons | Contact
- CTA button: "Offerte Aanvragen" (prominent, right-aligned)
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
**Large hero image** featuring industrial packaging materials/warehouse setting with professional photography overlay
- Height: min-h-[500px] md:min-h-[600px]
- Headline + supporting text + dual CTA buttons (primary: "Bekijk Assortiment", secondary: "Neem Contact Op")
- Buttons with backdrop-blur-sm bg-white/90 or bg-blue-600/90 treatment
- Text overlay with semi-transparent background for readability

### USP Cards Section
Four-column grid showcasing key differentiators:
- Icon (from Heroicons - use: lightning-bolt, cube, wrench, truck)
- Bold title (text-xl)
- Brief description (text-base)
- Optional "Lees meer" link
- Clean card design: bg-white, border, rounded-lg, p-6, hover:shadow-lg transition

### Product Category Cards
Three-column grid for main product categories:
- Category image (aspect-ratio-4/3)
- Category name (text-2xl, font-semibold)
- Brief description (2-3 lines)
- "Bekijk producten" link/button
- Cards: rounded-lg, overflow-hidden, border, hover:shadow-xl transition

### Service Highlights
Two-column layout alternating image/content:
- Service title (text-3xl)
- Detailed description (multiple paragraphs)
- Key benefits list (with checkmark icons from Heroicons)
- CTA button
- Professional service photography

### Contact Section
Two-column layout:
- Left: Contact form (Naam, Email, Bedrijf, Bericht fields)
- Right: Contact information block
  - Email: info@nlpack.nl
  - Phone number placeholder
  - Address placeholder
  - Opening hours
  - Map integration placeholder comment

### Footer
Three-column structure:
- Column 1: Company info + logo
- Column 2: Quick links (Assortiment, Diensten, Over Ons, Contact)
- Column 3: Contact details
- Bottom bar: Copyright, Privacy Policy, Terms

---

## Imagery Strategy

**Hero Section**: Large, high-quality photograph of industrial packaging warehouse or corrugated cardboard production. Professional, well-lit, showing scale of operation.

**Product Categories**: Clean product photography showing various packaging types (boxes, corrugated cardboard, AGF containers). Consistent white/neutral backgrounds.

**Services**: Lifestyle images showing packaging in use, warehouse operations, printing equipment, custom solutions being created.

**About Section**: Team or facility photos showing professionalism and scale of operations.

**Background Patterns**: Subtle geometric patterns or textures referencing corrugated cardboard texture (very subtle, not overpowering).

---

## Page Structure

**Homepage**:
1. Hero with main value proposition
2. USP highlights (4-column grid)
3. Product categories overview (3-column grid)
4. Services preview (2-column alternating)
5. Trust indicators (client logos, certifications)
6. CTA section with contact form preview

**Assortiment (Products)**:
1. Page header with breadcrumb
2. Product category grid (expandable cards)
3. Each category shows subcategories and key products
4. Filter sidebar for product specifications

**Diensten (Services)**:
1. Services overview hero
2. Detailed service sections (bedrukking, voorraadbeheer, opzetservice)
3. Process explanation graphics
4. CTA for consultation

**Over Ons (About)**:
1. Company introduction
2. Core values/mission
3. Facility/capabilities showcase
4. Team introduction (optional)

**Contact**:
1. Contact form (prominent)
2. Contact information block
3. Map placeholder
4. FAQ section (common packaging questions)

---

## Interactive Elements

**Buttons**:
- Primary: solid background, rounded-lg, px-8 py-4, font-semibold
- Secondary: outline style, transparent background
- Hover states: slight scale, shadow enhancement
- Icon integration where appropriate (arrow-right for CTAs)

**Cards**: 
- Subtle shadow at rest
- Enhanced shadow on hover
- Smooth transitions (transition-all duration-300)

**Forms**:
- Clear labels above inputs
- Rounded input fields (rounded-lg)
- Focus states with border highlight
- Validation messaging below fields

**Animations**: Minimal - only subtle hover effects and smooth transitions. No distracting scroll animations.

---

## Accessibility & Quality Standards

- Semantic HTML structure throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Form labels properly associated
- Sufficient contrast ratios for all text
- Responsive images with proper alt text
- Focus indicators visible and clear

**Responsive Breakpoints**:
- Mobile: base (< 640px)
- Tablet: md (768px)
- Desktop: lg (1024px)
- Large Desktop: xl (1280px)