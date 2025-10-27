import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const logoUrl = "https://digitalstarter.nl/wp-content/uploads/2025/10/loho.png";

export default function Footer() {
  return (
    <footer className="border-t bg-black mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <img 
              src={logoUrl} 
              alt="NL Pack Logo" 
              className="h-12 w-auto object-contain"
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-white/80 leading-relaxed">
              Uw betrouwbare partner voor hoogwaardige verpakkingsmaterialen. 
              Specialist in golfkarton, dozen en maatwerk oplossingen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Snelle Links</h3>
            <nav className="flex flex-col gap-2">
              <Link 
                href="/assortiment"
                className="text-sm text-white/70 hover:text-white transition-colors" 
                data-testid="link-footer-assortiment"
              >
                Assortiment
              </Link>
              <Link 
                href="/diensten"
                className="text-sm text-white/70 hover:text-white transition-colors" 
                data-testid="link-footer-diensten"
              >
                Diensten
              </Link>
              <Link 
                href="/over-ons"
                className="text-sm text-white/70 hover:text-white transition-colors" 
                data-testid="link-footer-over-ons"
              >
                Over Ons
              </Link>
              <Link 
                href="/contact"
                className="text-sm text-white/70 hover:text-white transition-colors" 
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:info@nlpack.nl" 
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@nlpack.nl
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70" data-testid="text-footer-phone">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +31 6 39 19 08 34
              </div>
              <div className="flex items-start gap-2 text-sm text-white/70" data-testid="text-footer-address">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Rotterdam, Nederland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70" data-testid="text-copyright">
              © 2025 NL Pack. Alle rechten voorbehouden. Website door{' '}
              <a 
                href="https://digitalstarter.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                digitalstarter.nl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
