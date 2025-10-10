import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  author: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ConversationFlow {
  id: string;
  triggers: string[];
  response: string;
  followUp?: string;
  category?: "service" | "support" | "general";
}

interface QuickPrompt {
  id: string;
  label: string;
  message: string;
}

const conversationFlows: ConversationFlow[] = [
  {
    id: "main-menu",
    triggers: ["start", "hello", "hi", "hey", "menu", "help", "begin"],
    response:
      "Hello! Welcome to Mayur Aircon – Commercial & Split AC Solutions. How can I help you today?",
    followUp: `Main menu options:
• HVAC Services
• Centralized AC
• Split (Home) AC
• AMC / Warranty Support
• Emergency Service
• Contact Us
• Special Offer`,
    category: "general",
  },
  {
    id: "hvac-services",
    triggers: ["hvac", "hvac services", "hvac solution"],
    response: `We provide complete HVAC Solutions:
• Installation
• AMC (Annual Maintenance Contracts)
• Warranty Support
• Repairs & Maintenance`,
    followUp:
      "Would you like to book an appointment, request a quotation, or choose Emergency Service?",
    category: "service",
  },
  {
    id: "centralized-ac",
    triggers: [
      "centralized",
      "vrf",
      "vrv",
      "ductable",
      "chiller",
      "industrial",
    ],
    response: `We specialise in Commercial & Industrial Centralized AC Systems:
• VRF / VRV Systems
• Ductable Units
• Chillers
• Energy-Saving Solutions`,
    followUp:
      "Would you like to book an appointment, request a quotation, or choose Emergency Service?",
    category: "service",
  },
  {
    id: "split-ac",
    triggers: ["split", "home ac", "residential", "bedroom", "living room"],
    response: `We provide complete Split AC Services:
• Installation
• Servicing & Repairs
• Gas Refilling
• AMC Packages
• Warranty Support`,
    followUp:
      "Would you like to book an appointment, check AMC plans, or choose Emergency Service?",
    category: "service",
  },
  {
    id: "book-appointment",
    triggers: [
      "book appointment",
      "appointment",
      "schedule",
      "book service",
      "book visit",
    ],
    response: `Great! Please share these details:
1. Full Name
2. Contact Number
3. Address
4. Service Type (Installation / AMC / Repair / Warranty / Gas Refilling)
5. Preferred Date & Time (10 AM – 7 PM)`,
    followUp:
      "Once we receive the details we will confirm your booking. Our team will contact you shortly.",
    category: "service",
  },
  {
    id: "amc-offer",
    triggers: [
      "12 month amc",
      "12-month amc",
      "amc special",
      "amc offer",
      "annual maintenance",
    ],
    response:
      "Special Offer: When you buy a 12-month AMC, you get 1 extra month FREE—13 months of total coverage!",
    followUp: "Shall I continue with the AMC booking flow for you?",
    category: "service",
  },
  {
    id: "emergency-service",
    triggers: ["emergency", "urgent", "breakdown now", "immediate", "24/7"],
    response:
      "Emergency Service is available 24/7. Please note: emergency charges are higher than normal services. Do you want to proceed?",
    followUp:
      "If yes, share your name, contact number, address, and the problem. Our technician will contact you within 2 hours.",
    category: "service",
  },
  {
    id: "amc-support-menu",
    triggers: [
      "amc support",
      "warranty support",
      "support menu",
      "service issue",
      "amc warranty",
    ],
    response: `Please select the type of support you need:
• Breakdown
• Service Issue
• Operational Problem (Remote Support)
• Other Issues`,
    followUp: "Let me know which option fits your situation.",
    category: "support",
  },
  {
    id: "breakdown-check",
    triggers: ["breakdown", "ac stopped", "not working", "service down"],
    response: "We’re here to help. Is your AC covered under AMC or Warranty?",
    followUp:
      "Reply with YES if it’s under AMC/Warranty, or NO if it is not, and I’ll guide you next.",
    category: "support",
  },
  {
    id: "breakdown-yes",
    triggers: [
      "yes under amc",
      "yes under warranty",
      "covered",
      "yes it is covered",
      "yes its covered",
    ],
    response: `Please share the following so we can assist quickly:
1. Full Name
2. Contact Number
3. Location
4. Type of AC (Centralized / Split / Other)
5. A brief description of the problem`,
    followUp:
      "Our technician team will attend to your issue as per AMC/Warranty terms.",
    category: "support",
  },
  {
    id: "breakdown-no",
    triggers: ["not covered", "no amc", "no warranty", "no its not covered"],
    response:
      "It looks like your system is not under AMC/Warranty. Don’t worry—you can still book a paid service.",
    followUp:
      "Let me redirect you to the service menu so you can choose HVAC, Centralized AC, Split AC, or Emergency Service.",
    category: "support",
  },
  {
    id: "operational-problem",
    triggers: [
      "operational problem",
      "remote support",
      "not cooling",
      "unusual noise",
      "remote not working",
    ],
    response:
      "Please describe your issue (for example: AC not cooling, unusual noise, remote not working).",
    followUp:
      "We’ll forward the details to our engineer, and you’ll receive a call within business hours (10 AM – 7 PM) for remote assistance.",
    category: "support",
  },
  {
    id: "requires-visit",
    triggers: ["requires visit", "need visit", "technician visit", "on-site"],
    response:
      "This problem requires an on-site visit. Our service team will be assigned to help you.",
    followUp:
      "Please share your name, contact number, address, and issue details so we can confirm the appointment.",
    category: "support",
  },
  {
    id: "after-service",
    triggers: ["follow up", "after service", "status", "issue resolved"],
    response: "Was your issue resolved successfully?",
    followUp:
      "If yes, I can help with anything else you need. If not, I’ll reopen the case and escalate it for faster resolution.",
    category: "support",
  },
  {
    id: "contact-us",
    triggers: ["contact", "reach", "phone", "email", "address"],
    response: `You can reach us at:
• Phone: +91 95587 19344
• Email: support@mayuraircon.com
• Office: Ahmedabad, Gujarat`,
    followUp:
      "Would you like me to connect you with a customer care executive (available 10 AM – 7 PM, Monday to Saturday)?",
    category: "general",
  },
  {
    id: "talk-to-executive",
    triggers: [
      "talk to executive",
      "customer care",
      "human agent",
      "speak to representative",
      "support hours",
    ],
    response:
      "I’ll connect you to a customer care executive. Support hours are 10 AM – 7 PM (Mon–Sat).",
    followUp:
      "If we’re outside support hours, please leave your contact details and a brief message so the team can reach you.",
    category: "general",
  },
  {
    id: "feedback",
    triggers: ["feedback", "rate", "rating", "review"],
    response:
      "Before we close, please rate your experience: Poor • Average • Good • Very Good • Excellent",
    followUp:
      "Thank you for your feedback! We’ll keep improving to serve you better.",
    category: "general",
  },
];

