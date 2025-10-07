import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, Loader2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatMessage {
  id: string;
  author: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ResponseTemplate {
  title: string;
  body: string;
  extra?: string;
}

interface KnowledgeEntry extends ResponseTemplate {
  id: string;
  keywords: string[];
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "installation",
    keywords: [
      "install",
      "installation",
      "setup",
      "new ac",
      "split",
      "duct",
      "hvac",
      "cassette",
      "vrf",
    ],
    title: "Tailored installation planning",
    body: "Our engineers survey your site to size the load, map ducting, and finalise mounting points. We install split, ductable, VRF, and precision cooling systems for homes, offices, malls, hospitals, schools, and industrial floors across Gujarat.",
    extra:
      "Once approved we coordinate delivery, certified installation, live testing, and a spotless handover so your space is cooling the same day.",
  },
  {
    id: "pricing",
    keywords: ["price", "cost", "quote", "charges", "budget", "estimate"],
    title: "Transparent pricing & proposals",
    body: "Costs depend on capacity, ventilation needs, and whether you choose installation, AMC, or retrofit services. Share room sizes or project drawings and we prepare a detailed quotation within 24 hours, including equipment, labour, and warranty coverage.",
    extra:
      "Use the Request a Quote button on the homepage or drop a message here with your requirement to start the pricing process.",
  },
  {
    id: "maintenance",
    keywords: ["amc", "maintenance", "service", "repair", "clean", "filter", "tune"],
    title: "Preventive maintenance & AMC",
    body: "Choose quarterly or customised AMC plans that cover coil cleaning, refrigerant top-ups, electrical checks, and performance audits. Preventive visits keep energy bills low and extend equipment life.",
    extra:
      "If you are facing an issue right now, describe the symptom and we'll assign the nearest technician with priority scheduling.",
  },
  {
    id: "products",
    keywords: ["product", "model", "brand", "catalog", "equipment", "data center", "precision"],
    title: "Precision cooling portfolio",
    body: "We partner with Vertiv, Daikin, Voltas, LG, Blue Star, and more. For data centres we recommend Vertiv Liebert SRC, PCW, XDU, and EFC solutions that keep mission-critical rooms stable and energy-efficient.",
    extra:
      "Tell us your rack load or server hall size and we will shortlist models, share datasheets, and organise demonstrations.",
  },
  {
    id: "emergency",
    keywords: ["emergency", "urgent", "24/7", "breakdown", "immediate", "faster"],
    title: "Rapid-response emergency desk",
    body: "Our service desk is available day and night. On-call technicians cover Ahmedabad, Gandhinagar, and nearby industrial parks with stocked spares to get critical systems running.",
    extra:
      "Call +91 95587 19344 for urgent help or WhatsApp the same number with photos/videos so we can dispatch the right specialist immediately.",
  },
  {
    id: "energy",
    keywords: ["energy", "efficient", "savings", "green", "inverter", "power"],
    title: "Energy-efficient recommendations",
    body: "We prioritise inverter and VRF systems, programmable thermostats, and proper insulation to reduce power consumption. Our AMC checklist covers coil cleaning and refrigerant optimisation to keep units operating at peak efficiency.",
    extra:
      "Share your monthly usage or existing tonnage distribution and we will suggest upgrades that can reduce bills by up to 25%.",
  },
  {
    id: "commercial",
    keywords: ["commercial", "office", "mall", "corporate", "factory", "industrial", "hospital"],
    title: "Commercial & industrial expertise",
    body: "With 5000+ installations, we manage turnkey HVAC for corporate offices, retail, clean rooms, hospitals, and manufacturing floors. Our team handles duct design, BMS integration, and compliance documentation.",
    extra:
      "We also retrofit legacy systems with modern, energy-efficient units to minimise downtime during upgrades.",
  },
  {
    id: "residential",
    keywords: ["home", "apartment", "villa", "bedroom", "living"],
    title: "Comfort-focused home solutions",
    body: "From single bedrooms to entire villas, we balance aesthetics with airflow using concealed piping, cassette units, and designer grills. We advise on silent operation and smart controls for effortless comfort.",
    extra:
      "Let us know the number of rooms and sun exposure so we can suggest the ideal tonnage mix and indoor unit styles.",
  },
  {
    id: "experience",
    keywords: ["experience", "years", "clients", "projects", "trust"],
    title: "Proven track record",
    body: "MAYUR AIRCON brings 2+ years of focused expertise with 5000+ successful projects. Our clientele spans residences, corporates, and data centres that rely on our 24/7 support.",
    extra:
      "Customer satisfaction is 100%, backed by repeat AMC renewals and long-term service relationships.",
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "email", "reach", "call", "whatsapp"],
    title: "Ways to reach us",
    body: "You can call +91 95587 19344, email mayuraircon1684@gmail.com, or use the Request a Quote form on the homepage. We're also active on WhatsApp, Facebook, and Instagram for quick updates.",
    extra:
      "Office support hours are Monday to Saturday, 9:00 AM – 7:00 PM, with emergency response available 24/7.",
  },
];

