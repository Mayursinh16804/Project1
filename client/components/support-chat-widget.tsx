import { useCallback, useEffect, useRef, useState } from "react";
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

interface ChatState {
  stage: string;
  hasShownFirstBookingOffer: boolean;
  selectedService: string | null;
  userDetails: Record<string, string>;
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
      `Hello! 👋 Welcome to ${businessConfig.name} – Commercial & Split AC Solutions. How can I help you today?`,
    ),
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [canSendMessage, setCanSendMessage] = useState(false);
  const [chatState, setChatState] = useState<ChatState>({
    stage: "main_menu",
    hasShownFirstBookingOffer: false,
    selectedService: null,
    userDetails: {},
  });
  const [showMenu, setShowMenu] = useState(true);
  const [menuOptions, setMenuOptions] = useState<
    Array<{ label: string; value: string }>
  >([
    { label: "1️⃣ HVAC Services", value: "hvac" },
    { label: "2️⃣ Centralized AC", value: "centralized" },
    { label: "3️⃣ Split (Home) AC", value: "split" },
    { label: "4️⃣ AMC/Warranty Support", value: "amc_support" },
    { label: "5️⃣ Emergency Service", value: "emergency" },
    { label: "6️⃣ Contact Us", value: "contact" },
  ]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pendingResponseCountRef = useRef(0);
  const typingTimeoutsRef = useRef<number[]>([]);

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

  const addBotMessage = useCallback((content: string, delay = 650) => {
    const botMessage = createMessage("bot", content);

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
    }, delay);

    typingTimeoutsRef.current.push(timeoutId);
  }, []);

  const updateChatState = useCallback((updates: Partial<ChatState>) => {
    setChatState((prev) => ({ ...prev, ...updates }));
  }, []);

  const showBookingForm = useCallback(() => {
    addBotMessage(
      "Great! ✅ Please share your details:\n\n1. Full Name\n2. Contact Number\n3. Address\n4. Type of Service (Installation / AMC / Repair / Warranty / Gas Refilling)\n5. Preferred Date & Time (10 AM – 7 PM)",
    );
    updateChatState({ stage: "collecting_booking_details" });
  }, [addBotMessage, updateChatState]);

  const respondToUser = useCallback(
    (userContent: string) => {
      const lower = userContent.toLowerCase().trim();

      if (chatState.stage === "collecting_booking_details") {
        setChatState((prev) => ({
          ...prev,
          userDetails: { ...prev.userDetails, details: userContent },
        }));
        addBotMessage(
          `Thank you! Your appointment is booked. Our team will contact you for confirmation. ${!chatState.hasShownFirstBookingOffer ? "🎉 Don't forget your 10% OFF on your first service bill!" : ""}`,
        );
        updateChatState({
          stage: "main_menu",
          hasShownFirstBookingOffer: true,
        });
        setShowMenu(true);
        return;
      }

      let botResponse = "";
      let nextStage = "main_menu";
      let newShowMenu = true;

      if (lower === "1" || lower === "hvac" || lower.includes("hvac")) {
        botResponse = `We provide complete HVAC Solutions:\n\n• Installation\n• AMC (Annual Maintenance Contracts)\n• Warranty Support\n• Repairs & Maintenance\n\nWould you like to book an appointment, request a quotation, or choose Emergency Service 🚨?`;
        nextStage = "hvac_service";
        setChatState((prev) => ({
          ...prev,
          selectedService: "hvac",
          hasShownFirstBookingOffer: true,
        }));
      } else if (
        lower === "2" ||
        lower === "centralized" ||
        lower.includes("centralized")
      ) {
        botResponse = `We specialize in Commercial & Industrial Centralized AC Systems:\n\n• VRF / VRV Systems\n• Ductable Units\n• Chillers\n• Energy-Saving Solutions\n\nWould you like to book an appointment, request a quotation, or choose Emergency Service 🚨?`;
        nextStage = "centralized_service";
        setChatState((prev) => ({
          ...prev,
          selectedService: "centralized",
          hasShownFirstBookingOffer: true,
        }));
      } else if (
        lower === "3" ||
        lower === "split" ||
        lower.includes("split")
      ) {
        botResponse = `We provide complete Split AC Services:\n\n• Installation\n• Servicing & Repairs\n• Gas Refilling\n• AMC Packages\n• Warranty Support\n\nWould you like to book an appointment, check AMC plans, or choose Emergency Service 🚨?`;
        nextStage = "split_service";
        setChatState((prev) => ({
          ...prev,
          selectedService: "split",
          hasShownFirstBookingOffer: true,
        }));
      } else if (
        lower === "4" ||
        lower.includes("amc") ||
        lower.includes("warranty")
      ) {
        botResponse = `Please select the type of support you need:\n\n1️⃣ Breakdown / Service Issue\n2️⃣ Operational Problem (Remote Support)\n3️⃣ Other Issues`;
        nextStage = "amc_menu";
      } else if (
        lower === "5" ||
        lower === "emergency" ||
        lower.includes("emergency")
      ) {
        botResponse = `🚨 Emergency Service is available 24/7. Please note: Emergency charges are higher than normal services.\n\nDo you want to proceed?`;
        nextStage = "emergency_confirmation";
      } else if (
        lower === "6" ||
        lower === "contact" ||
        lower.includes("contact")
      ) {
        botResponse = `You can reach us at:\n\n📱 Phone: +91 ${businessConfig.phone}\n📧 Email: ${businessConfig.email}\n📍 Address: ${businessConfig.address}\n\nWould you like me to connect you with a customer care executive (Available 10 AM – 7 PM)?`;
        nextStage = "contact_menu";
      } else if (
        lower === "book" ||
        lower.includes("appointment") ||
        lower.includes("booking")
      ) {
        if (!chatState.hasShownFirstBookingOffer) {
          addBotMessage(
            `🎉 Great news! Since this is your first booking with ${businessConfig.name}, you get 10% OFF on your first service bill.`,
          );
        }
        showBookingForm();
        return;
      } else if (
        lower === "amc" ||
        lower === "breakdown" ||
        lower.includes("breakdown")
      ) {
        botResponse = `We're here to help 🚨. Please confirm: Is your AC covered under AMC or Warranty?`;
        nextStage = "amc_check";
      } else if (lower === "yes" && chatState.stage === "amc_check") {
        botResponse = `Please share:\n\n1. Full Name\n2. Contact Number\n3. Location\n4. Type of AC (Centralized / Split / Other)\n5. Describe the problem briefly`;
        nextStage = "collecting_breakdown_details";
      } else if (lower === "no" && chatState.stage === "amc_check") {
        botResponse = `It looks like your system is not under AMC/Warranty. Don't worry – you can still book a paid service.`;
        newShowMenu = true;
        nextStage = "main_menu";
      } else if (
        lower === "operational" ||
        (lower === "2" && chatState.stage === "amc_menu")
      ) {
        botResponse = `Please describe your issue (e.g., AC not cooling, unusual noise, remote not working).`;
        nextStage = "collecting_operational_details";
      } else if (
        lower === "yes" &&
        chatState.stage === "emergency_confirmation"
      ) {
        addBotMessage(
          `Please share your details:\n\n1. Full Name\n2. Contact Number\n3. Address\n4. Problem Description`,
        );
        updateChatState({ stage: "collecting_emergency_details" });
        return;
      } else if (
        lower === "no" &&
        chatState.stage === "emergency_confirmation"
      ) {
        botResponse = `No problem! Let me show you the main menu again.`;
        newShowMenu = true;
        nextStage = "main_menu";
      } else if (
        chatState.stage === "collecting_breakdown_details" ||
        chatState.stage === "collecting_operational_details" ||
        chatState.stage === "collecting_emergency_details"
      ) {
        setChatState((prev) => ({
          ...prev,
          userDetails: { ...prev.userDetails, issue: userContent },
        }));
        botResponse =
          chatState.stage === "collecting_operational_details"
            ? `Our engineer will call you within business hours (10 AM – 7 PM) to assist remotely 📞.`
            : `Our technician will contact you within 2 hours 🚀.`;
        newShowMenu = true;
        nextStage = "main_menu";
      } else if (lower === "yes" && chatState.stage === "contact_menu") {
        botResponse = `I'll connect you to a customer care executive. Support hours: 10 AM – 7 PM (Mon–Sat).`;
        nextStage = "talking_to_executive";
      } else if (lower === "feedback" || lower.includes("rate")) {
        botResponse = `Before we close, please rate your experience:\n\n⭐ Poor\n⭐⭐ Average\n⭐⭐⭐ Good\n⭐⭐⭐⭐ Very Good\n⭐⭐⭐⭐⭐ Excellent`;
        nextStage = "feedback";
      } else if (chatState.stage === "feedback") {
        botResponse = `Thank you for your feedback! We'll keep improving 🙏`;
        newShowMenu = true;
        nextStage = "main_menu";
      } else if (
        lower === "hello" ||
        lower === "hi" ||
        lower === "menu" ||
        lower.includes("back")
      ) {
        botResponse = `👋 Let me show you the main menu:\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Emergency Service\n6️⃣ Contact Us`;
        newShowMenu = true;
        nextStage = "main_menu";
      } else {
        botResponse = `Thanks for your message! To better assist you, please select one of the options:\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Emergency Service\n6️⃣ Contact Us`;
        newShowMenu = true;
        nextStage = "main_menu";
      }

      addBotMessage(botResponse);
      updateChatState({ stage: nextStage });
      setShowMenu(newShowMenu);
    },
    [chatState, addBotMessage, updateChatState, businessConfig],
  );

  const focusTextarea = useCallback(() => {
    textareaRef.current?.focus();
  }, []);

  const pushUserMessage = useCallback((content: string) => {
    const userMessage = createMessage("user", content);
    setMessages((previous) => [...previous, userMessage]);
  }, []);

  const sendMessage = useCallback(
    (content: string) => {
      if (!content.trim()) return;

      pushUserMessage(content);
      respondToUser(content);
      setInputValue("");
      adjustTextareaHeight();
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

  const handleMenuClick = (value: string) => {
    setInputValue(value);
    sendMessage(value);
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
        className={cn("flex flex-col p-0", isMobile ? "h-[90vh]" : "w-[400px]")}
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

        {showMenu && chatState.stage === "main_menu" && (
          <div className="border-t border-border bg-background px-4 py-3 space-y-2 max-h-40 overflow-y-auto">
            {menuOptions.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="w-full text-left justify-start text-xs hover:bg-accent hover:text-accent-foreground"
                onClick={() => handleMenuClick(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        )}

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
              placeholder="Type your message..."
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
