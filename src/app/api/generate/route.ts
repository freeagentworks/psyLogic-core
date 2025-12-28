import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Create custom OpenAI provider instance for Groq
const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 60; // Allow longer generation

export async function POST(req: Request) {
  const { tScores, mode, sloanType, attachmentStyle } = await req.json();

  console.log('API Request Received:', { mode, sloanType });
  console.log('Groq API Key exists:', !!process.env.GROQ_API_KEY);

  const systemPrompt = `You are an expert psychological analyst with deep knowledge of the Big Five Aspects Scale (BFAS), Attachment Theory (ECR-R), and behavior modification (SDT/HEXACO).
Your goal is to provide a "shockingly accurate" and "actionable" analysis based on the user's personality data.
Output format: Markdown.
Tone: Professional yet empathetic, slightly "edgy" or direct if needed to provoke successful behavior change.

CONTEXT:
Mode: ${mode}
SLOAN Type: ${sloanType}
Attachment Style: ${attachmentStyle || "N/A"}
`;

  let userPrompt = `Analyze the following Big Five Aspect T-Scores (Mean 50, SD 10):
${JSON.stringify(tScores, null, 2)}
`;

  if (mode === 'LOVE') {
    userPrompt += `
Focus on:
1. **Attachment Style & Neuroticism**: Explain how their anxiety/avoidance levels (inferred or provided) interact with their Neuroticism (Volatility/Withdrawal).
2. **Romantic Pitfalls**: Specific behaviors that ruin their relationships.
3. **Actionable Advice**: How to build a Secure attachment.
`;
  } else if (mode === 'BUSINESS') {
    userPrompt += `
Focus on:
1. **Conscientiousness & Assertiveness**: Analyze their Industriousness/Orderliness and Assertiveness/Enthusiasm.
2. **Career Bottlenecks**: What is holding them back from promotion or success?
3. **Growth Strategy**: Specific habits to adopt for higher performance.
`;
  }

  const result = await streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: systemPrompt,
    prompt: userPrompt,
  });

  return result.toTextStreamResponse();
}