const quickPrompts = [
  {
    id: "quick-home",
    label: "Plan cooling for my home",
    message: "Can you help me choose the right AC combination for my home?",
  },
  {
    id: "quick-office",
    label: "Office HVAC guidance",
    message: "I need HVAC recommendations for a new corporate office floor plan.",
  },
  {
    id: "quick-maintenance",
    label: "Book AMC visit",
    message: "How do I schedule preventive maintenance for our existing AC units?",
  },
  {
    id: "quick-energy",
    label: "Cut energy usage",
    message: "What steps can reduce power consumption without losing cooling?",
  },
  {
    id: "quick-emergency",
    label: "Emergency breakdown",
    message: "My cooling system just failed. What should I do immediately?",
  },
];

const generateMessageId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
};

const chooseRandom = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

const fallbackResponses: ResponseTemplate[] = [
  {
    title: "Complete AC solutions under one roof",
    body: "We deliver end-to-end cooling support — surveys, design, installation, AMC, and emergency repair — for residential and commercial spaces across Ahmedabad and Gujarat.",
    extra:
      "Share your space type, tonnage requirement, or any challenge you're facing and I'll loop in the right specialist from our team.",
  },
  {
    title: "From comfort cooling to data centres",
    body: "Whether it's a living room, an open-plan office, or a precision-cooled server hall, we deploy the right combination of split units, VRF technology, and Vertiv Liebert systems to keep temperatures stable.",
    extra:
      "Let me know the environment you're cooling and I can suggest the next steps or send product comparisons.",
  },
  {
    title: "Here to make cooling effortless",
    body: "Our process covers consultation, customised proposals, professional installation, and lifelong support. Clients appreciate our punctual service window and transparent communication.",
    extra:
      "Ask anything — sizing, maintenance schedules, or upgrade ideas — and I'll guide you to the best answer.",
  },
];

const fallbackSpecialCases: Array<{
  predicate: (text: string) => boolean;
  template: ResponseTemplate;
}> = [
  {
    predicate: (text) => /(hello|hi|hey|namaste)/.test(text),
    template: {
      title: "Welcome to MAYUR AIRCON support",
      body: "Great to hear from you! I'm here to answer cooling questions, arrange technician visits, or prepare quotes tailored to your project.",
      extra:
        "Pick one of the quick help topics or type your question and I'll respond with the best guidance from our specialists.",
    },
  },
  {
    predicate: (text) => /(thank|thanks|thank you|great)/.test(text),
    template: {
      title: "Happy to help",
      body: "We're glad the information helped. If you need further assistance with installation, AMC scheduling, or emergency support, we're only a message away.",
      extra:
        "Let me know if you'd like me to connect you directly with our technical or sales team for the next steps.",
    },
  },
];

const contactFooters = [
  "Prefer a human conversation? Call +91 95587 19344 or email mayuraircon1684@gmail.com for direct assistance.",
  "Need a quicker response? Send your requirement on WhatsApp at +91 95587 19344 and our on-duty engineer will reply.",
  "You can also book a site visit through the Request a Quote button on our homepage or by emailing mayuraircon1684@gmail.com.",
];

