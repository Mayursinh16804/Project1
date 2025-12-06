// AI Chat utility - Smart offline AC knowledge base + Hugging Face fallback
// No external API keys required for basic functionality

import { AC_FAQ_DATABASE, type FAQEntry } from "./ac-faq-data";

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

// Helper functions for text matching
function tokenize(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 0),
  );
}

function jaccardSimilarity(a: string, b: string): number {
  const setA = tokenize(a);
  const setB = tokenize(b);

  if (setA.size === 0 && setB.size === 0) return 1;
  if (setA.size === 0 || setB.size === 0) return 0;

  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  const union = new Set([...setA, ...setB]);

  return intersection.size / union.size;
}

function levenshteinSimilarity(a: string, b: string): number {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  if (!aLower.length) return bLower.length ? 0 : 1;
  if (!bLower.length) return aLower.length ? 0 : 1;

  const matrix: number[][] = [];
  for (let i = 0; i <= aLower.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= bLower.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= aLower.length; i++) {
    for (let j = 1; j <= bLower.length; j++) {
      const cost = aLower[i - 1] === bLower[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  const maxLen = Math.max(aLower.length, bLower.length);
  const distance = matrix[aLower.length][bLower.length];
  return 1 - distance / maxLen;
}

function scoreMatch(userQuestion: string, candidateText: string): number {
  const jaccard = jaccardSimilarity(userQuestion, candidateText);
  const levenshtein = levenshteinSimilarity(userQuestion, candidateText);

  return 0.7 * jaccard + 0.3 * levenshtein;
}

function findBestFAQMatch(
  question: string,
  threshold = 0.4,
): { entry: FAQEntry; matchScore: number } | null {
  let bestMatch: { entry: FAQEntry; matchScore: number } | null = null;
  let bestScore = threshold;

  for (const entry of AC_FAQ_DATABASE) {
    // Check canonical question
    const canonicalScore = scoreMatch(question, entry.canonical_question);
    if (canonicalScore > bestScore) {
      bestScore = canonicalScore;
      bestMatch = { entry, matchScore: canonicalScore };
    }

    // Check question variations (limit to first 50 for performance)
    const variations = entry.question_variations.slice(0, 50);
    for (const variation of variations) {
      const variationScore = scoreMatch(question, variation);
      if (variationScore > bestScore) {
        bestScore = variationScore;
        bestMatch = { entry, matchScore: variationScore };
      }
    }
  }

  return bestMatch;
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

  // Try to find answer in local knowledge base first
  const knowledgeBaseAnswer = findBestAnswer(question);
  if (knowledgeBaseAnswer) {
    return {
      answer: knowledgeBaseAnswer.answer,
      sources: knowledgeBaseAnswer.sources,
      isAI: true,
    };
  }

  // Fallback: Try AI via backend (if Hugging Face key is available)
  try {
    const aiResponse = await callVicunaAI(question);
    return {
      answer: aiResponse,
      sources: [
        {
          title: "Mayur Aircon Services",
          url: "https://www.mayuraircon.com",
          snippet:
            "Professional AC solutions including installation, maintenance, and repair services.",
        },
      ],
      isAI: true,
    };
  } catch (error) {
    console.error("Error getting AC response:", error);

    // Final fallback: generic response
    return {
      answer:
        "Thank you for your question about AC services. For detailed information, please contact our support team at +91 9909017725 or visit our website. We're available 24/7 for emergency support!",
      sources: [
        {
          title: "Contact Mayur Aircon",
          url: "https://www.mayuraircon.com",
          snippet:
            "Phone: +91 9909017725 | Email: mayuraircon1684@gmail.com | Available 24/7",
        },
      ],
      isAI: false,
    };
  }
}
