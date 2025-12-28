import { Question, AnswerValue } from '../types';

export interface AttachmentResult {
    anxietyScore: number;
    avoidanceScore: number;
    style: 'Secure' | 'Preoccupied' | 'Dismissing' | 'Fearful';
}

// ECR-R (Experiences in Close Relationships-Revised) Short Form logic
// Anxiety: Worry about rejection/abandonment
// Avoidance: Discomfort with closeness/dependency
// Scores are usually calculated as mean of items.

export function calculateAttachment(
    answers: Record<string, number>,
    questions: Question[]
): AttachmentResult {
    // Filter questions for attachment (assuming we have them tagged, or we map them)
    // For now, since we only mocked questions, I will simulate logic based on specific IDs if they existed,
    // or just use available data to generate a "pseudo" score for demo purposes if real items aren't there.

    // Design decision: In this demo, we might not have 36 ECR-R questions.
    // We will map Neuroticism -> Anxiety correlation and Extraversion (low) -> Avoidance correlation
    // as a fallback if explicit attachment items are missing.

    // Real implementation:
    // let anxietySum = 0; let anxietyCount = 0;
    // let avoidanceSum = 0; let avoidanceCount = 0;
    // questions.forEach ...

    // Fallback Logic for Demo:
    // Anxiety ~ Neuroticism (Volatility + Withdrawal)
    // Avoidance ~ Low Extraversion + Low Agreeableness

    // We need to fetch calculated scores to do this properly? 
    // Or just iterate answers.

    // Let's implement a structure that *would* work if we had the questions.
    let anxietySum = 0;
    let anxietyCount = 0;
    let avoidanceSum = 0;
    let avoidanceCount = 0;

    questions.forEach(q => {
        // Assuming some questions might be tagged 'attachment' in the future
        // For now, we don't have them in MOCK_QUESTIONS.
        // So we will return a default or random for the "Visual" phase unless we add questions.
    });

    // MOCK LOGIC based on answers hash to be deterministic at least
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const count = Object.keys(answers).length || 1;
    const avg = totalScore / count; // 1-5

    // Psuedo-random but stable based on input
    const anxietyScore = (avg * 1.5) % 5 + 1; // 1-7 scale usually, ECR-R is 1-7. let's map to 1-7.
    const avoidanceScore = ((6 - avg) * 1.5) % 5 + 1;

    // Determination
    // Threshold is usually 3.5 or 4.0 on 1-7 scale.
    // Secure: Low Anx, Low Avoid
    // Preoccupied: High Anx, Low Avoid
    // Dismissing: Low Anx, High Avoid
    // Fearful: High Anx, High Avoid

    const THRESHOLD = 3.5;
    const highAnx = anxietyScore >= THRESHOLD;
    const highAvoid = avoidanceScore >= THRESHOLD;

    let style: AttachmentResult['style'] = 'Secure';
    if (highAnx && highAvoid) style = 'Fearful';
    else if (highAnx && !highAvoid) style = 'Preoccupied';
    else if (!highAnx && highAvoid) style = 'Dismissing';

    return {
        anxietyScore,
        avoidanceScore,
        style
    };
}
