// AI Chat utility - Smart offline AC knowledge base + Hugging Face fallback
// No external API keys required for basic functionality

interface WebSearchResult {
  title: string;
  url: string;
  snippet: string;
}

interface ACResponse {
  answer: string;
  sources: WebSearchResult[];
  isAI: boolean;
}

// Comprehensive AC knowledge base
const AC_KNOWLEDGE_BASE: Record<string, { answer: string; sources: WebSearchResult[] }> = {
  "maintain|maintenance|service|maintain": {
    answer:
      "To maintain your AC system:\n1. Clean or replace filters every 1-2 months\n2. Get professional servicing once or twice yearly\n3. Keep outdoor unit free from debris\n4. Check refrigerant levels annually\n5. Ensure proper airflow around the unit\n\nRegular maintenance improves efficiency and extends your AC's lifespan.",
    sources: [
      {
        title: "AC Maintenance Checklist",
        url: "https://www.mayuraircon.com/maintenance",
        snippet:
          "Regular maintenance keeps your AC running efficiently. Clean filters monthly and service annually.",
      },
      {
        title: "When to Service Your AC",
        url: "https://www.mayuraircon.com/service",
        snippet:
          "Service your AC before summer season and after heavy usage. Annual servicing recommended.",
      },
    ],
  },
  "cool|not cooling|not cold|not working|stopped": {
    answer:
      "If your AC is not cooling properly:\n1. Check if the thermostat is set correctly\n2. Ensure air filters are clean\n3. Check that the outdoor unit has airflow\n4. Look for refrigerant leaks\n5. Verify the compressor is running\n\nIf these steps don't help, contact a professional technician for inspection.",
    sources: [
      {
        title: "AC Troubleshooting Guide",
        url: "https://www.mayuraircon.com/troubleshooting",
        snippet:
          "Common reasons your AC isn't cooling: dirty filters, low refrigerant, thermostat issues, or compressor problems.",
      },
      {
        title: "When to Call a Professional",
        url: "https://www.mayuraircon.com/when-to-call",
        snippet:
          "If your AC has refrigerant leaks, compressor issues, or electrical problems, contact a professional.",
      },
    ],
  },
  "gas|refill|low|refrigerant|freon": {
    answer:
      "AC refrigerant (gas) management:\n1. Low refrigerant indicates a leak\n2. Refilling without fixing the leak is temporary\n3. Professional technicians should handle all refrigerant work\n4. Refills are needed every 4-5 years in normal conditions\n5. Leaks must be fixed for lasting solutions\n\nContact us for professional refrigerant inspection and refilling.",
    sources: [
      {
        title: "AC Refrigerant Guide",
        url: "https://www.mayuraircon.com/refrigerant",
        snippet:
          "Understanding AC refrigerant: types, costs, and when to refill your system.",
      },
      {
        title: "Refrigerant Leak Repair",
        url: "https://www.mayuraircon.com/leak-repair",
        snippet:
          "If your AC is low on refrigerant, it indicates a leak. We can locate and repair the leak.",
      },
    ],
  },
  "noise|sound|loud|grinding|squealing": {
    answer:
      "Unusual AC noises indicate potential issues:\n1. Grinding sounds: compressor problems\n2. Squealing: refrigerant leak or motor issue\n3. Rattling: loose components\n4. Hissing: refrigerant leak\n\nDon't ignore these sounds - they need professional attention to prevent further damage.",
    sources: [
      {
        title: "AC Noise Diagnosis",
        url: "https://www.mayuraircon.com/noise",
        snippet:
          "Different AC noises indicate different problems. Learn what each sound means.",
      },
      {
        title: "AC Repair Services",
        url: "https://www.mayuraircon.com/repair",
        snippet:
          "We diagnose and repair all AC issues, from noise to cooling problems.",
      },
    ],
  },
  "bill|power|energy|consumption|expensive": {
    answer:
      "To reduce AC energy consumption:\n1. Set thermostat to 24-26°C (optimal comfort)\n2. Use programmable thermostat for scheduling\n3. Keep filters clean for better efficiency\n4. Seal air leaks in doors and windows\n5. Close curtains during hot hours\n6. Regular maintenance improves efficiency by 15%\n\nWe offer energy-efficient AC solutions tailored to your needs.",
    sources: [
      {
        title: "Energy Efficient AC Tips",
        url: "https://www.mayuraircon.com/efficiency",
        snippet:
          "Reduce your AC bills by 20-30% with these simple efficiency tips.",
      },
      {
        title: "Energy Saving AC Systems",
        url: "https://www.mayuraircon.com/energy-saving",
        snippet:
          "Our energy-efficient AC units save you money while keeping you cool.",
      },
    ],
  },
  "install|installation|new|buy": {
    answer:
      "AC Installation Service:\n1. We install all types: split, window, centralized, and commercial AC\n2. Professional installation ensures optimal performance\n3. We handle complete setup including wiring and gas filling\n4. Warranty coverage on parts and labor\n\nContact us for a free consultation and competitive quote on AC installation.",
    sources: [
      {
        title: "AC Installation Services",
        url: "https://www.mayuraircon.com/installation",
        snippet:
          "Expert AC installation for homes and businesses. Get 10% OFF your first installation!",
      },
      {
        title: "Free Installation Consultation",
        url: "https://www.mayuraircon.com/consultation",
        snippet:
          "Book your free AC installation consultation and get a detailed quote.",
      },
    ],
  },
  "amc|warranty|contract|coverage": {
    answer:
      "AMC (Annual Maintenance Contract) Benefits:\n1. Regular preventive maintenance (4 times/year)\n2. Priority emergency service (24/7)\n3. 50% discount on spare parts\n4. Extended warranty coverage\n5. Guaranteed uptime and performance\n\nWe offer flexible AMC plans starting from ₹999/month. Special offer: Buy 12-month AMC, get 1 month FREE!",
    sources: [
      {
        title: "AMC Plans & Pricing",
        url: "https://www.mayuraircon.com/amc",
        snippet:
          "Our AMC plans include 4 services/year, 24/7 support, and spare parts discount.",
      },
      {
        title: "Special AMC Offer",
        url: "https://www.mayuraircon.com/amc-offer",
        snippet:
          "Buy 12 months AMC, get 1 extra month FREE + 24/7 emergency support.",
      },
    ],
  },
};

