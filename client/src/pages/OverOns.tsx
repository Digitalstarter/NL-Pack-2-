import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, TrendingUp } from "lucide-react";
import facilityImage from "@assets/generated_images/Packaging_manufacturing_facility_0a44dbc3.png";
import warehouseImage from "@assets/generated_images/Industrial_warehouse_with_packaging_materials_f84777f2.png";

export default function OverOns() {
  const values = [
    {
      icon: Target,
      title: "Klantgericht",
      description: "Uw wensen en tevredenheid staan bij ons altijd centraal. Wij denken graag met u mee.",
    },
    {
      icon: Award,
      title: "Kwaliteit",
      description: "Hoogwaardige producten en betrouwbare service vormen de basis van ons bedrijf.",
    },
    {
      icon: Users,
      title: "Samenwerking",
      description: "Een langdurige partnerschap met onze klanten is waar wij naar streven.",
    },
    {
      icon: TrendingUp,
      title: "Innovatie",
      description: "Wij blijven ons ontwikkelen met de nieuwste technieken en oplossingen.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4" data-testid="breadcrumb-over-ons">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Over Ons</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              Over NL Pack
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Uw betrouwbare partner voor verpakkingsmaterialen
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-intro-title">
                Specialist in Verpakkingsoplossingen
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  NL Pack is een toonaangevende leverancier van verpakkingsmaterialen in Nederland. 
                  Met jarenlange ervaring in de verpakkingsindustrie bieden wij een breed assortiment 
                  aan hoogwaardige producten en diensten.
                </p>
                <p>
                  Ons bedrijf onderscheidt zich door een combinatie van snelle levering, ruime voorraad 
                  en persoonlijke service. Of u nu op zoek bent naar standaard verzenddozen of 
                  gespecialiseerde maatwerk oplossingen, wij denken graag met u mee.
                </p>
                <p>
                  Met een moderne faciliteit en ervaren medewerkers zijn wij in staat om aan alle 
                  verpakkingsbehoeften te voldoen. Van kleine ondernemers tot grote industriële bedrijven, 
                  iedereen is bij ons aan het juiste adres.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={facilityImage} 
                alt="NL Pack Faciliteit"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-values-title">
                Onze Kernwaarden
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Deze principes sturen ons dagelijks handelen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border hover-elevate" data-testid={`card-value-${index}`}>
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-capabilities-title">
                Onze Mogelijkheden
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Met een ruime voorraad en moderne productie faciliteiten kunnen wij snel schakelen 
                  en inspelen op uw behoeften. Onze opslagcapaciteit stelt ons in staat om altijd 
                  voldoende voorraad te hebben voor directe levering.
                </p>
                <p>
                  Daarnaast beschikken wij over geavanceerde drukapparatuur voor het bedrukken van 
                  verpakkingen in uw huisstijl. Van kleine oplages tot grote volumes, alles is mogelijk.
                </p>
                <p>
                  Ons ervaren team staat klaar om u te adviseren over de beste verpakkingsoplossing 
                  voor uw specifieke situatie. Samen maken wij het verschil.
                </p>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src={warehouseImage} 
                alt="NL Pack Magazijn"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-cta-title">
              Wilt u Meer Weten?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Neem gerust contact met ons op. Wij vertellen u graag meer over onze producten, 
              diensten en hoe wij u kunnen helpen.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" data-testid="button-cta-contact">
                Neem Contact Op
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
