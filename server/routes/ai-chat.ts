import type { Request, Response } from "express";

const HF_API_KEY = process.env.VITE_HUGGINGFACE_API_KEY || "";
const VICUNA_MODEL = "lmsys/vicuna-7b-v1.5";

interface HFResponse {
  generated_text?: string;
  error?: string;
}

export async function handleAIChat(req: Request, res: Response) {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    if (!HF_API_KEY) {
      return res.status(500).json({
        error:
          "AI service not configured. Please set VITE_HUGGINGFACE_API_KEY environment variable.",
      });
    }

    // Call Hugging Face API from server (no CORS issues)
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${VICUNA_MODEL}`,
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
        method: "POST",
        body: JSON.stringify({
          inputs: `You are an expert HVAC and air conditioning assistant. Answer the following question concisely and helpfully in 2-3 sentences:\n\nQuestion: ${question}\n\nAnswer:`,
          parameters: {
            max_length: 400,
            temperature: 0.7,
          },
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Hugging Face API error:", response.status, errorData);

      // Return a user-friendly error message
      if (response.status === 429) {
        return res.status(429).json({
          error: "Service temporarily unavailable. Please try again in a moment.",
        });
      }

      return res.status(500).json({
        error: "Unable to generate response. Please try again or contact support.",
      });
    }

    const data = (await response.json()) as HFResponse[];

    if (!data || !data[0]) {
      return res.status(500).json({
        error: "Unexpected response format from AI service.",
      });
    }

    const answer = data[0].generated_text || "";

    // Extract just the answer part (after "Answer:")
    const answerMatch = answer.match(/Answer:\s*([\s\S]*?)$/);
    const finalAnswer = answerMatch ? answerMatch[1].trim() : answer;

    return res.json({
      success: true,
      answer: finalAnswer,
      sources: [
        {
          title: "AC Maintenance Tips",
          url: "https://www.mayuraircon.com",
          snippet:
            "Professional air conditioning solutions and maintenance services.",
        },
      ],
    });
  } catch (error) {
    console.error("AI chat error:", error);
    return res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "An error occurred processing your request",
    });
  }
}