const createMessage = (author: ChatMessage["author"], content: string): ChatMessage => ({
  id: generateMessageId(),
  author,
  content,
  timestamp: new Date(),
});

export function SupportChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage(
      "bot",
      "Hi! I'm the MAYUR AIRCON support assistant. Ask me about installations, maintenance plans, or product recommendations."
    ),
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<number>();

  const formatTemplate = useCallback((template: ResponseTemplate) => {
    const sections = [template.title, template.body];

    if (template.extra) {
      sections.push(template.extra);
    }

    return sections.join("\n\n");
  }, []);

  const buildKnowledgeResponse = useCallback(
    (message: string): string => {
      const normalized = message.toLowerCase();
      const matchedEntries = knowledgeBase.filter((entry) =>
        entry.keywords.some((keyword) => normalized.includes(keyword))
      );

      if (matchedEntries.length > 0) {
        return matchedEntries.map((entry) => formatTemplate(entry)).join("\n\n");
      }

      const specialFallback = fallbackSpecialCases.find((item) => item.predicate(normalized));

      if (specialFallback) {
        return formatTemplate(specialFallback.template);
      }

      return formatTemplate(chooseRandom(fallbackResponses));
    },
    [formatTemplate],
  );

  const respondToUser = useCallback(
    (userContent: string) => {
      setIsThinking(true);

      const messageBody = buildKnowledgeResponse(userContent);
      const footer = chooseRandom(contactFooters);

      const botMessage = createMessage(
        "bot",
        `${messageBody}\n\n${footer}`,
      );

      typingTimeoutRef.current = window.setTimeout(() => {
        setMessages((previous) => [...previous, botMessage]);
        setIsThinking(false);
      }, 650);
    },
    [buildKnowledgeResponse],
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
    },
    [inputValue, respondToUser],
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
    return () => {
      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const assistantSummary = useMemo(
    () =>
      "End-to-end AC design, installation, AMC, and emergency support across Gujarat",
    [],
  );

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-4 text-base font-semibold shadow-lg hover:bg-accent/90">
          <MessageCircle className="h-5 w-5" />
          Chat with Support
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex h-full w-full flex-col gap-4 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl font-bold text-primary">
            <Sparkles className="h-5 w-5 text-accent" />
            Customer Support
          </SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            Ask about quotations, installations, maintenance schedules, or product recommendations.
          </SheetDescription>
        </SheetHeader>

        <div className="flex items-center justify-between rounded-xl border border-accent/30 bg-accent/5 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-primary">We're online</p>
            <p className="text-xs text-muted-foreground">Typical response time: under 5 minutes</p>
          </div>
          <Badge variant="secondary" className="bg-accent/10 text-accent">
            Live
          </Badge>
        </div>

        <ScrollArea className="flex-1 rounded-xl border border-border bg-muted/10 p-4">
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
                      isBot
                        ? "bg-white text-primary"
                        : "bg-accent text-white"
                    }`}
                  >
                    {paragraphs.map((text, index) => (
                      <p key={`${message.id}-${index}`} className="whitespace-pre-line">
                        {text}
                      </p>
                    ))}
                    <span className={`mt-2 block text-[10px] uppercase tracking-wide ${
                      isBot ? "text-muted-foreground" : "text-accent-foreground/80"
                    }`}>
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
          <Input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Type your question..."
            disabled={isThinking}
            aria-label="Message support"
          />
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90"
            disabled={isThinking}
          >
            <Send className="mr-2 h-4 w-4" />
            Send message
          </Button>
        </form>

        <div className="rounded-xl border border-border bg-muted/20 px-4 py-3 text-xs text-muted-foreground">
          <p>{assistantSummary}</p>
          <p className="mt-1 text-muted-foreground/80">
            Visit our contact section for forms, or use WhatsApp and phone support from the footer links.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
