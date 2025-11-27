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

interface MenuItem {
  number: string;
  label: string;
  value: string;
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

const mainMenuItems: MenuItem[] = [
  { number: "1️⃣", label: "HVAC Services", value: "hvac" },
  { number: "2️⃣", label: "Centralized AC", value: "centralized" },
  { number: "3️⃣", label: "Split (Home) AC", value: "split" },
  { number: "4️⃣", label: "AMC/Warranty Support", value: "amc_support" },
  { number: "5️⃣", label: "Emergency Service", value: "emergency" },
  { number: "6️⃣", label: "Contact Us", value: "contact" },
];

const amc_support_menu: MenuItem[] = [
  { number: "1️⃣", label: "Breakdown / Service Issue", value: "breakdown" },
  { number: "2️⃣", label: "Operational Problem (Remote Support)", value: "operational" },
  { number: "3️⃣", label: "Other Issues", value: "other_issues" },
];

const service_action_menu: MenuItem[] = [
  { number: "1️⃣", label: "Book an appointment", value: "book" },
  { number: "2️⃣", label: "Request a quotation", value: "quotation" },
  { number: "3️⃣", label: "Emergency Service", value: "emergency" },
];

const split_action_menu: MenuItem[] = [
  { number: "1️⃣", label: "Book an appointment", value: "book" },
  { number: "2️⃣", label: "Check AMC plans", value: "amc_plans" },
  { number: "3️⃣", label: "Emergency Service", value: "emergency" },
];

const amc_coverage_menu: MenuItem[] = [
  { number: "1️⃣", label: "Yes", value: "yes" },
  { number: "2️⃣", label: "No", value: "no" },
];

const emergency_confirm_menu: MenuItem[] = [
  { number: "1️⃣", label: "Yes", value: "yes" },
  { number: "2️⃣", label: "No", value: "no" },
];

const contact_menu: MenuItem[] = [
  { number: "1️⃣", label: "Yes, connect me to a customer care executive", value: "yes" },
  { number: "2️⃣", label: "No, thanks", value: "no" },
];

const follow_up_menu: MenuItem[] = [
  { number: "1️⃣", label: "Yes, resolved", value: "yes" },
  { number: "2️⃣", label: "No, needs escalation", value: "no" },
];

const feedback_menu: MenuItem[] = [
  { number: "⭐", label: "Poor", value: "poor" },
  { number: "⭐⭐", label: "Average", value: "average" },
  { number: "⭐⭐⭐", label: "Good", value: "good" },
  { number: "⭐⭐⭐⭐", label: "Very Good", value: "very_good" },
  { number: "⭐⭐⭐⭐⭐", label: "Excellent", value: "excellent" },
];

export function SupportChatWidget() {
  const businessConfig = useBusinessConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage(
      "bot",
      `Hello! 👋 Welcome to ${businessConfig.name} – Commercial & Split AC Solutions. How can I help you today?\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Emergency Service\n6️⃣ Contact Us`,
    ),
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [canSendMessage, setCanSendMessage] = useState(false);
  const [currentStage, setCurrentStage] = useState("main_menu");
  const [firstServiceSelected, setFirstServiceSelected] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
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

  const respondToUser = useCallback(
    (userInput: string) => {
      const input = userInput.trim().toLowerCase();

      // Extract number from input (1, 2, 3, etc.)
      const numberMatch = input.match(/\d/);
      const selectedNumber = numberMatch ? numberMatch[0] : null;

      let response = "";
      let nextStage = currentStage;

      if (currentStage === "main_menu") {
        if (selectedNumber === "1" || input.includes("hvac")) {
          response = `We provide complete HVAC Solutions:\n• Installation\n• AMC (Annual Maintenance Contracts)\n• Warranty Support\n• Repairs & Maintenance\n\n1️⃣ Book an appointment\n2️⃣ Request a quotation\n3️⃣ Emergency Service 🚨`;
          nextStage = "hvac_action";
          if (!firstServiceSelected) {
            addBotMessage(
              `🎉 Great news! Since this is your first booking with ${businessConfig.name}, you get 10% OFF on your first service bill.`,
              300,
            );
            setFirstServiceSelected(true);
          }
        } else if (selectedNumber === "2" || input.includes("centralized")) {
          response = `We specialize in Commercial & Industrial Centralized AC Systems:\n• VRF / VRV Systems\n• Ductable Units\n• Chillers\n• Energy-Saving Solutions\n\n1️⃣ Book an appointment\n2️⃣ Request a quotation\n3️⃣ Emergency Service 🚨`;
          nextStage = "centralized_action";
          if (!firstServiceSelected) {
            addBotMessage(
              `🎉 Great news! Since this is your first booking with ${businessConfig.name}, you get 10% OFF on your first service bill.`,
              300,
            );
            setFirstServiceSelected(true);
          }
        } else if (selectedNumber === "3" || input.includes("split")) {
          response = `We provide complete Split AC Services:\n• Installation\n• Servicing & Repairs\n• Gas Refilling\n• AMC Packages\n• Warranty Support\n\n1���⃣ Book an appointment\n2️⃣ Check AMC plans\n3️⃣ Emergency Service 🚨`;
          nextStage = "split_action";
          if (!firstServiceSelected) {
            addBotMessage(
              `🎉 Great news! Since this is your first booking with ${businessConfig.name}, you get 10% OFF on your first service bill.`,
              300,
            );
            setFirstServiceSelected(true);
          }
        } else if (selectedNumber === "4" || input.includes("amc")) {
          response = `Please select the type of support you need:\n\n1️⃣ Breakdown / Service Issue\n2️⃣ Operational Problem (Remote Support)\n3️⃣ Other Issues`;
          nextStage = "amc_support_menu";
        } else if (selectedNumber === "5" || input.includes("emergency")) {
          response = `🚨 Emergency Service is available 24/7. Please note: Emergency charges are higher than normal services. Do you want to proceed?\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = "emergency_confirm";
        } else if (selectedNumber === "6" || input.includes("contact")) {
          response = `You can reach us at:\n\n📱 Phone: +91 ${businessConfig.phone}\n📧 Email: ${businessConfig.email}\n📍 Address: ${businessConfig.address}\n\nWould you like me to connect you with a customer care executive (Available 10 AM – 7 PM)?\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = "contact_action";
        } else {
          response = `Please select an option from the menu using numbers 1-6:\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Emergency Service\n6️⃣ Contact Us`;
          nextStage = "main_menu";
        }
      } else if (currentStage === "hvac_action" || currentStage === "centralized_action") {
        if (selectedNumber === "1" || input.includes("book")) {
          response = `Great! ✅ Please share your details:\n\n1. Full Name\n2. Contact Number\n3. Address\n4. Type of Service (Installation / AMC / Repair / Warranty / Gas Refilling)\n5. Preferred Date & Time (10 AM – 7 PM)`;
          nextStage = "collecting_details";
        } else if (selectedNumber === "2" || input.includes("quotation")) {
          response = `Great! Please share your details:\n\n1. Full Name\n2. Contact Number\n3. Service Details`;
          nextStage = "collecting_details";
        } else if (selectedNumber === "3" || input.includes("emergency")) {
          response = `🚨 Emergency Service is available 24/7. Please note: Emergency charges are higher than normal services. Do you want to proceed?\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = "emergency_confirm";
        } else {
          response = `Please select an option:\n\n1️⃣ Book an appointment\n2️⃣ Request a quotation\n3️⃣ Emergency Service 🚨`;
          nextStage = currentStage;
        }
      } else if (currentStage === "split_action") {
        if (selectedNumber === "1" || input.includes("book")) {
          response = `Great! ✅ Please share your details:\n\n1. Full Name\n2. Contact Number\n3. Address\n4. Type of Service (Installation / Repair / Gas Refilling)\n5. Preferred Date & Time (10 AM – 7 PM)`;
          nextStage = "collecting_details";
        } else if (selectedNumber === "2" || input.includes("amc")) {
          response = `🎉 Special Offer: When you buy a 12-month AMC, you'll get 1 extra month FREE (13 months total coverage)!\n\nWould you like to proceed with AMC booking?\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = "amc_booking";
        } else if (selectedNumber === "3" || input.includes("emergency")) {
          response = `🚨 Emergency Service is available 24/7. Please note: Emergency charges are higher than normal services. Do you want to proceed?\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = "emergency_confirm";
        } else {
          response = `Please select an option:\n\n1️⃣ Book an appointment\n2️⃣ Check AMC plans\n3️⃣ Emergency Service 🚨`;
          nextStage = currentStage;
        }
      } else if (currentStage === "amc_booking") {
        if (selectedNumber === "1" || input.includes("yes")) {
          response = `Great! ✅ Please share your details:\n\n1. Full Name\n2. Contact Number\n3. Address\n4. Preferred AMC Duration\n5. Preferred Date & Time (10 AM – 7 PM)`;
          nextStage = "collecting_details";
        } else if (selectedNumber === "2" || input.includes("no")) {
          response = `No problem! Let me show you the main menu again.\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Emergency Service\n6️⃣ Contact Us`;
          nextStage = "main_menu";
        } else {
          response = `Please select:\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = currentStage;
        }
      } else if (currentStage === "amc_support_menu") {
        if (selectedNumber === "1" || input.includes("breakdown")) {
          response = `We're here to help 🚨. Please confirm: Is your AC covered under AMC or Warranty?\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = "amc_coverage_check";
        } else if (selectedNumber === "2" || input.includes("operational")) {
          response = `Please describe your issue (e.g., AC not cooling, unusual noise, remote not working).`;
          nextStage = "collecting_operational";
        } else if (selectedNumber === "3" || input.includes("other")) {
          response = `Please describe your issue.`;
          nextStage = "collecting_operational";
        } else {
          response = `Please select an option:\n\n1️⃣ Breakdown / Service Issue\n2️⃣ Operational Problem (Remote Support)\n3️⃣ Other Issues`;
          nextStage = currentStage;
        }
      } else if (currentStage === "amc_coverage_check") {
        if (selectedNumber === "1" || input.includes("yes")) {
          response = `Please share:\n\n1. Full Name\n2. Contact Number\n3. Location\n4. Type of AC (Centralized / Split / Other)\n5. Describe the problem briefly`;
          nextStage = "collecting_breakdown_details";
        } else if (selectedNumber === "2" || input.includes("no")) {
          response = `It looks like your system is not under AMC/Warranty. Don't worry – you can still book a paid service.\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ Emergency Service\n5️⃣ Contact Us`;
          nextStage = "main_menu";
        } else {
          response = `Please select:\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = currentStage;
        }
      } else if (currentStage === "collecting_details" || currentStage === "collecting_breakdown_details") {
        response = `Thank you! Your appointment is booked. Our team will contact you for confirmation. ✅`;
        addBotMessage(`Would you like help with anything else?\n\n1️⃣ Yes\n2️⃣ No`, 650);
        nextStage = "follow_up";
        setCurrentStage("follow_up");
        addBotMessage(response, 650);
        return;
      } else if (currentStage === "collecting_operational") {
        response = `Our engineer will call you within business hours (10 AM – 7 PM) to assist remotely 📞.\n\nWas your issue resolved successfully?\n\n1️⃣ Yes\n2️⃣ No`;
        nextStage = "follow_up";
      } else if (currentStage === "emergency_confirm") {
        if (selectedNumber === "1" || input.includes("yes")) {
          response = `Please share your details:\n\n1. Full Name\n2. Contact Number\n3. Address\n4. Problem Description`;
          nextStage = "collecting_emergency";
        } else if (selectedNumber === "2" || input.includes("no")) {
          response = `No problem! Let me show you the main menu again.\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Contact Us`;
          nextStage = "main_menu";
        } else {
          response = `Please select:\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = currentStage;
        }
      } else if (currentStage === "collecting_emergency") {
        response = `Our technician will contact you within 2 hours 🚀.\n\nWas your issue resolved successfully?\n\n1️⃣ Yes\n2️⃣ No`;
        nextStage = "follow_up";
      } else if (currentStage === "follow_up") {
        if (selectedNumber === "1" || input.includes("yes")) {
          response = `Can we help you with anything else?\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = "follow_up_end";
        } else if (selectedNumber === "2" || input.includes("no")) {
          response = `Your call has been reopened and escalated for faster resolution.\n\nBefore we close, please rate your experience:\n\n⭐ Poor\n⭐⭐ Average\n⭐⭐⭐ Good\n⭐⭐⭐⭐ Very Good\n⭐⭐⭐⭐⭐ Excellent`;
          nextStage = "feedback";
        } else {
          response = `Please select:\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = currentStage;
        }
      } else if (currentStage === "follow_up_end") {
        if (selectedNumber === "1" || input.includes("yes")) {
          response = `1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Emergency Service\n6️⃣ Contact Us`;
          nextStage = "main_menu";
        } else if (selectedNumber === "2" || input.includes("no")) {
          response = `Before we close, please rate your experience:\n\n⭐ Poor\n⭐⭐ Average\n⭐⭐⭐ Good\n⭐⭐⭐⭐ Very Good\n⭐⭐⭐⭐⭐ Excellent`;
          nextStage = "feedback";
        } else {
          response = `Please select:\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = currentStage;
        }
      } else if (currentStage === "contact_action") {
        if (selectedNumber === "1" || input.includes("yes")) {
          response = `I'll connect you to a customer care executive. Support hours: 10 AM – 7 PM (Mon–Sat).`;
          nextStage = "main_menu";
        } else if (selectedNumber === "2" || input.includes("no")) {
          response = `No problem. Is there anything else I can help you with?`;
          nextStage = "main_menu";
        } else {
          response = `Please select:\n\n1️⃣ Yes\n2️⃣ No`;
          nextStage = currentStage;
        }
      } else if (currentStage === "feedback") {
        response = `Thank you for your feedback! We'll keep improving 🙏`;
        nextStage = "main_menu";
      } else {
        response = `Please select an option from the menu:\n\n1️⃣ HVAC Services\n2️⃣ Centralized AC\n3️⃣ Split (Home) AC\n4️⃣ AMC/Warranty Support\n5️⃣ Emergency Service\n6️⃣ Contact Us`;
        nextStage = "main_menu";
      }

      addBotMessage(response);
      setCurrentStage(nextStage);
    },
    [currentStage, firstServiceSelected, businessConfig, addBotMessage],
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
              placeholder="Type number or message..."
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
