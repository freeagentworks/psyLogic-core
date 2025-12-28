import { Groq } from 'groq-sdk';

// Initialize Groq SDK
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 60;

export async function POST(req: Request) {
  const { tScores, mode, sloanType, attachmentStyle, language } = await req.json();

  console.log('API Request Received:', { mode, sloanType, language });
  console.log('Groq API Key exists:', !!process.env.GROQ_API_KEY);

  const languageInstruction = language === 'ja'
    ? 'You MUST respond entirely in Japanese (日本語). All analysis, headings, and explanations must be in Japanese.'
    : 'You MUST respond entirely in English.';

  const systemPrompt = `You are an expert psychological analyst with deep knowledge of the Big Five Aspects Scale (BFAS), Attachment Theory (ECR-R), and behavior modification (SDT/HEXACO).
Your goal is to provide a "shockingly accurate" and "actionable" analysis based on the user's personality data.

OUTPUT FORMAT RULES:
- Use ONLY pure Markdown syntax. DO NOT use any HTML tags (no <br>, <p>, <table>, etc.).
- Use ## for section headings, ### for subheadings.
- Use bullet points (-) or numbered lists (1.) for lists.
- Use **bold** for emphasis, *italic* for secondary emphasis.
- Use > for important quotes or callouts.
- Use --- for horizontal separators between major sections.
- Keep paragraphs well-spaced with blank lines between them.

Tone: Professional yet empathetic, slightly "edgy" or direct if needed to provoke successful behavior change.

${languageInstruction}

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

  try {
    // Non-streaming request for reliability
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      model: "openai/gpt-oss-120b",
      temperature: 1,
      max_completion_tokens: 8192,
      top_p: 1,
      stream: false, // Disable streaming
      stop: null
    });

    const content = chatCompletion.choices[0]?.message?.content || '';
    console.log('Generated content length:', content.length);

    return new Response(JSON.stringify({ text: content }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error("Groq API Error:", error);
    return new Response(JSON.stringify({ error: 'Failed to generate analysis' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
