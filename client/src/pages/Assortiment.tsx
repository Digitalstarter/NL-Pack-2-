import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package } from "lucide-react";
import golfkartonImage from "@assets/generated_images/Corrugated_cardboard_boxes_product_shot_79b35c24.png";
import agfImage from "@assets/generated_images/AGF_produce_packaging_boxes_d26a7d11.png";
import industrialImage from "@assets/generated_images/Industrial_shipping_packaging_solutions_b1f1633a.png";

export default function Assortiment() {
  const categories = [
    {
      title: "Golfkarton Dozen",
      image: golfkartonImage,
      description: "Hoogwaardige golfkarton dozen in diverse formaten en kwaliteiten.",
      products: [
        "Verzenddozen in standaard formaten",
        "Amerikaanse vouwdozen",
        "Sluitdozen met automatische bodem",
        "Kartonnen trays en displays",
      ],
    },
    {
      title: "AGF Verpakkingen",
      image: agfImage,
      description: "Gespecialiseerde verpakkingen voor groente en fruit.",
      products: [
        "Groente- en fruitkratten",
        "AGF dozen met ventilatie",
        "Presentatieverpakkingen",
        "Beschermende inlays",
      ],
    },
    {
      title: "Industriële Verpakkingen",
      image: industrialImage,
      description: "Stevige verpakkingsoplossingen voor industriële toepassingen.",
      products: [
        "Zware kwaliteit dozen",
        "Palletverpakkingen",
        "Exportverpakkingen",
        "Maatwerk industriële oplossingen",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4" data-testid="breadcrumb-assortiment">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Assortiment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              Ons Assortiment
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ontdek onze uitgebreide collectie verpakkingsmaterialen. Van standaard verzenddozen 
              tot gespecialiseerde AGF verpakkingen en industriële oplossingen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden border" data-testid={`card-category-${index}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="inline-flex items-center gap-2 text-primary mb-4">
                      <Package className="h-5 w-5" />
                      <span className="text-sm font-medium">Productcategorie</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">{category.title}</h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {category.products.map((product, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3" data-testid={`text-product-${index}-${pIndex}`}>
                          <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-base">{product}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Link href="/contact">
                        <Button variant="default" data-testid={`button-category-contact-${index}`}>
                          Vraag Informatie Aan
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-custom-title">
              Op Zoek Naar Maatwerk?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Wij leveren ook verpakkingen op maat, volledig afgestemd op uw specifieke 
              producten en wensen. Neem contact met ons op voor de mogelijkheden.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" data-testid="button-custom-contact">
                Bespreek Maatwerk Oplossing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
