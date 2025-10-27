import { Phone } from "lucide-react";

export default function FloatingPhone() {
  return (
    <a
      href="tel:+31639190834"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 group"
      aria-label="Bel ons"
    >
      <Phone className="w-6 h-6 text-white group-hover:animate-pulse" />
    </a>
  );
}