const quickPrompts: QuickPrompt[] = [
  {
    id: "prompt-start",
    label: "Show service menu",
    message: "Show me the service menu",
  },
  {
    id: "prompt-hvac",
    label: "Explore HVAC",
    message: "Tell me about your HVAC services",
  },
  {
    id: "prompt-central",
    label: "Centralized AC",
    message: "Do you handle centralized AC systems?",
  },
  {
    id: "prompt-split",
    label: "Split AC help",
    message: "I need support for a split AC",
  },
  {
    id: "prompt-emergency",
    label: "Emergency help",
    message: "I need emergency AC service",
  },
  {
    id: "prompt-book",
    label: "Book appointment",
    message: "I want to book an appointment",
  },
  {
    id: "prompt-amc",
    label: "AMC support",
    message: "I need AMC or warranty assistance",
  },
  {
    id: "prompt-contact",
    label: "Contact details",
    message: "How do I contact Mayur Aircon?",
  },
];

const contactFooters = [
  "Prefer to talk to us directly? Call +91 95587 19344 or WhatsApp the same number for quick support.",
  "Need a personal touch? Email support@mayuraircon.com and our desk will respond during business hours.",
  "Want a site visit? Use the Request a Quote button on our homepage or share your details here to schedule one.",
];

const serviceFlowIds = new Set([
  "hvac-services",
  "centralized-ac",
  "split-ac",
  "book-appointment",
  "amc-offer",
  "emergency-service",
]);

const generateMessageId = () => {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
};

const chooseRandom = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const formatFlowResponse = (flow: ConversationFlow) =>
  flow.followUp ? `${flow.response}\n\n${flow.followUp}` : flow.response;

const fallbackMenu = formatFlowResponse(conversationFlows[0]);

const fallbackResponse = `${fallbackMenu}\n\nYou can also type:\n• "Book appointment"\n• "AMC support"\n• "Emergency service"\n• "Contact details"`;

const createMessage = (
  author: ChatMessage["author"],
  content: string,
): ChatMessage => ({
  id: generateMessageId(),
  author,
  content,
  timestamp: new Date(),
});

