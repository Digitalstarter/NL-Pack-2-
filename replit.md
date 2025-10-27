# NL Pack - Verpakkingsmaterialen Website

## Project Overview
Professionele B2B website voor NL Pack, een leverancier van verpakkingsmaterialen in Nederland. De website is gebouwd met een moderne tech stack en volgt een clean, professionele design die vertrouwen en expertise uitstraalt.

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS, Shadcn UI components
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query v5)
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon (@neondatabase/serverless)

## Project Structure

### Pages
1. **Home** (`/`) - Hero section, USP highlights, product categories preview, services preview, CTA section
2. **Assortiment** (`/assortiment`) - Product categories grid: Golfkarton Dozen, AGF Verpakkingen, Industriële Verpakkingen
3. **Diensten** (`/diensten`) - Three main services: Bedrukking, Voorraadbeheer, Opzetservice
4. **Over Ons** (`/over-ons`) - Company introduction, core values, capabilities showcase
5. **Contact** (`/contact`) - Contact form, contact information, FAQ section

### Key Components
- **Header**: Sticky navigation with logo, menu items, mobile responsive hamburger menu
- **Footer**: Three-column layout with company info, quick links, contact details
- **Cards**: Product categories, USP highlights, service showcases
- **Forms**: Contact form with validation

### Design System
- **Colors**: Black header and footer with professional blue accents
- **Typography**: Inter font family for all text
- **Spacing**: Consistent padding and margins (p-6, p-8, py-16, py-24)
- **Components**: Shadcn UI components with hover effects and transitions

## Features
- Fully responsive design (mobile, tablet, desktop)
- Professional photography and generated images for industrial packaging
- Contact form with email validation
- SEO-optimized meta tags and descriptions
- Accessible navigation and keyboard support
- Dutch language throughout

## Contact Information
- Email: info@nlpack.nl
- Phone: +31 6 39 19 08 34
- Address: Rotterdam, Nederland

## Development Status
- Phase 1: ✅ Schema & Frontend (Complete)
- Phase 2: ✅ Backend API implementation (Complete)
- Phase 3: ✅ Database Integration (Complete)
- Phase 4: ✅ Replit Environment Setup (Complete)

## Recent Changes (Oct 27, 2025)
### Initial Build
- Generated professional images for all sections (warehouse, products, services)
- Built complete frontend with all 5 pages
- Implemented Header and Footer components
- Created contact form schema with validation
- Configured routing with Wouter
- Added Dutch SEO meta tags

### Replit Setup & Customizations
- Set up PostgreSQL database with Drizzle ORM
- Migrated from in-memory storage to PostgreSQL
- Updated header background to black
- Updated footer background to black
- Removed "Offerte Aanvragen" button (informational website)
- Updated phone number to +31 6 39 19 08 34
- Updated address to Rotterdam, Nederland
- Removed opening hours section
- Added website credit link to digitalstarter.nl in footer
- Configured workflow for development server on port 5000
