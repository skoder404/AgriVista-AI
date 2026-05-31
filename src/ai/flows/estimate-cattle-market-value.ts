'use server';
/**
 * @fileOverview Estimates the market value of cattle based on breed, age, and health score.
 *
 * - estimateCattleMarketValue - A function that estimates the market value of cattle.
 * - EstimateCattleMarketValueInput - The input type for the estimateCattleMarketValue function.
 * - EstimateCattleMarketValueOutput - The return type for the estimateCattleMarketValue function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateCattleMarketValueInputSchema = z.object({
  breed: z.string().describe('The breed of the cattle.'),
  age: z.number().describe('The age of the cattle in years.'),
  healthScore: z.number().describe('The health score of the cattle (0-100).'),
});
export type EstimateCattleMarketValueInput = z.infer<
  typeof EstimateCattleMarketValueInputSchema
>;

const EstimateCattleMarketValueOutputSchema = z.object({
  estimatedMarketValue: z
    .number()
    .describe('The estimated market value of the cattle in INR.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the estimated market value.'),
});
export type EstimateCattleMarketValueOutput = z.infer<
  typeof EstimateCattleMarketValueOutputSchema
>;

export async function estimateCattleMarketValue(
  input: EstimateCattleMarketValueInput
): Promise<EstimateCattleMarketValueOutput> {
  return estimateCattleMarketValueFlow(input);
}

const prompt = ai.definePrompt({
  name: 'estimateCattleMarketValuePrompt',
  input: {schema: EstimateCattleMarketValueInputSchema},
  output: {schema: EstimateCattleMarketValueOutputSchema},
  prompt: `You are an expert in cattle valuation in the Indian market. Based on the breed, age, and health score of the cattle, provide an estimated market value in Indian Rupees (INR) and explain your reasoning.\n\nBreed: {{{breed}}}\nAge: {{{age}}}\nHealth Score: {{{healthScore}}}\n\nEstimated Market Value (INR):\nReasoning: `,
});

const estimateCattleMarketValueFlow = ai.defineFlow(
  {
    name: 'estimateCattleMarketValueFlow',
    inputSchema: EstimateCattleMarketValueInputSchema,
    outputSchema: EstimateCattleMarketValueOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
