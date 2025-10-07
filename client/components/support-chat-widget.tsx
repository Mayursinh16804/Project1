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

interface KnowledgeEntry {
  id: string;
  keywords: string[];
  response: string;
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
    ],
    response:
      "We provide complete AC installation for homes, offices, industries, malls, hospitals, and schools. A site visit lets our technicians check capacity, placement, and safety. Once scheduled, our certified team installs, tests, and cleans up the space before handover.",
  },
  {
    id: "pricing",
    keywords: ["price", "cost", "quote", "charges", "budget"],
    response:
      "Pricing depends on the type of AC and site conditions. Share the room size or cooling requirement and we will prepare a tailored quote within 24 hours. We also offer free consultations and transparent breakdowns of equipment and labour costs.",
  },
  {
    id: "maintenance",
    keywords: ["amc", "maintenance", "service", "repair", "clean", "filter"],
    response:
      "Our annual maintenance contracts include preventive check-ups, deep cleaning, refrigerant level checks, and emergency visits. If you are facing an issue right now, describe the symptoms and we will arrange a priority technician visit.",
  },
  {
    id: "products",
    keywords: ["product", "model", "brand", "catalog", "equipment", "data center"],
    response:
      "We work with leading brands such as Vertiv, Daikin, Voltas, LG, and Blue Star. For precision cooling and data center applications we recommend Vertiv Liebert solutions including SRC, PCW, XDU, and EFC ranges. I can help you compare specifications or schedule a demo.",
  },
  {
    id: "emergency",
    keywords: ["emergency", "urgent", "24/7", "breakdown", "immediate"],
    response:
      "Our support desk is available 24/7 for urgent breakdowns. Call +91 95587 19344 and we will dispatch the on-call technician. For non-critical issues you can also email mayuraircon1684@gmail.com and we will respond promptly.",
  },
];

const quickPrompts = [
  {
    id: "quick-install",
    label: "Need AC installation",
    message: "I need help planning a new AC installation",
  },
  {
    id: "quick-quote",
    label: "Request pricing",
    message: "Can I get a quote for maintenance and service?",
  },
  {
    id: "quick-emergency",
    label: "Emergency support",
    message: "What should I do for an emergency AC breakdown?",
  },
  {
    id: "quick-products",
    label: "Product options",
    message: "Which precision cooling products do you recommend?",
  },
];

const createMessage = (author: ChatMessage["author"], content: string): ChatMessage => ({
  id: crypto.randomUUID(),
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

  const reachableResponse =
    "For immediate assistance call +91 95587 19344 or email mayuraircon1684@gmail.com. We're available Monday to Saturday 9:00 AM – 7:00 PM with emergency service 24/7.";

  const matchKnowledge = useCallback((message: string): string => {
    const normalised = message.toLowerCase();

    const matchedEntry = knowledgeBase.find((entry) =>
      entry.keywords.some((keyword) => normalised.includes(keyword))
    );

    if (matchedEntry) {
      return matchedEntry.response;
    }

    return "Thanks for reaching out! Share your AC requirements, the space size, and any timelines. I'll pass this to our specialists so they can prepare the right solution for you.";
  }, []);

  const respondToUser = useCallback(
    (userContent: string) => {
      setIsThinking(true);

      const botMessage = createMessage(
        "bot",
        `${matchKnowledge(userContent)}\n\n${reachableResponse}`,
      );

      typingTimeoutRef.current = window.setTimeout(() => {
        setMessages((previous) => [...previous, botMessage]);
        setIsThinking(false);
      }, 650);
    },
    [matchKnowledge, reachableResponse],
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
      "Over 2 years of experience • 5000+ installations • Trusted 24/7 support",
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
