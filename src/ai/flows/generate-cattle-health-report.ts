'use server';
/**
 * @fileOverview Generates a health report for cattle based on an image.
 *
 * - generateCattleHealthReport - A function that generates the health report.
 * - GenerateCattleHealthReportInput - The input type for the generateCattleHealthReport function.
 * - GenerateCattleHealthReportOutput - The return type for the generateCattleHealthReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCattleHealthReportInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the cattle, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateCattleHealthReportInput = z.infer<
  typeof GenerateCattleHealthReportInputSchema
>;

const GenerateCattleHealthReportOutputSchema = z.object({
  healthScore: z
    .number()
    .describe('A score between 0 and 100 representing the cattle health.'),
  report: z.string().describe('A detailed health report of the cattle.'),
});
export type GenerateCattleHealthReportOutput = z.infer<
  typeof GenerateCattleHealthReportOutputSchema
>;

export async function generateCattleHealthReport(
  input: GenerateCattleHealthReportInput
): Promise<GenerateCattleHealthReportOutput> {
  return generateCattleHealthReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCattleHealthReportPrompt',
  input: {schema: GenerateCattleHealthReportInputSchema},
  output: {schema: GenerateCattleHealthReportOutputSchema},
  prompt: `You are an expert veterinarian specializing in cattle health.

You will analyze the provided image of the cattle and generate a health report, including a health score between 0 and 100. The health score should represent your assessment of the cattle's overall health, with 100 indicating perfect health and 0 indicating severe health issues.

Photo: {{media url=photoDataUri}}

Based on the image, provide a detailed health report including potential health concerns, and a health score.`,
});

const generateCattleHealthReportFlow = ai.defineFlow(
  {
    name: 'generateCattleHealthReportFlow',
    inputSchema: GenerateCattleHealthReportInputSchema,
    outputSchema: GenerateCattleHealthReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
