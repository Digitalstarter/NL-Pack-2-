import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Package, Wrench, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/Industrial_warehouse_with_packaging_materials_f84777f2.png";
import golfkartonImage from "@assets/generated_images/Corrugated_cardboard_boxes_product_shot_79b35c24.png";
import agfImage from "@assets/generated_images/AGF_produce_packaging_boxes_d26a7d11.png";
import industrialImage from "@assets/generated_images/Industrial_shipping_packaging_solutions_b1f1633a.png";
import printingImage from "@assets/generated_images/Industrial_printing_press_machinery_c36eedab.png";
import inventoryImage from "@assets/generated_images/Warehouse_inventory_management_system_77424359.png";

export default function Home() {
  const uspItems = [
    {
      icon: Zap,
      title: "Snelle Levering",
      description: "Levering binnen 24-48 uur uit voorraad, zelfs in het weekend",
    },
    {
      icon: Package,
      title: "Ruime Voorraad",
      description: "Altijd voldoende verpakkingsmaterialen direct beschikbaar",
    },
    {
      icon: Wrench,
      title: "Maatwerk Oplossingen",
      description: "Uw specifieke wensen en producten staan centraal",
    },
    {
      icon: Truck,
      title: "Betrouwbare Service",
      description: "Eigen logistiek en professionele ondersteuning",
    },
  ];

  const productCategories = [
    {
      title: "Golfkarton Dozen",
      description: "Hoogwaardige golfkarton dozen in diverse formaten en kwaliteiten voor al uw verpakkingsbehoeften.",
      image: golfkartonImage,
    },
    {
      title: "AGF Verpakkingen",
      description: "Gespecialiseerde verpakkingen voor groente en fruit met optimale ventilatie en bescherming.",
      image: agfImage,
    },
    {
      title: "Industriële Verpakkingen",
      description: "Stevige verpakkingsoplossingen voor zware en industriële toepassingen.",
      image: industrialImage,
    },
  ];

  const services = [
    {
      title: "Bedrukking",
      description: "Professionele bedrukking van uw verpakkingen met uw logo en huisstijl. Wij bieden flexografische druk in hoogwaardige kwaliteit.",
      image: printingImage,
      benefits: [
        "Hoogwaardige flexografische druk",
        "Volledige kleurbedrukking mogelijk",
        "Kleine en grote oplages",
      ],
    },
    {
      title: "Voorraadbeheer",
      description: "Laat ons uw voorraadbeheer uit handen nemen. Wij zorgen dat u altijd de juiste verpakkingen op voorraad heeft.",
      image: inventoryImage,
      benefits: [
        "Just-in-time levering",
        "Voorraadmonitoring",
        "Kostenbesparend",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="NL Pack Warehouse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <div className="container relative z-10 mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
              Specialist in Verpakkingsmaterialen
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8" data-testid="text-hero-subtitle">
              NL Pack is uw betrouwbare partner voor hoogwaardige verpakkingsoplossingen. 
              Met een ruime voorraad en snelle levering bieden wij de perfecte verpakking 
              voor uw producten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="text-base backdrop-blur-sm bg-primary/90 hover:bg-primary border-primary-border"
              >
                <Link href="/assortiment" data-testid="button-hero-assortiment">
                  Bekijk Assortiment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="text-base backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Link href="/contact" data-testid="button-hero-contact">
                  Neem Contact Op
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-usp-title">
              Waarom Kiezen Voor NL Pack?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Wij onderscheiden ons door snelheid, kwaliteit en persoonlijke service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uspItems.map((item, index) => (
              <Card key={index} className="border hover:shadow-lg transition-all duration-300 hover-elevate" data-testid={`card-usp-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-products-title">
              Ons Assortiment
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ontdek onze uitgebreide collectie verpakkingsmaterialen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden border hover:shadow-xl transition-all duration-300 hover-elevate" data-testid={`card-product-${index}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Link href="/assortiment">
                    <Button variant="ghost" className="p-0 h-auto hover-elevate" data-testid={`button-product-details-${index}`}>
                      Bekijk producten <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/assortiment">
              <Button size="lg" variant="default" data-testid="button-view-all-products">
                Bekijk Volledig Assortiment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-services-title">
              Onze Diensten
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Meer dan alleen verpakkingen leveren
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                data-testid={`section-service-${index}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg w-full h-auto shadow-md"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/diensten">
                    <Button variant="default" data-testid={`button-service-details-${index}`}>
                      Lees Meer <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
