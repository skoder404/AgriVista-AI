// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview This file contains a Genkit flow that allows community users to upload images of local cattle breeds to improve the AI's breed recognition capabilities.
 *
 * The flow takes an image of a cattle breed and breed name as input, and returns a message confirming that the image has been submitted for review.
 *
 * @fileOverview
 * - `improveBreedRecognitionModel`: A function that handles the submission of cattle breed images for improving the breed recognition model.
 * - `ImproveBreedRecognitionModelInput`: The input type for the `improveBreedRecognitionModel` function.
 * - `ImproveBreedRecognitionModelOutput`: The return type for the `improveBreedRecognitionModel` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveBreedRecognitionModelInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a cattle breed, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  breedName: z.string().describe('The name of the cattle breed.'),
});

export type ImproveBreedRecognitionModelInput = z.infer<
  typeof ImproveBreedRecognitionModelInputSchema
>;

const ImproveBreedRecognitionModelOutputSchema = z.object({
  message: z
    .string()
    .describe(
      'A message confirming that the image has been submitted for review.'
    ),
});

export type ImproveBreedRecognitionModelOutput = z.infer<
  typeof ImproveBreedRecognitionModelOutputSchema
>;

export async function improveBreedRecognitionModel(
  input: ImproveBreedRecognitionModelInput
): Promise<ImproveBreedRecognitionModelOutput> {
  return improveBreedRecognitionModelFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveBreedRecognitionModelPrompt',
  input: {schema: ImproveBreedRecognitionModelInputSchema},
  output: {schema: ImproveBreedRecognitionModelOutputSchema},
  prompt: `You are an AI assistant that helps improve cattle breed recognition.

  The user has submitted an image of a cattle breed with the name "{{breedName}}".
  Please confirm that the image has been submitted for review and that it will be used to improve the breed recognition model.

  Photo: {{media url=photoDataUri}}

  Respond with a message confirming the submission.
  `,
});

const improveBreedRecognitionModelFlow = ai.defineFlow(
  {
    name: 'improveBreedRecognitionModelFlow',
    inputSchema: ImproveBreedRecognitionModelInputSchema,
    outputSchema: ImproveBreedRecognitionModelOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
