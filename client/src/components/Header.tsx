import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const logoUrl = "https://digitalstarter.nl/wp-content/uploads/2025/10/loho.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/assortiment", label: "Assortiment" },
    { path: "/diensten", label: "Diensten" },
    { path: "/over-ons", label: "Over Ons" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <img 
              src={logoUrl} 
              alt="NL Pack Logo" 
              className="h-16 w-auto object-contain"
              data-testid="img-logo"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={location === item.path ? "secondary" : "ghost"}
                className={location === item.path ? "hover-elevate text-black" : "hover-elevate text-white hover:text-white"}
              >
                <Link
                  href={item.path}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>


          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black">
          <nav className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={location === item.path ? "secondary" : "ghost"}
                className={location === item.path ? "w-full justify-start hover-elevate text-black" : "w-full justify-start hover-elevate text-white hover:text-white"}
              >
                <Link
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