export function SupportChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage("bot", formatFlowResponse(conversationFlows[0])),
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const [hasShownFirstServiceOffer, setHasShownFirstServiceOffer] =
    useState(false);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<number>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const isMobile = useIsMobile();

  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;

    if (!textarea || typeof window === "undefined") {
      return;
    }

    textarea.style.height = "auto";

    const computed = window.getComputedStyle(textarea);
    const rawLineHeight = parseFloat(computed.lineHeight);
    const fontSize = parseFloat(computed.fontSize || "16");
    const lineHeight = Number.isNaN(rawLineHeight)
      ? fontSize * 1.4
      : rawLineHeight;
    const baseHeight = lineHeight || 20;
    const maxHeight = baseHeight * 4;
    const scrollHeight = textarea.scrollHeight;
    const clampedHeight = Math.min(
      Math.max(scrollHeight, baseHeight),
      maxHeight,
    );

    textarea.style.height = `${clampedHeight}px`;
    textarea.style.overflowY = scrollHeight > maxHeight ? "auto" : "hidden";
  }, []);

  const respondToUser = useCallback(
    (userContent: string) => {
      setIsThinking(true);
      const normalized = userContent.toLowerCase();

      const matchedFlows = conversationFlows.filter((flow) =>
        flow.triggers.some((trigger) => normalized.includes(trigger)),
      );

      const messageSections: string[] = [];

      if (matchedFlows.length > 0) {
        matchedFlows.forEach((flow) => {
          messageSections.push(formatFlowResponse(flow));
        });

        const includesServiceFlow = matchedFlows.some((flow) =>
          serviceFlowIds.has(flow.id),
        );

        if (includesServiceFlow && !hasShownFirstServiceOffer) {
          messageSections.push(
            "Great news! Since this is your first booking with Mayur Aircon, you get 10% OFF on your first service bill.",
          );
          setHasShownFirstServiceOffer(true);
        }
      } else {
        messageSections.push(fallbackResponse);
      }

      messageSections.push(chooseRandom(contactFooters));

      const botMessage = createMessage("bot", messageSections.join("\n\n"));

      typingTimeoutRef.current = window.setTimeout(() => {
        setMessages((previous) => [...previous, botMessage]);
        setIsThinking(false);
      }, 650);
    },
    [hasShownFirstServiceOffer],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const trimmed = inputValue.trim();

      if (!trimmed) {
        return;
      }

      const userMessage = createMessage("user", trimmed);
      setMessages((previous) => [...previous, userMessage]);
      setInputValue("");
      respondToUser(trimmed);
      adjustTextareaHeight();
    },
    [adjustTextareaHeight, inputValue, respondToUser],
  );

  const handleQuickPrompt = useCallback(
    (prompt: string) => {
      const userMessage = createMessage("user", prompt);
      setMessages((previous) => [...previous, userMessage]);
      respondToUser(prompt);
    },
    [respondToUser],
  );

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  useEffect(() => {
    if (scrollAnchorRef.current) {
      scrollAnchorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isThinking, isOpen]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [adjustTextareaHeight, inputValue, isOpen]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          className={cn(
            "fixed z-50 flex items-center gap-2 rounded-full bg-accent font-semibold shadow-lg transition-opacity duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isMobile
              ? "bottom-4 left-4 right-4 justify-center px-4 py-3 text-sm"
              : "bottom-6 right-6 px-5 py-4 text-base",
            isOpen ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          <MessageCircle className="h-5 w-5" />
          Chat with Support
        </Button>
      </SheetTrigger>
      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={cn(
          "flex w-full flex-col gap-4",
          isMobile
            ? "h-[85vh] rounded-t-3xl border-t bg-background px-4 pb-6 pt-4"
            : "h-full sm:max-w-md",
        )}
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl font-bold text-primary">
            <Sparkles className="h-5 w-5 text-accent" />
            Customer Support
          </SheetTitle>
        </SheetHeader>

        <ScrollArea
          className={cn(
            "flex-1 border border-border bg-muted/10 p-4",
            isMobile ? "rounded-3xl" : "rounded-xl",
          )}
        >
          <div className="space-y-4">
            {messages.map((message) => {
              const isBot = message.author === "bot";
              const paragraphs = message.content.split("\n").filter(Boolean);

              return (
                <div
                  key={message.id}
                  className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      isBot ? "bg-white text-primary" : "bg-accent text-white"
                    }`}
                  >
                    {paragraphs.map((text, index) => (
                      <p
                        key={`${message.id}-${index}`}
                        className="whitespace-pre-line"
                      >
                        {text}
                      </p>
                    ))}
                    <span
                      className={`mt-2 block text-[10px] uppercase tracking-wide ${
                        isBot
                          ? "text-muted-foreground"
                          : "text-accent-foreground/80"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              );
            })}

            {isThinking && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-primary shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                  Typing...
                </div>
              </div>
            )}
            <div ref={scrollAnchorRef} />
          </div>
        </ScrollArea>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Quick help topics
          </p>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <Button
                key={prompt.id}
                variant="outline"
                className="border-accent/40 text-xs text-accent hover:bg-accent hover:text-white"
                onClick={() => handleQuickPrompt(prompt.message)}
                type="button"
                disabled={isThinking}
              >
                {prompt.label}
              </Button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex items-end gap-2">
            <Textarea
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                adjustTextareaHeight();
              }}
              placeholder="Type your question..."
              disabled={isThinking}
              aria-label="Message support"
              className="flex-1 resize-none rounded-2xl border border-border bg-white px-4 py-3 text-sm leading-relaxed shadow-sm focus-visible:ring-accent"
            />
            <Button
              type="submit"
              className="h-12 w-12 rounded-full bg-accent p-0 hover:bg-accent/90"
              disabled={isThinking}
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
