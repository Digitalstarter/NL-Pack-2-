import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Bericht verzonden!",
        description: "Wij nemen zo spoedig mogelijk contact met u op.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4" data-testid="breadcrumb-contact">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              Neem Contact Op
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Heeft u vragen of wilt u een offerte aanvragen? Wij staan voor u klaar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6" data-testid="text-form-title">
                Stuur ons een Bericht
              </h2>
              <Card className="border">
                <CardContent className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Naam *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Uw volledige naam" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mailadres *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="uw.email@bedrijf.nl" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bedrijfsnaam</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Uw bedrijfsnaam (optioneel)" 
                                {...field} 
                                data-testid="input-company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bericht *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Vertel ons waarmee wij u kunnen helpen..." 
                                className="min-h-[150px] resize-none"
                                {...field} 
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {mutation.isError && (
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive" data-testid="text-error">
                          Er is een fout opgetreden. Probeer het later opnieuw of neem telefonisch contact op.
                        </div>
                      )}

                      {mutation.isSuccess && (
                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary" data-testid="text-success">
                          Uw bericht is succesvol verzonden! Wij nemen zo spoedig mogelijk contact met u op.
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? "Verzenden..." : "Verstuur Bericht"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6" data-testid="text-info-title">
                Contactinformatie
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <a 
                          href="mailto:info@nlpack.nl" 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          data-testid="link-email"
                        >
                          info@nlpack.nl
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefoon</h3>
                        <a 
                          href="tel:+31639190834" 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          data-testid="link-phone"
                        >
                          +31 6 39 19 08 34
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adres</h3>
                        <p className="text-muted-foreground" data-testid="text-address">
                          Rotterdam, Nederland
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Locatie</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Onze vestiging is gemakkelijk bereikbaar en beschikt over ruime parkeergelegenheid.
                  </p>
                  {/* Map integration would go here */}
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      Kaart integratie
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-faq-title">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Wat is de minimale bestelhoeveelheid?</h3>
                <p className="text-muted-foreground">
                  Wij hebben geen minimale bestelhoeveelheid. Of u nu 10 dozen of 10.000 dozen nodig heeft, 
                  wij leveren graag.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Hoe snel kan ik mijn bestelling ontvangen?</h3>
                <p className="text-muted-foreground">
                  Artikelen die op voorraad zijn kunnen binnen 24-48 uur geleverd worden. 
                  Voor maatwerk oplossingen hangt de levertijd af van de specificaties.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Leveren jullie ook maatwerk verpakkingen?</h3>
                <p className="text-muted-foreground">
                  Ja, wij zijn gespecialiseerd in maatwerk oplossingen. Neem contact met ons op 
                  om de mogelijkheden te bespreken.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Kunnen verpakkingen bedrukt worden?</h3>
                <p className="text-muted-foreground">
                  Absoluut! Wij bieden professionele bedrukking in meerdere kleuren. 
                  Bekijk onze diensten pagina voor meer informatie.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
