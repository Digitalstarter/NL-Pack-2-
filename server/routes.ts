import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Validatie mislukt", 
          details: validationError.message 
        });
      }

      const submission = await storage.createContactSubmission(validationResult.data);
      
      // Email verzending (stub voor MVP)
      // In productie zou hier een email service zoals SendGrid, Mailgun of nodemailer worden geïntegreerd
      // Voorbeeld implementatie zou zijn:
      // await emailService.send({
      //   to: "info@nlpack.nl",
      //   subject: `Nieuw contactformulier van ${submission.name}`,
      //   body: `Naam: ${submission.name}\nEmail: ${submission.email}\nBedrijf: ${submission.company || 'Niet opgegeven'}\n\nBericht:\n${submission.message}`
      // });
      
      console.log("Contact formulier ontvangen:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        company: submission.company,
        message: submission.message.substring(0, 50) + "...",
      });

      return res.status(201).json({ 
        success: true, 
        message: "Uw bericht is succesvol verzonden",
        id: submission.id 
      });
    } catch (error) {
      console.error("Fout bij verwerken contactformulier:", error);
      return res.status(500).json({ 
        error: "Er is een fout opgetreden bij het verzenden van uw bericht" 
      });
    }
  });

  // Optional: Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Fout bij ophalen contactformulieren:", error);
      return res.status(500).json({ 
        error: "Er is een fout opgetreden" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
