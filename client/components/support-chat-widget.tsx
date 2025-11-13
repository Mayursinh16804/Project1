import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { MessageCircle, Send, Sparkles, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useBusinessConfig } from "@/context/BusinessContext";

interface ChatMessage {
  id: string;
  author: "user" | "bot";
  content: string;
  timestamp: Date;
}

const createMessage = (
  author: "user" | "bot",
  content: string,
): ChatMessage => ({
  id: `${author}-${Date.now()}-${Math.random()}`,
  author,
  content,
  timestamp: new Date(),
});

export function SupportChatWidget() {
  const businessConfig = useBusinessConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage(
      "bot",
      `Welcome to ${businessConfig.name}! 👋\n\nI'm here to help you with your air conditioning needs. Choose an option:\n\n1️⃣ Precision Air Conditioning (PAC) - Vertiv Systems Only\n2️⃣ Regular AC Services (All Brands & Models)\n3️⃣ Request a Callback\n4️⃣ View Our Client List\n5️⃣ Contact Us 📞 +91 ${businessConfig.phone}`,
    ),
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [canSendMessage, setCanSendMessage] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pendingResponseCountRef = useRef(0);
  const typingTimeoutsRef = useRef<number[]>([]);
  const hasShownFirstServiceOfferRef = useRef(false);

  useEffect(() => {
    setCanSendMessage(inputValue.trim().length > 0);
  }, [inputValue]);

  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 120);
      textarea.style.height = `${newHeight}px`;
    }
  }, []);

  const respondToUser = useCallback(
    (userContent: string) => {
      const lowerContent = userContent.toLowerCase().trim();

      let botResponse = "";
      let shouldShowMenu = false;

      if (
        lowerContent === "1" ||
        lowerContent.includes("precision") ||
        lowerContent.includes("pac")
      ) {
        botResponse = `🔧 Precision Air Conditioning (PAC) - Vertiv Systems\n\n${businessConfig.name} specializes in Precision Air Conditioning services exclusively for Vertiv systems. We provide:\n\n• Installation & Setup\n• Maintenance & Support\n• Emergency Services\n• Expert Technical Support\n\nOur team maintains over 20 sites across Ahmedabad, Gandhinagar, and Radhanpur.\n\nWould you like to:\n✉️ Request a callback\n📞 Call us: +91 ${businessConfig.phone}\n💬 Chat with us further`;
      } else if (
        lowerContent === "2" ||
        lowerContent.includes("regular") ||
        lowerContent.includes("all brands")
      ) {
        botResponse = `🌡️ Regular AC Services - All Brands & Models\n\nFor all other PAC and AC service needs, ${businessConfig.name} supports every brand and model, including:\n\n• Split AC Systems\n• Window AC Units\n• Central AC Systems\n• Commercial HVAC\n• Installation, Maintenance & Repair\n• Annual Maintenance Contracts (AMC)\n\nOur team has extensive experience serving:\n${businessConfig.trustedClients.slice(0, 4).join(", ")}, and many more!\n\nReady to book a service? Let me know your requirements!`;
      } else if (lowerContent === "3" || lowerContent.includes("callback")) {
        botResponse = `📞 Request a Callback\n\nI'd be happy to arrange a callback for you!\n\nPlease share the following details:\n1. Your full name\n2. Contact number\n3. What service are you interested in?\n4. Best time to reach you?\n\nWe'll contact you within 24 hours.`;
      } else if (
        lowerContent === "4" ||
        lowerContent.includes("client") ||
        lowerContent.includes("trusted")
      ) {
        botResponse = `⭐ Our Trusted Clients\n\n${businessConfig.name} is proud to serve industry leaders across various sectors:\n\n${businessConfig.trustedClients.join("\n")}\n\nWe maintain over 20 service sites across:\n${businessConfig.serviceRegions.join(", ")}\n\nour commitment to excellence ensures top-tier AC solutions for businesses of all sizes.`;
      } else if (
        lowerContent === "5" ||
        lowerContent.includes("contact us")
      ) {
        botResponse = `📞 Contact ${businessConfig.name}\n\n📱 Phone: +91 ${businessConfig.phone}\n📧 Email: ${businessConfig.email}\n📍 Service Areas: ${businessConfig.serviceRegions.join(", ")}\n\n⏰ Service Hours:\nMonday - Saturday: 9:00 AM - 7:00 PM\nEmergency Service: 24/7 Available\n\nWe're here to help! What can we assist you with today?`;
        shouldShowMenu = true;
      } else if (
        lowerContent.includes("hello") ||
        lowerContent.includes("hi") ||
        lowerContent.includes("hey") ||
        lowerContent.includes("menu")
      ) {
        botResponse = `👋 Hi there! Let me show you the main menu again:\n\n1️⃣ Precision Air Conditioning (PAC) - Vertiv Systems Only\n2️⃣ Regular AC Services (All Brands & Models)\n3️⃣ Request a Callback\n4️⃣ View Our Client List\n5️⃣ Contact Us 📞 +91 ${businessConfig.phone}`;
        shouldShowMenu = false;
      } else {
        botResponse = `Thanks for your message! To better assist you, please select one of the options from our menu:\n\n1️⃣ Precision Air Conditioning (PAC) - Vertiv Systems Only\n2️⃣ Regular AC Services (All Brands & Models)\n3️⃣ Request a Callback\n4️⃣ View Our Client List\n5️⃣ Contact Us 📞 +91 ${businessConfig.phone}`;
        shouldShowMenu = true;
      }

      const botMessage = createMessage("bot", botResponse);

      if (pendingResponseCountRef.current === 0) {
        setIsThinking(true);
      }
      pendingResponseCountRef.current += 1;

      const timeoutId = window.setTimeout(() => {
        setMessages((previous) => [...previous, botMessage]);
        pendingResponseCountRef.current = Math.max(
          pendingResponseCountRef.current - 1,
          0,
        );
        typingTimeoutsRef.current = typingTimeoutsRef.current.filter(
          (id) => id !== timeoutId,
        );
        if (pendingResponseCountRef.current === 0) {
          setIsThinking(false);
        }
      }, 650);

      typingTimeoutsRef.current.push(timeoutId);
    },
    [businessConfig],
  );

  const focusTextarea = useCallback(() => {
    textareaRef.current?.focus();
  }, []);

  const pushUserMessage = useCallback(
    (content: string) => {
      const userMessage = createMessage("user", content);
      setMessages((previous) => [...previous, userMessage]);
    },
    [],
  );

  const sendMessage = useCallback(
    (content: string) => {
      if (!content.trim()) return;

      pushUserMessage(content);
      respondToUser(content);
      setInputValue("");
      adjustTextareaHeight();

      if (!hasShownFirstServiceOfferRef.current) {
        hasShownFirstServiceOfferRef.current = true;
      }
    },
    [pushUserMessage, respondToUser, adjustTextareaHeight],
  );

  const handleSendClick = () => {
    sendMessage(inputValue);
    focusTextarea();
  };

  const handleTextareaKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(inputValue);
      focusTextarea();
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [adjustTextareaHeight]);

  useEffect(() => {
    return () => {
      typingTimeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const isMobile = useIsMobile();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-accent hover:bg-accent/90 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat support</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={cn(
          "flex flex-col p-0",
          isMobile ? "h-[90vh]" : "w-[400px]",
        )}
      >
        <SheetHeader className="border-b border-border px-6 py-4">
          <SheetTitle className="flex items-center gap-2 text-base">
            <Sparkles className="h-4 w-4 text-accent" />
            {businessConfig.name} Support
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 overflow-hidden">
          <div className="space-y-4 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.author === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-xs lg:max-w-md rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    message.author === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground",
                  )}
                >
                  <p className="whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex gap-3">
                <div className="flex items-center gap-2 rounded-2xl bg-muted px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Typing...
                  </span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t border-border bg-background px-4 py-3">
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              handleSendClick();
            }}
            className="flex gap-2"
          >
            <Textarea
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                adjustTextareaHeight();
              }}
              onKeyDown={handleTextareaKeyDown}
              placeholder="Type your question..."
              aria-label="Message support"
              autoComplete="off"
              className="flex-1 resize-none rounded-2xl border border-border bg-white px-4 py-3 text-sm leading-relaxed shadow-sm focus-visible:ring-accent"
            />
            <Button
              type="button"
              onClick={handleSendClick}
              className="h-12 w-12 rounded-full bg-accent p-0 hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-accent/60"
              disabled={!canSendMessage}
              aria-disabled={!canSendMessage}
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
