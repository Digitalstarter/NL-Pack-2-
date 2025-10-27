import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Printer, Warehouse, Cog } from "lucide-react";
import printingImage from "@assets/generated_images/Industrial_printing_press_machinery_c36eedab.png";
import inventoryImage from "@assets/generated_images/Warehouse_inventory_management_system_77424359.png";
import assemblyImage from "@assets/generated_images/Packaging_assembly_service_workers_bf7fa82f.png";

export default function Diensten() {
  const services = [
    {
      icon: Printer,
      title: "Bedrukking",
      image: printingImage,
      description:
        "Professionele bedrukking van uw verpakkingen zorgt voor herkenning en maakt uw merk zichtbaar. Wij bieden hoogwaardige flexografische druk in diverse kleuren en formaten.",
      benefits: [
        "Hoogwaardige flexografische druk",
        "Volledige kleurbedrukking mogelijk (tot 6 kleuren)",
        "Kleine en grote oplages",
        "Snelle doorlooptijd",
        "Ervaren drukteam",
        "Persoonlijk advies over drukwerk",
      ],
    },
    {
      icon: Warehouse,
      title: "Voorraadbeheer",
      image: inventoryImage,
      description:
        "Laat ons uw voorraadbeheer uit handen nemen. Wij zorgen dat u altijd de juiste verpakkingen op voorraad heeft, precies wanneer u ze nodig heeft.",
      benefits: [
        "Just-in-time levering",
        "Voorraadmonitoring en rapportage",
        "Kostenbesparend door efficiënt beheer",
        "Gegarandeerde beschikbaarheid",
        "Flexibele opslagoplossingen",
        "Online inzicht in voorraadniveaus",
      ],
    },
    {
      icon: Cog,
      title: "Opzetservice",
      image: assemblyImage,
      description:
        "Onze professionele opzetservice zorgt voor een snelle implementatie van uw verpakkingslijn. Wij installeren en configureren alle benodigde apparatuur.",
      benefits: [
        "Professionele installatie ter plaatse",
        "Training van uw medewerkers",
        "Optimale productie-efficiëntie",
        "Onderhoud en support",
        "Snelle probleemoplossing",
        "Minimale downtime",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <div
              className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
              data-testid="breadcrumb-diensten"
            >
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Diensten</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-page-title"
            >
              Onze Diensten
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Bij NL Pack gaan we verder dan alleen het leveren van
              verpakkingsmaterialen. Ontdek onze aanvullende diensten die uw
              verpakkingsproces optimaliseren.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} data-testid={`section-service-${index}`}>
                <Card className="overflow-hidden border">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <CardContent
                      className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <div className="inline-flex items-center gap-2 text-primary mb-4">
                        <service.icon className="h-5 w-5" />
                        <span className="text-sm font-medium">
                          Dienstverlening
                        </span>
                      </div>
                      <h2 className="text-3xl font-semibold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-8">
                        {service.benefits.map((benefit, bIndex) => (
                          <div
                            key={bIndex}
                            className="flex items-start gap-3"
                            data-testid={`text-benefit-${index}-${bIndex}`}
                          >
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-base">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <Link href="/contact">
                          <Button
                            variant="default"
                            data-testid={`button-service-contact-${index}`}
                          >
                            Vraag Meer Informatie
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              data-testid="text-custom-title"
            >
              Op Zoek Naar Maatwerk?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Wij leveren ook verpakkingen op maat, volledig afgestemd op uw
              specifieke producten en wensen. Neem contact met ons op voor de
              mogelijkheden.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="default"
                data-testid="button-custom-contact"
              >
                Bespreek Maatwerk Oplossing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
