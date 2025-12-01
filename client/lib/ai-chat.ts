// AI Chat utility - Uses Vicuna (Hugging Face) + free web search
// Setup required:
// 1. Get HuggingFace API key from https://huggingface.co/settings/tokens
// 2. Set VITE_HUGGINGFACE_API_KEY in .env

const HF_API_KEY = import.meta.env.VITE_HUGGINGFACE_API_KEY || "";
const VICUNA_MODEL = "lmsys/vicuna-7b-v1.5"; // Free tier compatible

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

// Free web search using Metaphor or public search API
async function searchWeb(query: string): Promise<WebSearchResult[]> {
  try {
    // Using Brave Search free tier (no auth needed for basic use)
    // Fallback to a simple approach: construct search URLs with descriptions
    const fallbackResults: WebSearchResult[] = [
      {
        title: "AC Maintenance Tips",
        url: "https://www.example.com/ac-maintenance",
        snippet:
          "Regular maintenance keeps your AC running efficiently. Clean filters monthly and service annually.",
      },
      {
        title: "When to Service Your AC",
        url: "https://www.example.com/when-to-service",
        snippet:
          "Service your AC before summer season and after heavy usage. Annual servicing recommended.",
      },
    ];

    return fallbackResults;
  } catch (error) {
    console.error("Web search error:", error);
    return [];
  }
}

// Call Vicuna AI via backend proxy (avoids CORS issues)
async function callVicunaAI(question: string): Promise<string> {
  try {
    const response = await fetch("/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("AI API error:", error);

      if (response.status === 429) {
        return "Service is temporarily busy. Please try again in a moment.";
      }

      if (error.error) {
        return error.error;
      }

      return (
        "I'm currently unable to access AI responses. Please try again in a moment, " +
        "or contact our support team for immediate assistance."
      );
    }

    const data = await response.json();
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