// Detect if question is AC-related
export function isACQuestion(text: string): boolean {
  if (!text) return false;
  const keywords = [
    "air conditioner",
    "ac ",
    "a/c",
    "split ac",
    "window ac",
    "compressor",
    "refrigerant",
    "freon",
    "cooling",
    "ac maintenance",
    "ac repair",
    "ac leak",
    "ac gas",
    "ac service",
    "ac noise",
    "ac smell",
    "ac thermostat",
    "hvac",
    "temperature",
    "coolant",
    "conditioner",
  ];
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

// Find best matching answer from knowledge base
function findBestAnswer(
  question: string,
): { answer: string; sources: WebSearchResult[] } | null {
  const lower = question.toLowerCase();

  for (const [keywords, content] of Object.entries(AC_KNOWLEDGE_BASE)) {
    const keywordArray = keywords.split("|");
    if (keywordArray.some((k) => lower.includes(k))) {
      return content;
    }
  }

  return null;
}

// Call Vicuna AI via backend proxy (avoids CORS issues)
async function callVicunaAI(question: string): Promise<string> {
  try {
    const response = await fetch("/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    // Always read the body first to avoid stream issues
    const data = await response.json();

    if (!response.ok) {
      console.error("AI API error:", data);

      if (response.status === 429) {
        return "Service is temporarily busy. Please try again in a moment.";
      }

      if (data.error) {
        return data.error;
      }

      return (
        "I'm currently unable to access AI responses. Please try again in a moment, " +
        "or contact our support team for immediate assistance."
      );
    }

    return (
      data.answer ||
      "Unable to generate response. Please try rephrasing your question."
    );
  } catch (error) {
    console.error("AI chat error:", error);
    return (
      "I encountered an issue processing your question. " +
      "Please try again or contact our support team."
    );
  }
}

// Main function to handle AC questions
export async function getACResponse(
  question: string,
): Promise<ACResponse> {
  if (!isACQuestion(question)) {
    return {
      answer:
        "I can help with AC-related questions! Please ask me about air conditioning services, maintenance, repairs, or anything else related to HVAC systems.",
      sources: [],
      isAI: false,
    };
  }

  try {
    const [aiResponse, searchResults] = await Promise.all([
      callVicunaAI(question),
      searchWeb(question),
    ]);

    return {
      answer: aiResponse,
      sources: searchResults,
      isAI: true,
    };
  } catch (error) {
    console.error("Error getting AC response:", error);
    return {
      answer:
        "I encountered an issue retrieving information. Please try again or contact our support team.",
      sources: [],
      isAI: false,
    };
  }
}
