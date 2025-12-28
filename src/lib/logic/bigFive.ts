import { Question, AnalysisResult, BigFiveAspectScores, BigFiveDomain, BigFiveAspect } from '../types';

// Hypothetical norms (Mean = 3.5, SD = 0.7 for raw scores averaged per item)
// In a real app, these would be based on large-scale dataset statistics
const NORM_MEAN = 3.5;
const NORM_SD = 0.7;

// Function to convert raw average (1-5) to T-Score (Mean 50, SD 10)
function calculateTScore(rawAverage: number): number {
  const zScore = (rawAverage - NORM_MEAN) / NORM_SD;
  return Math.round(50 + (zScore * 10));
}

export function calculateScores(
  answers: Record<string, number>,
  questions: Question[]
): Omit<AnalysisResult, 'mode' | 'attachmentStyle'> {

  // Initialize accumulators
  const aspectSums: Record<BigFiveAspect, number> = {
    volatility: 0, withdrawal: 0,
    compassion: 0, politeness: 0,
    industriousness: 0, orderliness: 0,
    enthusiasm: 0, assertiveness: 0,
    intellect: 0, openness: 0
  };

  const aspectCounts: Record<BigFiveAspect, number> = {
    volatility: 0, withdrawal: 0,
    compassion: 0, politeness: 0,
    industriousness: 0, orderliness: 0,
    enthusiasm: 0, assertiveness: 0,
    intellect: 0, openness: 0
  };

  // Iterate through questions to calculate raw sums
  questions.forEach((q) => {
    const answer = answers[q.id];
    if (answer !== undefined) {
      // Reverse scoring if needed (1-5 scale)
      const score = q.reversed ? (6 - answer) : answer;

      aspectSums[q.aspect] += score;
      aspectCounts[q.aspect] += 1;
    }
  });

  // Calculate T-Scores for each aspect
  const tScoresRaw: Record<string, number> = {};

  (Object.keys(aspectSums) as BigFiveAspect[]).forEach((aspect) => {
    const count = aspectCounts[aspect];
    const sum = aspectSums[aspect];
    const average = count > 0 ? sum / count : 3; // Default to neutral if no answers
    tScoresRaw[aspect] = calculateTScore(average);
  });

  // Construct structured T-Scores object
  const tScores: BigFiveAspectScores = {
    neuroticism: {
      volatility: tScoresRaw.volatility,
      withdrawal: tScoresRaw.withdrawal
    },
    agreeableness: {
      compassion: tScoresRaw.compassion,
      politeness: tScoresRaw.politeness
    },
    conscientiousness: {
      industriousness: tScoresRaw.industriousness,
      orderliness: tScoresRaw.orderliness
    },
    extraversion: {
      enthusiasm: tScoresRaw.enthusiasm,
      assertiveness: tScoresRaw.assertiveness
    },
    openness: {
      intellect: tScoresRaw.intellect,
      openness: tScoresRaw.openness
    }
  };

  // Calculate Domain Scores (Average of 2 aspects) to determine SLOAN
  const domainScores = {
    N: (tScores.neuroticism.volatility + tScores.neuroticism.withdrawal) / 2,
    A: (tScores.agreeableness.compassion + tScores.agreeableness.politeness) / 2,
    C: (tScores.conscientiousness.industriousness + tScores.conscientiousness.orderliness) / 2,
    E: (tScores.extraversion.enthusiasm + tScores.extraversion.assertiveness) / 2,
    O: (tScores.openness.intellect + tScores.openness.openness) / 2,
  };

  // Generate SLOAN type string
  // Social/Reserved (E), Limbic/Calm (N), Organized/Unstructured (C), Accommodating/Egocentric (A), Non-curious/Inquisitive (O)
  // Note: SLOAN uses specific terminology. mapping based on standard Big 5 high/low.
  // S (Social, High E) / R (Reserved, Low E)
  // L (Limbic, High N) / C (Calm, Low N)
  // O (Organized, High C) / U (Unstructured, Low C)
  // A (Accommodating, High A) / E (Egocentric, Low A)
  // O: High -> I (Inquisitive), Low -> N (Non-curious)

  let sloan = "";
  sloan += domainScores.E >= 50 ? "S" : "R";
  sloan += domainScores.N >= 50 ? "L" : "C";
  sloan += domainScores.C >= 50 ? "O" : "U";
  sloan += domainScores.A >= 50 ? "A" : "E";
  sloan += domainScores.O >= 50 ? "I" : "N";

  return {
    sloanType: sloan,
    tScores
  };
}
