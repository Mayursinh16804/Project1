import { RequestHandler } from "express";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[\d\s\-\+()]+$/, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const data = ContactFormSchema.parse(req.body);

    // Validate HTTPS in production
    if (
      process.env.NODE_ENV === "production" &&
      req.headers["x-forwarded-proto"] !== "https"
    ) {
      return res.status(400).json({
        error: "SSL/HTTPS required",
      });
    }

    // In a real application, you would:
    // 1. Store the form data in a database
    // 2. Send a confirmation email
    // 3. Log the submission
    // 4. Implement spam protection (rate limiting, CAPTCHA)

    console.log("Contact form submission:", {
      ...data,
      timestamp: new Date().toISOString(),
      ip: req.ip,
    });

    res.json({
      success: true,
      message:
        "Thank you for your message. We will get back to you within 24 hours.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Validation failed",
        details: error.errors,
      });
    }

    console.error("Contact form error:", error);
    res.status(500).json({
      error: "Failed to process contact form",
    });
  }
};

export const healthCheck: RequestHandler = (_req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
