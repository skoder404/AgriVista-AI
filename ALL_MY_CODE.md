# ALL PROJECT CODE - MANUAL EXPORT

The download-as-zip feature is broken. Please copy the entire content of this file into a text editor on your local machine. From there, you can create the individual files and folders. Each file's content is clearly marked below. I am so sorry you have to do this.

---
---
---

# FILE: .env
# PATH: /.env
```

```

---
---
---

# FILE: README.md
# PATH: /README.md
```md
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
```

---
---
---

# FILE: apphosting.yaml
# PATH: /apphosting.yaml
```yaml
# Settings to manage and configure a Firebase App Hosting backend.
# https://firebase.google.com/docs/app-hosting/configure

runConfig:
  # Increase this value if you'd like to automatically spin up
  # more instances in response to increased traffic.
  maxInstances: 1
```

---
---
---

# FILE: components.json
# PATH: /components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---
---
---

# FILE: next.config.ts
# PATH: /next.config.ts
```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---
---
---

# FILE: package.json
# PATH: /package.json
```json
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.14.1",
    "@genkit-ai/next": "^1.14.1",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "genkit": "^1.14.1",
    "i18next": "^23.11.5",
    "lucide-react": "^0.475.0",
    "next": "15.3.3",
    "next-pwa": "^5.6.0",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "react-i18next": "^14.1.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "genkit-cli": "^1.14.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---
---
---

# FILE: tailwind.config.ts
# PATH: /tailwind.config.ts
```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['PT Sans', 'sans-serif'],
        headline: ['PT Sans', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
```

---
---
---

# FILE: tsconfig.json
# PATH: /tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---
---
---

# FILE: src/ai/dev.ts
# PATH: /src/ai/dev.ts
```ts
import { config } from 'dotenv';
config();

import '@/ai/flows/identify-cattle-breed.ts';
import '@/ai/flows/generate-cattle-health-report.ts';
import '@/ai/flows/improve-breed-recognition-model.ts';
import '@/ai/flows/estimate-cattle-market-value.ts';
```

---
---
---

# FILE: src/ai/genkit.ts
# PATH: /src/ai/genkit.ts
```ts
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({apiVersion: 'v1beta'})],
  model: 'googleai/gemini-2.5-flash',
});
```

---
---
---

# FILE: src/ai/flows/estimate-cattle-market-value.ts
# PATH: /src/ai/flows/estimate-cattle-market-value.ts
```ts
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
```

---
---
---

# FILE: src/ai/flows/generate-cattle-health-report.ts
# PATH: /src/ai/flows/generate-cattle-health-report.ts
```ts
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
```

---
---
---

# FILE: src/ai/flows/identify-cattle-breed.ts
# PATH: /src/ai/flows/identify-cattle-breed.ts
```ts
'use server';

/**
 * @fileOverview A cattle breed identification AI agent.
 *
 * - identifyCattleBreed - A function that handles the cattle breed identification process.
 * - IdentifyCattleBreedInput - The input type for the identifyCattleBreed function.
 * - IdentifyCattleBreedOutput - The return type for the identifyCattleBreed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyCattleBreedInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of cattle, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type IdentifyCattleBreedInput = z.infer<typeof IdentifyCattleBreedInputSchema>;

const IdentifyCattleBreedOutputSchema = z.object({
  breed: z.string().describe('The identified breed of the cattle.'),
  confidence: z
    .number()
    .describe('The confidence level of the breed identification (0-1).'),
});
export type IdentifyCattleBreedOutput = z.infer<typeof IdentifyCattleBreedOutputSchema>;

export async function identifyCattleBreed(
  input: IdentifyCattleBreedInput
): Promise<IdentifyCattleBreedOutput> {
  return identifyCattleBreedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifyCattleBreedPrompt',
  input: {schema: IdentifyCattleBreedInputSchema},
  output: {schema: IdentifyCattleBreedOutputSchema},
  prompt: `You are an expert in identifying cattle breeds. Analyze the image provided to determine the breed of the cattle.

  Provide the breed name and a confidence level (0-1) for your identification.

  Cattle Image: {{media url=photoDataUri}}`,
  model: 'googleai/gemini-2.5-flash',
});

const identifyCattleBreedFlow = ai.defineFlow(
  {
    name: 'identifyCattleBreedFlow',
    inputSchema: IdentifyCattleBreedInputSchema,
    outputSchema: IdentifyCattleBreedOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
```

---
---
---

# FILE: src/ai/flows/improve-breed-recognition-model.ts
# PATH: /src/ai/flows/improve-breed-recognition-model.ts
```ts
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
```

---
---
---

# FILE: src/app/globals.css
# PATH: /src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 60 56% 91%;
    --foreground: 25 30% 15%;
    --card: 60 50% 95%;
    --card-foreground: 25 30% 15%;
    --popover: 60 50% 95%;
    --popover-foreground: 25 30% 15%;
    --primary: 25 56% 41%;
    --primary-foreground: 30 50% 96%;
    --secondary: 60 30% 85%;
    --secondary-foreground: 25 56% 41%;
    --muted: 60 30% 88%;
    --muted-foreground: 25 30% 35%;
    --accent: 120 73% 75%;
    --accent-foreground: 120 50% 20%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 60 20% 80%;
    --input: 60 20% 83%;
    --ring: 25 56% 41%;
    --chart-1: 25 56% 41%;
    --chart-2: 120 40% 50%;
    --chart-3: 60 30% 85%;
    --chart-4: 25 40% 60%;
    --chart-5: 120 30% 70%;
    --radius: 0.5rem;

    --sidebar-background: 60 50% 95%;
    --sidebar-foreground: 25 30% 15%;
    --sidebar-primary: 25 56% 41%;
    --sidebar-primary-foreground: 30 50% 96%;
    --sidebar-accent: 60 30% 88%;
    --sidebar-accent-foreground: 25 30% 15%;
    --sidebar-border: 60 20% 80%;
    --sidebar-ring: 25 56% 41%;
  }

  .dark {
    --background: 25 10% 10%;
    --foreground: 60 30% 88%;
    --card: 25 10% 15%;
    --card-foreground: 60 30% 88%;
    --popover: 25 10% 15%;
    --popover-foreground: 60 30% 88%;
    --primary: 25 56% 51%;
    --primary-foreground: 20 20% 98%;
    --secondary: 25 10% 20%;
    --secondary-foreground: 60 30% 88%;
    --muted: 25 10% 20%;
    --muted-foreground: 60 20% 65%;
    --accent: 120 50% 40%;
    --accent-foreground: 120 80% 90%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 25 10% 25%;
    --input: 25 10% 25%;
    --ring: 25 56% 51%;
    --chart-1: 25 56% 51%;
    --chart-2: 120 50% 40%;
    --chart-3: 25 10% 20%;
    --chart-4: 25 40% 70%;
    --chart-5: 120 40% 60%;

    --sidebar-background: 25 10% 15%;
    --sidebar-foreground: 60 30% 88%;
    --sidebar-primary: 25 56% 51%;
    --sidebar-primary-foreground: 20 20% 98%;
    --sidebar-accent: 25 10% 20%;
    --sidebar-accent-foreground: 60 30% 88%;
    --sidebar-border: 25 10% 25%;
    --sidebar-ring: 25 56% 51%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

---
---
---

# FILE: src/app/layout.tsx
# PATH: /src/app/layout.tsx
```tsx
import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "./providers";

export const metadata: Metadata = {
  title: "AgriVista AI",
  description: "An AI-powered app for cattle management, breed recognition, health analysis, and market valuation.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#fff" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
```

---
---
---

# FILE: src/app/page.tsx
# PATH: /src/app/page.tsx
```tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles, HeartPulse, DollarSign, Users, GitFork } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    titleKey: 'breedRecognition.title',
    descriptionKey: 'breedRecognition.description',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    titleKey: 'aiHealthScore.title',
    descriptionKey: 'aiHealthScore.description',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    titleKey: 'marketPricePredictor.title',
    descriptionKey: 'marketPricePredictor.description',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    titleKey: 'expertConnect.title',
    descriptionKey: 'expertConnect.description',
  },
  {
    icon: <GitFork className="h-8 w-8 text-primary" />,
    titleKey: 'communityInput.title',
    descriptionKey: 'communityInput.description',
  },
];

export default function Home() {
  const { t } = useTranslation();
  const heroImage = PlaceHolderImages.find(img => img.id === 'home-hero-cow');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-headline font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                {t('appTitle')}
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl">
                {t('appSubtitle')}
              </p>
              <Button asChild size="lg">
                <Link href="/identify">
                  {t('getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                {t('featuresTitle')}
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                {t('featuresSubtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.titleKey} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0 mb-4">
                    {feature.icon}
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <CardTitle className="text-xl font-headline mb-2">{t(feature.titleKey)}</CardTitle>
                    <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} {t('appTitle')}. {t('allRightsReserved')}.</p>
        </div>
      </footer>
    </div>
  );
}
```

---
---
---

# FILE: src/app/providers.tsx
# PATH: /src/app/providers.tsx
```tsx
"use client";

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from './providers/language-provider';

export function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {children}
        </SidebarInset>
        <Toaster />
      </SidebarProvider>
    </LanguageProvider>
  );
}
```

---
---
---

# FILE: src/app/providers/language-provider.tsx
# PATH: /src/app/providers/language-provider.tsx
```tsx
"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export function LanguageProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
```

---
---
---

# FILE: src/app/contribute/page.tsx
# PATH: /src/app/contribute/page.tsx
```tsx
"use client";

import { useState, useTransition } from "react";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloud, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { improveBreedRecognitionModel } from "@/ai/flows/improve-breed-recognition-model";
import { useTranslation } from "react-i18next";

export default function ContributePage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const contributeSchema = z.object({
    breedName: z.string().min(2, { message: t('contribute.breedNameError') }),
    photo: z.any().refine(file => file instanceof File, { message: t('contribute.photoError') }),
  });

  const form = useForm<z.infer<typeof contributeSchema>>({
    resolver: zodResolver(contributeSchema),
    defaultValues: {
      breedName: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("photo", file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: z.infer<typeof contributeSchema>) => {
    startTransition(async () => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(values.photo);
        reader.onload = async (e) => {
          const photoDataUri = e.target?.result as string;
          if (photoDataUri) {
            const result = await improveBreedRecognitionModel({
              photoDataUri,
              breedName: values.breedName,
            });
            toast({
              title: t('contribute.submissionSuccessTitle'),
              description: result.message,
            });
            form.reset();
            setImagePreview(null);
          }
        };
      } catch (error) {
        toast({
          variant: "destructive",
          title: t('contribute.submissionFailedTitle'),
          description: t('contribute.submissionFailedDescription'),
        });
      }
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <PageHeader
        title={t('contribute.pageTitle')}
        description={t('contribute.pageDescription')}
      />
      <div className="max-w-2xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle>{t('contribute.formTitle')}</CardTitle>
                <CardDescription>
                  {t('contribute.formDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="breedName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contribute.breedNameLabel')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contribute.breedNamePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="photo"
                  render={() => (
                     <FormItem>
                      <FormLabel>{t('contribute.photoLabel')}</FormLabel>
                      <FormControl>
                        <div>
                          <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted" onClick={() => document.getElementById('photo-upload')?.click()}>
                            {imagePreview ? (
                              <Image src={imagePreview} alt={t('contribute.imagePreviewAlt')} width={400} height={260} className="object-contain h-full w-full" />
                            ) : (
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">{t('identify.clickToUpload')}</span></p>
                                <p className="text-xs text-muted-foreground">{t('identify.fileTypes')}</p>
                              </div>
                            )}
                          </div>
                          <Input id="photo-upload" type="file" accept="image/png, image/jpeg, image/webp" className="hidden" onChange={handleFileChange} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? <Loader2 className="animate-spin mr-2" /> : null}
                  {t('contribute.submitButton')}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
```

---
---
---

# FILE: src/app/experts/page.tsx
# PATH: /src/app/experts/page.tsx
```tsx
"use client";

import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from 'react-i18next';

const experts = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    title: 'experts.vetTitle',
    specialties: ['experts.specGeneral', 'experts.specNutrition'],
    location: 'Jaipur, Rajasthan',
    avatarId: 'expert-avatar-2',
  },
  {
    id: 2,
    name: 'Anil Kumar Patel',
    title: 'experts.girSpecialistTitle',
    specialties: ['experts.specBreed', 'experts.specGenetics'],
    location: 'Rajkot, Gujarat',
    avatarId: 'expert-avatar-1',
  },
  {
    id: 3,
    name: 'Sandeep Reddy',
    title: 'experts.dairyConsultantTitle',
    specialties: ['experts.specMilk', 'experts.specFarm'],
    location: 'Karnal, Haryana',
    avatarId: 'expert-avatar-3',
  },
];

export default function ExpertsPage() {
  const { t } = useTranslation();
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <PageHeader
        title={t('experts.pageTitle')}
        description={t('experts.pageDescription')}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => {
          const avatarImage = PlaceHolderImages.find(img => img.id === expert.avatarId);
          return (
            <Card key={expert.id} className="flex flex-col">
              <CardHeader className="items-center text-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                  {avatarImage && (
                    <AvatarImage src={avatarImage.imageUrl} alt={expert.name} data-ai-hint={avatarImage.imageHint} />
                  )}
                  <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{expert.name}</CardTitle>
                <p className="text-muted-foreground">{t(expert.title)}</p>
                <p className="text-sm text-muted-foreground">{expert.location}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-sm mb-2">{t('experts.specialtiesLabel')}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {expert.specialties.map((spec) => (
                      <Badge key={spec} variant="secondary">{t(spec)}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" /> {t('experts.emailButton')}
                </Button>
                <Button className="w-full">
                  <Phone className="mr-2 h-4 w-4" /> {t('experts.callButton')}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
```

---
---
---

# FILE: src/app/identify/page.tsx
# PATH: /src/app/identify/page.tsx
```tsx
"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import {
  UploadCloud,
  Sparkles,
  HeartPulse,
  DollarSign,
  Loader2,
  Info,
  BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/page-header";
import { useToast } from "@/hooks/use-toast";
import {
  generateCattleHealthReport,
  GenerateCattleHealthReportOutput,
} from "@/ai/flows/generate-cattle-health-report";
import {
  estimateCattleMarketValue,
  EstimateCattleMarketValueOutput,
} from "@/ai/flows/estimate-cattle-market-value";
import {
  identifyCattleBreed,
  IdentifyCattleBreedOutput,
} from "@/ai/flows/identify-cattle-breed";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";


export default function IdentifyPage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [breedResult, setBreedResult] =
    useState<IdentifyCattleBreedOutput | null>(null);
  const [healthReport, setHealthReport] =
    useState<GenerateCattleHealthReportOutput | null>(null);
  const [marketValue, setMarketValue] =
    useState<EstimateCattleMarketValueOutput | null>(null);
  
  const [age, setAge] = useState<string>("");

  const [loadingStates, setLoadingStates] = useState({
    breed: false,
    health: false,
    value: false,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUri = e.target?.result as string;
        setImagePreview(dataUri);
        // Reset results when new image is uploaded
        setBreedResult(null);
        setHealthReport(null);
        setMarketValue(null);
        setAge("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartAnalysis = () => {
    if (!imagePreview) {
      toast({ variant: "destructive", title: t("identify.uploadError") });
      return;
    }
    startTransition(async () => {
      setBreedResult(null);
      setHealthReport(null);
      setMarketValue(null);
      setLoadingStates({
        breed: true,
        health: true,
        value: false,
      });

      try {
        const breedPromise = identifyCattleBreed({
          photoDataUri: imagePreview,
        });

        const healthPromise = generateCattleHealthReport({
          photoDataUri: imagePreview,
        });

        const [breedRes, healthRes] = await Promise.all([breedPromise, healthPromise]);
        
        setBreedResult(breedRes);
        setHealthReport(healthRes);

      } catch (error) {
        console.error(error);
        toast({
            variant: "destructive",
            title: t("identify.analysisFailedTitle"),
            description:
                error instanceof Error
                ? error.message
                : t("identify.analysisFailedDescription"),
        });
      } finally {
          setLoadingStates({
            breed: false,
            health: false,
            value: false,
        });
      }
    });
  };

  const handleEstimateValue = () => {
    if (!breedResult || !healthReport || !age) {
      toast({
        variant: "destructive",
        title: t("identify.missingInfoTitle"),
        description: t("identify.missingInfoDescription"),
      });
      return;
    }
    startTransition(async () => {
      setLoadingStates((prev) => ({ ...prev, value: true }));
      setMarketValue(null);
      try {
        const result = await estimateCattleMarketValue({
          breed: breedResult.breed,
          age: Number(age),
          healthScore: healthReport.healthScore,
        });
        setMarketValue(result);
      } catch (error) {
        console.error(error);
        toast({
            variant: "destructive",
            title: t("identify.estimationErrorTitle"),
            description: t("identify.estimationErrorDescription"),
        });
      } finally {
        setLoadingStates((prev) => ({ ...prev, value: false }));
      }
    });
  };

  const anyLoading =
    Object.values(loadingStates).some((s) => s) || isPending;
  const analysisStarted = Boolean(breedResult || healthReport || anyLoading);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <PageHeader
        title={t("identify.pageTitle")}
        description={t("identify.pageDescription")}
      />
      
      <div className="grid gap-8 lg:grid-cols-2 mt-4">
        {/* Left column: upload + start */}
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t("identify.step1Title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt={t("identify.cattlePreviewAlt")}
                    width={400}
                    height={260}
                    className="object-contain h-full w-full"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">
                        {t("identify.clickToUpload")}
                      </span>{" "}
                      {t("identify.dragAndDrop")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("identify.fileTypes")}
                    </p>
                  </div>
                )}
              </div>

              <Input
                id="file-upload"
                type="file"
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
                onChange={handleFileChange}
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleStartAnalysis}
                disabled={!imagePreview || anyLoading}
                className="w-full"
              >
                {loadingStates.breed || loadingStates.health ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {loadingStates.breed || loadingStates.health
                  ? t("identify.analyzingButton")
                  : t("identify.startAnalysisButton")}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right column: empty state + results */}
        <div className="space-y-8 lg:col-span-1">
          {!analysisStarted && (
            <Card className="h-full flex flex-col justify-center items-center text-center p-8">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <CardTitle>{t("identify.resultsTitle")}</CardTitle>
                <CardDescription className="mt-2 max-w-xs">
                  {t("identify.resultsDescription")}
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          {(loadingStates.breed || loadingStates.health) &&
            !breedResult &&
            !healthReport && (
              <Card>
                <CardContent className="p-6 flex items-center justify-center text-muted-foreground">
                  <Loader2 className="animate-spin mr-2" />{" "}
                  {t("identify.analyzingButton")}
                </CardContent>
              </Card>
            )}

          {breedResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit className="text-primary" />
                  {t("identify.step2Title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground">
                    {t("identify.identifiedBreed")}
                  </p>
                  <p className="text-lg font-bold">{breedResult.breed}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground">
                    {t("identify.confidenceScore")}
                  </p>
                  <Badge
                    variant={
                      breedResult.confidence > 0.8 ? "default" : "secondary"
                    }
                  >
                    {(breedResult.confidence * 100).toFixed(0)}%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}

          {healthReport && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="text-primary" />{" "}
                  {t("identify.step3Title")}
                </CardTitle>
                <CardDescription>
                  {t("identify.healthReportDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-primary">
                      {t("identify.healthScore")}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {healthReport.healthScore}/100
                    </span>
                  </div>
                  <Progress value={healthReport.healthScore} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    {t("identify.vetNotes")}:
                  </h4>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                    {healthReport.report}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-4">
                  <CardDescription>
                    {t("identify.ageInputDescription")}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder={t("identify.agePlaceholder")}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      disabled={loadingStates.value}
                      className="w-32"
                    />
                    <Button
                      onClick={handleEstimateValue}
                      disabled={loadingStates.value || !age}
                      className="flex-1"
                    >
                      {loadingStates.value ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <DollarSign className="mr-2 h-4 w-4" />
                      )}
                      {t("identify.estimateButton")}
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          )}

          {loadingStates.value && !marketValue && (
            <Card>
              <CardContent className="p-6 flex items-center justify-center text-muted-foreground">
                <Loader2 className="animate-spin mr-2" />{" "}
                {t("identify.estimatingValue")}
              </CardContent>
            </Card>
          )}

          {marketValue && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="text-primary" />{" "}
                  {t("identify.step4Title")}
                </CardTitle>
                <CardDescription>
                  {t("identify.marketValueDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">
                    Rs.{" "}
                    {marketValue.estimatedMarketValue.toLocaleString("en-IN")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-1">
                    <Info className="h-4 w-4" /> {t("identify.reasoning")}:
                  </h4>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                    {marketValue.reasoning}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
```

---
---
---

# FILE: src/app/marketplace/page.tsx
# PATH: /src/app/marketplace/page.tsx
```tsx
"use client";

import { useState, useMemo, useTransition } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Heart, MapPin, Tag, UploadCloud, Loader2, PlusCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const initialCattleForSale = [
  {
    id: 1,
    breed: 'Gir',
    age: 3,
    price: 65000,
    location: 'Rajkot, Gujarat',
    healthScore: 95,
    imageId: 'gir-cow-1',
  },
  {
    id: 2,
    breed: 'Sahiwal',
    age: 4,
    price: 72000,
    location: 'Karnal, Haryana',
    healthScore: 92,
    imageId: 'sahiwal-cow-1',
  },
  {
    id: 3,
    breed: 'Red Sindhi',
    age: 2.5,
    price: 68000,
    location: 'Bikaner, Rajasthan',
    healthScore: 98,
    imageId: 'red-sindhi-cow-1',
  },
    {
    id: 4,
    breed: 'Gir',
    age: 5,
    price: 80000,
    location: 'Anand, Gujarat',
    healthScore: 90,
    imageId: 'gir-cow-2',
  },
  {
    id: 5,
    breed: 'Sahiwal',
    age: 3.5,
    price: 75000,
    location: 'Ludhiana, Punjab',
    healthScore: 94,
    imageId: 'sahiwal-cow-2',
  },
  {
    id: 6,
    breed: 'Tharparkar',
    age: 4,
    price: 62000,
    location: 'Jaisalmer, Rajasthan',
    healthScore: 88,
    imageId: 'tharparkar-cow-1',
  },
];

export default function MarketplacePage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [cattleForSale, setCattleForSale] = useState(initialCattleForSale);
  const [breedFilter, setBreedFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const sellCattleSchema = z.object({
    breed: z.string().min(2, { message: t('marketplace.breedError') }),
    age: z.coerce.number().min(0, { message: t('marketplace.ageError') }),
    price: z.coerce.number().min(1, { message: t('marketplace.priceError') }),
    location: z.string().min(2, { message: t('marketplace.locationError') }),
    photo: z.any().refine(file => file instanceof File, { message: t('marketplace.photoError') }),
  });
  
  const form = useForm<z.infer<typeof sellCattleSchema>>({
    resolver: zodResolver(sellCattleSchema),
    defaultValues: {
      breed: "",
      age: 0,
      price: 0,
      location: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("photo", file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: z.infer<typeof sellCattleSchema>) => {
    startTransition(() => {
      const reader = new FileReader();
      reader.readAsDataURL(values.photo);
      reader.onload = (e) => {
        const newCattle = {
          id: cattleForSale.length + 1,
          breed: values.breed,
          age: values.age,
          price: values.price,
          location: values.location,
          healthScore: 90, // Placeholder health score
          imageUrl: e.target?.result as string, // Use the uploaded image
          imageHint: `${values.breed} cow`,
        };
        
        // Add to state, would be a DB call in a real app
        setCattleForSale(prev => [newCattle, ...prev]);

        toast({
          title: t("marketplace.listingSuccessTitle"),
          description: t("marketplace.listingSuccessDescription", { breed: values.breed }),
        });

        // Reset form and dialog
        form.reset();
        setImagePreview(null);
        setIsDialogOpen(false);
      }
    });
  };
  
  const allBreeds = useMemo(() => ['All', ...Array.from(new Set(initialCattleForSale.map(c => c.breed)))], []);
  const allLocations = useMemo(() => ['All', ...Array.from(new Set(initialCattleForSale.map(c => c.location)))], []);

  const filteredCattle = useMemo(() => {
    return cattleForSale.filter(cattle => {
      const breedMatch = breedFilter === 'All' || cattle.breed === breedFilter;
      const locationMatch = locationFilter === 'All' || cattle.location === locationFilter;
      const priceMatch = cattle.price >= priceRange[0] && cattle.price <= priceRange[1];
      return breedMatch && locationMatch && priceMatch;
    });
  }, [cattleForSale, breedFilter, locationFilter, priceRange]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title={t('marketplace.pageTitle')}
          description={t('marketplace.pageDescription')}
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              {t('marketplace.sellCattle')}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <DialogHeader>
                  <DialogTitle>{t('marketplace.dialogTitle')}</DialogTitle>
                  <DialogDescription>
                    {t('marketplace.dialogDescription')}
                  </DialogDescription>
                </DialogHeader>
                
                <FormField
                  control={form.control}
                  name="photo"
                  render={() => (
                     <FormItem>
                      <FormLabel>{t('marketplace.photoLabel')}</FormLabel>
                      <FormControl>
                        <div>
                          <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted" onClick={() => document.getElementById('cattle-photo-upload')?.click()}>
                            {imagePreview ? (
                              <Image src={imagePreview} alt={t('marketplace.imagePreviewAlt')} width={300} height={190} className="object-contain h-full w-full" />
                            ) : (
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold">{t('identify.clickToUpload')}</span></p>
                                <p className="text-xs text-muted-foreground">{t('identify.fileTypes')}</p>
                              </div>
                            )}
                          </div>
                          <Input id="cattle-photo-upload" type="file" accept="image/png, image/jpeg, image/webp" className="hidden" onChange={handleFileChange} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField control={form.control} name="breed" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('marketplace.dialogBreedLabel')}</FormLabel>
                        <FormControl><Input placeholder={t('marketplace.dialogBreedPlaceholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  <FormField control={form.control} name="age" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('marketplace.dialogAgeLabel')}</FormLabel>
                        <FormControl><Input type="number" placeholder={t('marketplace.dialogAgePlaceholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField control={form.control} name="price" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('marketplace.dialogPriceLabel')}</FormLabel>
                        <FormControl><Input type="number" placeholder={t('marketplace.dialogPricePlaceholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('marketplace.dialogLocationLabel')}</FormLabel>
                        <FormControl><Input placeholder={t('marketplace.dialogLocationPlaceholder')} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                </div>
                
                <DialogFooter>
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? <Loader2 className="animate-spin mr-2" /> : null}
                    {t('marketplace.dialogListButton')}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card className="mb-8">
        <CardContent className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('marketplace.breedFilterLabel')}</label>
            <Select value={breedFilter} onValueChange={setBreedFilter}>
              <SelectTrigger>
                <SelectValue placeholder={t('marketplace.breedFilterPlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                {allBreeds.map(breed => <SelectItem key={breed} value={breed}>{breed === 'All' ? t('marketplace.allBreeds') : breed}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('marketplace.locationFilterLabel')}</label>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder={t('marketplace.locationFilterPlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                {allLocations.map(location => <SelectItem key={location} value={location}>{location === 'All' ? t('marketplace.allLocations') : location}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 col-span-1 sm:col-span-2 lg:col-span-2">
             <label className="text-sm font-medium">{t('marketplace.priceRangeLabel')}: Rs. {priceRange[0].toLocaleString()} - Rs. {priceRange[1].toLocaleString()}</label>
            <Slider
              min={0}
              max={100000}
              step={1000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCattle.map(cattle => {
          const listingImage = PlaceHolderImages.find(img => img.id === cattle.imageId);
          const imageUrl = cattle.imageUrl || (listingImage ? listingImage.imageUrl : '');
          const imageHint = cattle.imageHint || (listingImage ? listingImage.imageHint : 'cattle');

          return (
            <Card key={cattle.id} className="flex flex-col overflow-hidden">
              {imageUrl && (
                <div className="relative h-48 w-full">
                  <Image 
                    src={imageUrl} 
                    alt={cattle.breed}
                    fill
                    className="object-cover"
                    data-ai-hint={imageHint}
                  />
                  <Badge variant="destructive" className="absolute top-2 right-2 flex items-center gap-1">
                      <Heart className="h-3 w-3" /> {t('marketplace.aiHealth')} {cattle.healthScore}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{cattle.breed}</CardTitle>
                <CardDescription>{t('marketplace.yearsOld', { count: cattle.age })}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  <span className="text-lg font-bold text-primary">Rs. {cattle.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{cattle.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{t('marketplace.viewDetailsButton')}</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
       {filteredCattle.length === 0 && (
          <div className="text-center py-12 col-span-full">
            <p className="text-muted-foreground">{t('marketplace.noResults')}</p>
          </div>
       )}
    </div>
  );
}
```

---
---
---

# FILE: src/lib/utils.ts
# PATH: /src/lib/utils.ts
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---
---
---

# FILE: src/lib/i18n.ts
# PATH: /src/lib/i18n.ts
```ts
"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';
import bn from '@/locales/bn.json';
import te from '@/locales/te.json';
import mr from '@/locales/mr.json';
import ta from '@/locales/ta.json';
import gu from '@/locales/gu.json';
import kn from '@/locales/kn.json';
import ml from '@/locales/ml.json';
import pa from '@/locales/pa.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hi,
      },
      bn: {
        translation: bn,
      },
      te: {
        translation: te,
      },
      mr: {
        translation: mr,
      },
      ta: {
        translation: ta,
      },
      gu: {
        translation: gu,
      },
      kn: {
        translation: kn,
      },
      ml: {
        translation: ml,
      },
      pa: {
        translation: pa,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

---
---
---

# FILE: src/lib/placeholder-images.json
# PATH: /src/lib/placeholder-images.json
```json
{
  "placeholderImages": [
    {
      "id": "home-hero-cow",
      "description": "A majestic Indian cow in a lush green field under a clear blue sky, looking at the camera. The style should be a high-quality, vibrant photograph.",
      "imageUrl": "https://picsum.photos/seed/101/1200/800",
      "imageHint": "indian cow"
    },
    {
      "id": "identify-cow-placeholder",
      "description": "A placeholder graphic inviting users to upload a cow photo",
      "imageUrl": "https://picsum.photos/seed/2/600/400",
      "imageHint": "cattle farm"
    },
    {
      "id": "contribute-cow",
      "description": "A local Indian cow breed in a rural setting",
      "imageUrl": "https://picsum.photos/seed/3/600/400",
      "imageHint": "gir cow"
    },
    {
      "id": "expert-avatar-1",
      "description": "Avatar for a male veterinary expert",
      "imageUrl": "https://picsum.photos/seed/4/100/100",
      "imageHint": "indian man portrait"
    },
    {
      "id": "expert-avatar-2",
      "description": "Avatar for a female veterinary expert",
      "imageUrl": "https://picsum.photos/seed/5/100/100",
      "imageHint": "indian woman portrait"
    },
    {
      "id": "expert-avatar-3",
      "description": "Avatar for a male breed specialist",
      "imageUrl": "https://picsum.photos/seed/6/100/100",
      "imageHint": "man portrait"
    },
    {
      "id": "gir-cow-1",
      "description": "A healthy Gir cow for sale in a marketplace",
      "imageUrl": "https://picsum.photos/seed/11/600/400",
      "imageHint": "gir cow"
    },
    {
      "id": "gir-cow-2",
      "description": "A healthy Gir cow for sale in a marketplace",
      "imageUrl": "https://picsum.photos/seed/12/600/400",
      "imageHint": "gir cow field"
    },
    {
      "id": "sahiwal-cow-1",
      "description": "A healthy Sahiwal cow for sale in a marketplace",
      "imageUrl": "https://picsum.photos/seed/13/600/400",
      "imageHint": "sahiwal cow"
    },
    {
      "id": "sahiwal-cow-2",
      "description": "A healthy Sahiwal cow for sale in a marketplace",
      "imageUrl": "https://picsum.photos/seed/14/600/400",
      "imageHint": "sahiwal cow farm"
    },
    {
      "id": "red-sindhi-cow-1",
      "description": "A healthy Red Sindhi cow for sale in a marketplace",
      "imageUrl": "https://picsum.photos/seed/15/600/400",
      "imageHint": "red sindhi cow"
    },
    {
      "id": "tharparkar-cow-1",
      "description": "A healthy Tharparkar cow for sale in a marketplace",
      "imageUrl": "https://picsum.photos/seed/16/600/400",
      "imageHint": "tharparkar cow"
    }
  ]
}
```

---
---
---

# FILE: src/lib/placeholder-images.ts
# PATH: /src/lib/placeholder-images.ts
```ts
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
```

---
---
---

# FILE: src/hooks/use-mobile.tsx
# PATH: /src/hooks/use-mobile.tsx
```tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
```

---
---
---

# FILE: src/hooks/use-toast.ts
# PATH: /src/hooks/use-toast.ts
```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```

---
---
---

# FILE: src/locales/bn.json
# PATH: /src/locales/bn.json
```json
{
    "appTitle": "এগ্রিভিস্টা এআই",
    "appSubtitle": "আধুনিক গবাদি পশু ব্যবস্থাপনার জন্য এআই-চালিত অন্তর্দৃষ্টি। একটি স্বাস্থ্যকর, আরও মূল্যবান পালের জন্য আপনার ডিজিটাল আয়না।",
    "getStarted": "শুরু করুন",
    "featuresTitle": "কৃষির ভবিষ্যতের জন্য বৈশিষ্ট্য",
    "featuresSubtitle": "আপনার গবাদি পশু সম্পর্কে অবগত সিদ্ধান্ত নিতে কৃত্রিম বুদ্ধিমত্তার শক্তি ব্যবহার করুন।",
    "breedRecognition.title": "জাত সনাক্তকরণ",
    "breedRecognition.description": "আমাদের উন্নত এআই ব্যবহার করে একটি ছবি থেকে तुरंत গবাদি পশুর জাত সনাক্ত করুন।",
    "aiHealthScore.title": "এআই স্বাস্থ্য স্কোর",
    "aiHealthScore.description": "শুধু একটি ছবি আপলোড করে আপনার গবাদি পশুর জন্য একটি விரிவான স্বাস্থ্য প্রতিবেদন এবং স্কোর পান।",
    "marketPricePredictor.title": "বাজার মূল্য পূর্বাভাসক",
    "marketPricePredictor.description": "জাত, বয়স এবং স্বাস্থ্যের উপর ভিত্তি করে আপনার গবাদি পশুর বাজার মূল্য অনুমান করুন।",
    "expertConnect.title": "বিশেষজ্ঞ সংযোগ",
    "expertConnect.description": "পেশাদার পরামর্শের জন্য স্থানীয় पशु चिकित्सक এবং জাত বিশেষজ্ঞদের সাথে সংযোগ করুন।",
    "communityInput.title": "קהילה ഇൻപുട്ട്",
    "communityInput.description": "স্থানীয় এবং বিরল গবাদি পশুর ছবি অবদান রেখে আমাদের এআই উন্নত করতে সহায়তা করুন।",
    "allRightsReserved": "সর্বস্বত্ব সংরক্ষিত",
    "home": "হোম",
    "identifyAndAnalyze": "শনাক্ত করুন এবং বিশ্লেষণ করুন",
    "marketplace": "بازار",
    "contributeData": "ডেটা অবদান রাখুন",
    "findExperts": "বিশেষজ্ঞ খুঁজুন",
    "bharatPashudhan": "ভারত পশুধন",
    "language": "ভাষা",

    "identify.pageTitle": "গবাদি পশু সনাক্ত করুন ও বিশ্লেষণ করুন",
    "identify.pageDescription": "আপনার গবাদি পশুর এআই-চালিত বিশ্লেষণ শুরু করতে একটি ছবি আপলোড করুন।",
    "identify.step1Title": "১. গবাদি পশুর ছবি আপলোড করুন",
    "identify.clickToUpload": "আপলোড করতে ক্লিক করুন",
    "identify.dragAndDrop": "অথবা টেনে আনুন",
    "identify.fileTypes": "PNG, JPG, অথবা WEBP",
    "identify.cattlePreviewAlt": "গবাদি পশুর পূর্বরূপ",
    "identify.startAnalysisButton": "বিশ্লেষণ শুরু করুন",
    "identify.analyzingButton": "বিশ্লেষণ চলছে...",
    "identify.resultsTitle": "এমএল বিশ্লেষণ ফলাফল",
    "identify.resultsDescription": "আপনার গবাদি পশুর জাত সনাক্তকরণ, স্বাস্থ্য প্রতিবেদন এবং বাজার মূল্য এখানে প্রদর্শিত হবে।",
    "identify.step2Title": "২. জাত সনাক্তকরণ",
    "identify.identifiedBreed": "শনাক্তকৃত জাত",
    "identify.confidenceScore": "আত্মবিশ্বাস স্কোর",
    "identify.step3Title": "৩. স্বাস্থ্য প্রতিবেদন",
    "identify.healthReportDescription": "এআই-উৎপাদিত স্বাস্থ্য মূল্যায়ন।",
    "identify.healthScore": "স্বাস্থ্য স্কোর",
    "identify.vetNotes": "পশুচিকিৎসকের নোট",
    "identify.ageInputDescription": "বাজার মূল্য গণনা করতে বয়স লিখুন।",
    "identify.agePlaceholder": "বয়স (বছর)",
    "identify.estimateButton": "মূল্য অনুমান করুন",
    "identify.estimatingValue": "বাজার মূল্য অনুমান করা হচ্ছে...",
    "identify.step4Title": "৪. আনুমানিক বাজার মূল্য",
    "identify.marketValueDescription": "জাত, বয়স এবং স্বাস্থ্যের উপর ভিত্তি করে।",
    "identify.reasoning": "যুক্তি",
    "identify.uploadError": "প্রথমে একটি ছবি আপলোড করুন।",
    "identify.analysisFailedTitle": "বিশ্লেষণ ব্যর্থ হয়েছে",
    "identify.analysisFailedDescription": "ছবিটি বিশ্লেষণ করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
    "identify.missingInfoTitle": "তথ্য অনুপস্থিত",
    "identify.missingInfoDescription": "মূল্য অনুমান করার জন্য জাত, স্বাস্থ্য স্কোর এবং বয়স প্রয়োজন।",
    "identify.estimationErrorTitle": "বাজার মূল্য অনুমান করতে ত্রুটি",
    "identify.estimationErrorDescription": "অনুগ্রহ করে আবার চেষ্টা করুন।",
    "identify.apiKeyErrorTitle": "Gemini API কী প্রয়োজন",
    "identify.apiKeyErrorDescription": "অনুগ্রহ করে আপনার .env ফাইলে Gemini API কী যোগ করুন।",

    "marketplace.pageTitle": "গবাদি পশুর বাজার",
    "marketplace.pageDescription": "এআই-চালিত অন্তর্দৃষ্টি দিয়ে গবাদি পশু কিনুন এবং বিক্রি করুন।",
    "marketplace.breedFilterLabel": "জাত",
    "marketplace.breedFilterPlaceholder": "জাত অনুযায়ী ফিল্টার করুন",
    "marketplace.allBreeds": "সব জাত",
    "marketplace.locationFilterLabel": "অবস্থান",
    "marketplace.locationFilterPlaceholder": "অবস্থান অনুযায়ী ফিল্টার করুন",
    "marketplace.allLocations": "সব অবস্থান",
    "marketplace.priceRangeLabel": "মূল্য পরিসীমা",
    "marketplace.aiHealth": "এআই স্বাস্থ্য:",
    "marketplace.yearsOld": "{{count}} বছর বয়সী",
    "marketplace.viewDetailsButton": "বিস্তারিত দেখুন",
    "marketplace.noResults": "বর্তমান ফিল্টারগুলির সাথে কোনো গবাদি পশু মেলে না।",
    "marketplace.sellCattle": "আপনার গবাদি পশু বিক্রি করুন",
    "marketplace.dialogTitle": "বিক্রির জন্য আপনার গবাদি পশু তালিকাভুক্ত করুন",
    "marketplace.dialogDescription": "বাজারে আপনার গবাদি পশু যোগ করতে নীচের বিবরণগুলি পূরণ করুন।",
    "marketplace.photoLabel": "গবাদি পশুর ছবি",
    "marketplace.imagePreviewAlt": "গবাদি পশুর পূর্বরূপ",
    "marketplace.dialogBreedLabel": "জাত",
    "marketplace.dialogBreedPlaceholder": "যেমন, গির",
    "marketplace.dialogAgeLabel": "বয়স (বছর)",
    "marketplace.dialogAgePlaceholder": "যেমন, ৩",
    "marketplace.dialogPriceLabel": "মূল্য (INR)",
    "marketplace.dialogPricePlaceholder": "যেমন, ৭৫০০০",
    "marketplace.dialogLocationLabel": "অবস্থান",
    "marketplace.dialogLocationPlaceholder": "যেমন, রাজকোট, গুজরাট",
    "marketplace.dialogListButton": "গবাদি পশু তালিকাভুক্ত করুন",
    "marketplace.listingSuccessTitle": "তালিকা তৈরি হয়েছে!",
    "marketplace.listingSuccessDescription": "আপনার {{breed}} বাজারে যোগ করা হয়েছে।",
    "marketplace.breedError": "জাত প্রয়োজন।",
    "marketplace.ageError": "বয়স একটি ধনাত্মক সংখ্যা হতে হবে।",
    "marketplace.priceError": "মূল্য ০ এর চেয়ে বেশি হতে হবে।",
    "marketplace.locationError": "অবস্থান প্রয়োজন।",
    "marketplace.photoError": "ছবি প্রয়োজন।",

    "contribute.pageTitle": "আমাদের এআই-তে অবদান রাখুন",
    "contribute.pageDescription": "নতুন বা স্থানীয় গবাদি পশুর জাতের ছবি জমা দিয়ে আমাদের জাতের ডেটাবেস প্রসারিত করতে আমাদের সাহায্য করুন।",
    "contribute.formTitle": "একটি নতুন জাত জমা দিন",
    "contribute.formDescription": "আপনার অবদান আমাদের এআই-কে সবার জন্য আরও স্মার্ট করে তুলতে সাহায্য করে।",
    "contribute.breedNameLabel": "জাতের নাম",
    "contribute.breedNamePlaceholder": "যেমন, অ্যাঙ্গাস, হেয়ারফোর্ড",
    "contribute.photoLabel": "গবাদি পশুর ছবি",
    "contribute.imagePreviewAlt": "গবাদি পশুর পূর্বরূপ",
    "contribute.submitButton": "পর্যালোচনার জন্য জমা দিন",
    "contribute.submissionSuccessTitle": "জমা দেওয়া সফল হয়েছে",
    "contribute.submissionFailedTitle": "জমা দেওয়া ব্যর্থ হয়েছে",
    "contribute.submissionFailedDescription": "আপনার ডেটা জমা দিতে একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
    "contribute.breedNameError": "জাতের নাম কমপক্ষে ২ অক্ষরের হতে হবে।",
    "contribute.photoError": "ছবি প্রয়োজন।",

    "experts.pageTitle": "বিশেষজ্ঞদের সাথে সংযোগ করুন",
    "experts.pageDescription": "পেশাদার পরামর্শ পেতে স্থানীয় পশুচিকিৎসক এবং জাত বিশেষজ্ঞদের খুঁজুন।",
    "experts.specialtiesLabel": "বিশেষত্ব",
    "experts.emailButton": "ইমেল",
    "experts.callButton": "কল",
    "experts.vetTitle": "পশুচিকিৎসক",
    "experts.specGeneral": "সাধারণ স্বাস্থ্য",
    "experts.specNutrition": "পুষ্টি",
    "experts.girSpecialistTitle": "গির গবাদি পশু বিশেষজ্ঞ",
    "experts.specBreed": "জাত নির্বাচন",
    "experts.specGenetics": "জেনেটিক্স",
    "experts.dairyConsultantTitle": "দুগ্ধ চাষ পরামর্শদাতা",
    "experts.specMilk": "দুধ উৎপাদন",
    "experts.specFarm": "খামার পরিচালনা"
}
```

---
---
---

# FILE: src/locales/en.json
# PATH: /src/locales/en.json
```json
{
    "appTitle": "AgriVista AI",
    "appSubtitle": "AI-powered insights for modern cattle management. Your digital mirror for a healthier, more valuable herd.",
    "getStarted": "Get Started",
    "featuresTitle": "Features for the Future of Farming",
    "featuresSubtitle": "Leverage the power of artificial intelligence to make informed decisions about your cattle.",
    "breedRecognition.title": "Breed Recognition",
    "breedRecognition.description": "Instantly identify cattle breeds from an image using our advanced AI.",
    "aiHealthScore.title": "AI Health Score",
    "aiHealthScore.description": "Get a comprehensive health report and score for your cattle just by uploading a photo.",
    "marketPricePredictor.title": "Market Price Predictor",
    "marketPricePredictor.description": "Estimate the market value of your cattle based on breed, age, and health.",
    "expertConnect.title": "Expert Connect",
    "expertConnect.description": "Connect with local veterinarians and breed experts for professional advice.",
    "communityInput.title": "Community Input",
    "communityInput.description": "Help improve our AI by contributing images of local and rare cattle breeds.",
    "allRightsReserved": "All Rights Reserved",
    "home": "Home",
    "identifyAndAnalyze": "Identify & Analyze",
    "marketplace": "Marketplace",
    "contributeData": "Contribute Data",
    "findExperts": "Find Experts",
    "bharatPashudhan": "Bharat Pashudhan",
    "language": "Language",

    "identify.pageTitle": "Identify & Analyze Cattle",
    "identify.pageDescription": "Upload an image to start the AI-powered analysis of your cattle.",
    "identify.step1Title": "1. Upload Cattle Image",
    "identify.clickToUpload": "Click to upload",
    "identify.dragAndDrop": "or drag and drop",
    "identify.fileTypes": "PNG, JPG, or WEBP",
    "identify.cattlePreviewAlt": "Cattle preview",
    "identify.startAnalysisButton": "Start Analysis",
    "identify.analyzingButton": "Analyzing...",
    "identify.resultsTitle": "ML Analysis Results",
    "identify.resultsDescription": "Your cattle's breed identification, health report, and market value will appear here.",
    "identify.step2Title": "2. Breed Identification",
    "identify.identifiedBreed": "Identified Breed",
    "identify.confidenceScore": "Confidence Score",
    "identify.step3Title": "3. Health Report",
    "identify.healthReportDescription": "AI-generated health assessment.",
    "identify.healthScore": "Health Score",
    "identify.vetNotes": "Veterinarian's Notes",
    "identify.ageInputDescription": "Enter the age to calculate the market value.",
    "identify.agePlaceholder": "Age (years)",
    "identify.estimateButton": "Estimate Value",
    "identify.estimatingValue": "Estimating market value...",
    "identify.step4Title": "4. Estimated Market Value",
    "identify.marketValueDescription": "Based on breed, age, and health.",
    "identify.reasoning": "Reasoning",
    "identify.uploadError": "Please upload an image first.",
    "identify.analysisFailedTitle": "Analysis Failed",
    "identify.analysisFailedDescription": "Could not analyze the image. Please try again.",
    "identify.missingInfoTitle": "Missing Information",
    "identify.missingInfoDescription": "Breed, health score, and age are required to estimate value.",
    "identify.estimationErrorTitle": "Error estimating market value",
    "identify.estimationErrorDescription": "Please try again.",
    "identify.apiKeyErrorTitle": "Gemini API Key Required",
    "identify.apiKeyErrorDescription": "Please add your Gemini API key to the .env file.",
    "identify.modelLoadFailedTitle": "Model Failed to Load",
    "identify.modelLoadFailedDescription": "The local breed identification model could not be loaded. Please ensure the model files are in the public/model directory and try refreshing.",
    "identify.modelLoadingTitle": "Local Model Loading",
    "identify.modelLoadingDescription": "The breed identification model is loading. The analysis button will be enabled shortly.",


    "marketplace.pageTitle": "Cattle Marketplace",
    "marketplace.pageDescription": "Buy and sell cattle with AI-powered insights.",
    "marketplace.breedFilterLabel": "Breed",
    "marketplace.breedFilterPlaceholder": "Filter by breed",
    "marketplace.allBreeds": "All Breeds",
    "marketplace.locationFilterLabel": "Location",
    "marketplace.locationFilterPlaceholder": "Filter by location",
    "marketplace.allLocations": "All Locations",
    "marketplace.priceRangeLabel": "Price Range",
    "marketplace.aiHealth": "AI Health:",
    "marketplace.yearsOld": "{{count}} years old",
    "marketplace.viewDetailsButton": "View Details",
    "marketplace.noResults": "No cattle match the current filters.",
    "marketplace.sellCattle": "Sell Your Cattle",
    "marketplace.dialogTitle": "List Your Cattle for Sale",
    "marketplace.dialogDescription": "Fill out the details below to add your cattle to the marketplace.",
    "marketplace.photoLabel": "Photo of the Cattle",
    "marketplace.imagePreviewAlt": "Cattle preview",
    "marketplace.dialogBreedLabel": "Breed",
    "marketplace.dialogBreedPlaceholder": "e.g., Gir",
    "marketplace.dialogAgeLabel": "Age (years)",
    "marketplace.dialogAgePlaceholder": "e.g., 3",
    "marketplace.dialogPriceLabel": "Price (INR)",
    "marketplace.dialogPricePlaceholder": "e.g., 75000",
    "marketplace.dialogLocationLabel": "Location",
    "marketplace.dialogLocationPlaceholder": "e.g., Rajkot, Gujarat",
    "marketplace.dialogListButton": "List Cattle",
    "marketplace.listingSuccessTitle": "Listing Created!",
    "marketplace.listingSuccessDescription": "Your {{breed}} has been added to the marketplace.",
    "marketplace.breedError": "Breed is required.",
    "marketplace.ageError": "Age must be a positive number.",
    "marketplace.priceError": "Price must be greater than 0.",
    "marketplace.locationError": "Location is required.",
    "marketplace.photoError": "Image is required.",
    
    "contribute.pageTitle": "Contribute to Our AI",
    "contribute.pageDescription": "Help us expand our breed database by submitting photos of new or local cattle breeds.",
    "contribute.formTitle": "Submit a New Breed",
    "contribute.formDescription": "Your contribution helps make our AI smarter for everyone.",
    "contribute.breedNameLabel": "Breed Name",
    "contribute.breedNamePlaceholder": "e.g., Angus, Hereford",
    "contribute.photoLabel": "Photo of the Cattle",
    "contribute.imagePreviewAlt": "Cattle preview",
    "contribute.submitButton": "Submit for Review",
    "contribute.submissionSuccessTitle": "Submission Successful",
    "contribute.submissionFailedTitle": "Submission Failed",
    "contribute.submissionFailedDescription": "There was a problem submitting your data. Please try again.",
    "contribute.breedNameError": "Breed name must be at least 2 characters.",
    "contribute.photoError": "Image is required.",

    "experts.pageTitle": "Connect with Experts",
    "experts.pageDescription": "Find local veterinarians and breed specialists to get professional advice.",
    "experts.specialtiesLabel": "Specialties",
    "experts.emailButton": "Email",
    "experts.callButton": "Call",
    "experts.vetTitle": "Veterinarian",
    "experts.specGeneral": "General Health",
    "experts.specNutrition": "Nutrition",
    "experts.girSpecialistTitle": "Gir Cattle Specialist",
    "experts.specBreed": "Breed Selection",
    "experts.specGenetics": "Genetics",
    "experts.dairyConsultantTitle": "Dairy Farming Consultant",
    "experts.specMilk": "Milk Production",
    "experts.specFarm": "Farm Management"
}
```

---
---
---

# FILE: src/locales/gu.json
# PATH: /src/locales/gu.json
```json
{
    "appTitle": "એગ્રિવિસ્ટા AI",
    "appSubtitle": "આધુનિક પશુધન સંચાલન માટે AI-સંચાલિત આંતરદૃષ્ટિ. સ્વસ્થ, વધુ મૂલ્યવાન ટોળા માટે તમારો ડિજિટલ અરીસો.",
    "getStarted": "શરૂ કરો",
    "featuresTitle": "ખેતીના ભવિષ્ય માટે સુવિધાઓ",
    "featuresSubtitle": "તમારા પશુધન વિશે માહિતગાર નિર્ણયો લેવા માટે કૃત્રિમ બુદ્ધિની શક્તિનો લાભ લો.",
    "breedRecognition.title": "જાતિની ઓળખ",
    "breedRecognition.description": "અમારા અદ્યતન AI નો ઉપયોગ કરીને છબીમાંથી પશુધનની જાતિઓને તરત જ ઓળખો.",
    "aiHealthScore.title": "AI આરોગ્ય સ્કોર",
    "aiHealthScore.description": "ફક્ત ફોટો અપલોડ કરીને તમારા પશુધન માટે વ્યાપક આરોગ્ય અહેવાલ અને સ્કોર મેળવો.",
    "marketPricePredictor.title": "બજાર કિંમત અનુમાક",
    "marketPricePredictor.description": "જાતિ, વય અને આરોગ્યના આધારે તમારા પશુધનના બજાર મૂલ્યનો અંદાજ કાઢો.",
    "expertConnect.title": "નિષ્ણાત જોડાણ",
    "expertConnect.description": "વ્યાવસાયિક સલાહ માટે સ્થાનિક પશુચિકિત્સકો અને જાતિ નિષ્ણાતો સાથે જોડાઓ.",
    "communityInput.title": "સમુદાય ઇનપુટ",
    "communityInput.description": "સ્થાનિક અને દુર્લભ પશુધન જાતિઓની છબીઓનું યોગદાન આપીને અમારા AI ને સુધારવામાં સહાય કરો.",
    "allRightsReserved": "સર્વાધિકાર સુરક્ષિત",
    "home": "હોમ",
    "identifyAndAnalyze": "ઓળખો અને વિશ્લેષણ કરો",
    "marketplace": "બજાર",
    "contributeData": "ડेटा યોગદાન આપો",
    "findExperts": "નિષ્ણાતો શોધો",
    "bharatPashudhan": "ભારત પશુધન",
    "language": "ભાષા",

    "identify.pageTitle": "પશુધનને ઓળખો અને વિશ્લેષણ કરો",
    "identify.pageDescription": "તમારા પશુધનનું AI-સંચાલિત વિશ્લેષણ શરૂ કરવા માટે એક છબી અપલોડ કરો.",
    "identify.step1Title": "૧. પશુધનની છબી અપલોડ કરો",
    "identify.clickToUpload": "અપલોડ કરવા માટે ક્લિક કરો",
    "identify.dragAndDrop": "અથવા ખેંચીને મૂકો",
    "identify.fileTypes": "PNG, JPG, અથવા WEBP",
    "identify.cattlePreviewAlt": "પશુધનનું પૂર્વદર્શન",
    "identify.startAnalysisButton": "વિશ્લેષણ શરૂ કરો",
    "identify.analyzingButton": "વિશ્લેષણ થઈ રહ્યું છે...",
    "identify.resultsTitle": "ML વિશ્લેષણ પરિણામો",
    "identify.resultsDescription": "તમારા પશુધનની જાતિની ઓળખ, આરોગ્ય અહેવાલ અને બજાર મૂલ્ય અહીં દેખાશે.",
    "identify.step2Title": "૨. જાતિની ઓળખ",
    "identify.identifiedBreed": "ઓળખાયેલી જાતિ",
    "identify.confidenceScore": "આત્મવિશ્વાસનો સ્કોર",
    "identify.step3Title": "૩. આરોગ્ય અહેવાલ",
    "identify.healthReportDescription": "AI-જનરેટેડ આરોગ્ય મૂલ્યાંકન.",
    "identify.healthScore": "આરોગ્ય સ્કોર",
    "identify.vetNotes": "પશુચિકિત્સકની નોંધો",
    "identify.ageInputDescription": "બજાર મૂલ્યની ગણતરી કરવા માટે ઉંમર દાખલ કરો.",
    "identify.agePlaceholder": "ઉંમર (વર્ષ)",
    "identify.estimateButton": "મૂલ્યનો અંદાજ કાઢો",
    "identify.estimatingValue": "બજાર મૂલ્યનો અંદાજ લગાવવામાં આવી રહ્યો છે...",
    "identify.step4Title": "૪. અંદાજિત બજાર મૂલ્ય",
    "identify.marketValueDescription": "જાતિ, ઉંમર અને આરોગ્ય પર આધારિત.",
    "identify.reasoning": "તર્ક",
    "identify.uploadError": "કૃપા કરીને પહેલા એક છબી અપલોડ કરો.",
    "identify.analysisFailedTitle": "વિશ્લેષણ નિષ્ફળ થયું",
    "identify.analysisFailedDescription": "છબીનું વિશ્લેષણ કરી શકાયું નથી. કૃપા કરીને ફરી પ્રયાસ કરો.",
    "identify.missingInfoTitle": "માહિતી ખૂટે છે",
    "identify.missingInfoDescription": "મૂલ્યનો અંદાજ કાઢવા માટે જાતિ, આરોગ્ય સ્કોર અને ઉંમર જરૂરી છે.",
    "identify.estimationErrorTitle": "બજાર મૂલ્યના અંદાજમાં ભૂલ",
    "identify.estimationErrorDescription": "કૃપા કરીને ફરી પ્રયાસ કરો.",
    "identify.apiKeyErrorTitle": "Gemini API કી જરૂરી છે",
    "identify.apiKeyErrorDescription": "કૃપા કરીને તમારી .env ફાઇલમાં તમારી Gemini API કી ઉમેરો.",

    "marketplace.pageTitle": "પશુધન બજાર",
    "marketplace.pageDescription": "AI-સંચાલિત આંતરદૃષ્ટિ સાથે પશુધન ખરીદો અને વેચો.",
    "marketplace.breedFilterLabel": "જાતિ",
    "marketplace.breedFilterPlaceholder": "જાતિ પ્રમાણે ફિલ્ટર કરો",
    "marketplace.allBreeds": "બધી જાતિઓ",
    "marketplace.locationFilterLabel": "સ્થળ",
    "marketplace.locationFilterPlaceholder": "સ્થળ પ્રમાણે ફિલ્ટર કરો",
    "marketplace.allLocations": "બધા સ્થળો",
    "marketplace.priceRangeLabel": "કિંમત શ્રેણી",
    "marketplace.aiHealth": "AI આરોગ્ય:",
    "marketplace.yearsOld": "{{count}} વર્ષ જૂનું",
    "marketplace.viewDetailsButton": "વિગતો જુઓ",
    "marketplace.noResults": "વર્તમાન ફિલ્ટર્સ સાથે કોઈ પશુધન મેળ ખાતું નથી.",
    "marketplace.sellCattle": "તમારા પશુધન વેચો",
    "marketplace.dialogTitle": "વેચાણ માટે તમારા પશુધનની સૂચિ બનાવો",
    "marketplace.dialogDescription": "બજારમાં તમારા પશુધનને ઉમેરવા માટે નીચેની વિગતો ભરો.",
    "marketplace.photoLabel": "પશુધનનો ફોટો",
    "marketplace.imagePreviewAlt": "પશુધનનું પૂર્વદર્શન",
    "marketplace.dialogBreedLabel": "જાતિ",
    "marketplace.dialogBreedPlaceholder": "દા.ત., ગીર",
    "marketplace.dialogAgeLabel": "ઉંમર (વર્ષ)",
    "marketplace.dialogAgePlaceholder": "દા.ત., ૩",
    "marketplace.dialogPriceLabel": "કિંમત (INR)",
    "marketplace.dialogPricePlaceholder": "દા.ત., ૭૫૦૦૦",
    "marketplace.dialogLocationLabel": "સ્થળ",
    "marketplace.dialogLocationPlaceholder": "દા.ત., રાજકોટ, ગુજરાત",
    "marketplace.dialogListButton": "પશુધનની સૂચિ બનાવો",
    "marketplace.listingSuccessTitle": "સૂચિ બનાવવામાં આવી!",
    "marketplace.listingSuccessDescription": "તમારું {{breed}} બજારમાં ઉમેરવામાં આવ્યું છે.",
    "marketplace.breedError": "જાતિ જરૂરી છે.",
    "marketplace.ageError": "ઉંમર હકારાત્મક સંખ્યા હોવી જોઈએ.",
    "marketplace.priceError": "કિંમત ૦ થી વધુ હોવી જોઈએ.",
    "marketplace.locationError": "સ્થળ જરૂરી છે.",
    "marketplace.photoError": "છબી જરૂરી છે.",

    "contribute.pageTitle": "અમારા AI માં યોગદાન આપો",
    "contribute.pageDescription": "નવી અથવા સ્થાનિક પશુધન જાતિઓના ફોટા સબમિટ કરીને અમારા જાતિ ડેટાબેઝને વિસ્તૃત કરવામાં અમારી સહાય કરો.",
    "contribute.formTitle": "નવી જાતિ સબમિટ કરો",
    "contribute.formDescription": "તમારું યોગદાન અમારા AI ને દરેક માટે વધુ સ્માર્ટ બનાવવામાં મદદ કરે છે.",
    "contribute.breedNameLabel": "જાતિનું નામ",
    "contribute.breedNamePlaceholder": "દા.ત., એંગસ, હેરફોર્ડ",
    "contribute.photoLabel": "પશુધનનો ફોટો",
    "contribute.imagePreviewAlt": "પશુધનનું પૂર્વદર્શન",
    "contribute.submitButton": "સમીક્ષા માટે સબમિટ કરો",
    "contribute.submissionSuccessTitle": "સબમિશન સફળ",
    "contribute.submissionFailedTitle": "સબમિషన్ નિષ્ફળ",
    "contribute.submissionFailedDescription": "તમારો ડેટਾ સબમિટ કરવામાં સમસ્યા આવી. કૃપા કરીને ફરી પ્રયાસ કરો.",
    "contribute.breedNameError": "જાતિનું નામ ઓછામાં ઓછું ૨ અક્ષરોનું હોવું જોઈએ.",
    "contribute.photoError": "છબી જરૂરી છે.",

    "experts.pageTitle": "નિષ્ણાતો સાથે જોડાઓ",
    "experts.pageDescription": "વ્યાવસાયિક સલાહ મેળવવા માટે સ્થાનિક પશુચિકિત્સકો અને જાતિ નિષ્ણાતોને શોધો.",
    "experts.specialtiesLabel": "વિશેષતાઓ",
    "experts.emailButton": "ઇમેઇਲ",
    "experts.callButton": "કૉલ",
    "experts.vetTitle": "પશુચિકિત્સક",
    "experts.specGeneral": "સામાન્ય આરોગ્ય",
    "experts.specNutrition": "પોષણ",
    "experts.girSpecialistTitle": "ગીર પશુ નિષ્ણાત",
    "experts.specBreed": "જાતિની પસંદગી",
    "experts.specGenetics": "આનુવંશિકતા",
    "experts.dairyConsultantTitle": "ડેરી ફાર્મિંગ સલાહકાર",
    "experts.specMilk": "દૂધ ઉત્પાદન",
    "experts.specFarm": "ફાર્મ સંચાલન"
}
```

---
---
---

# FILE: src/locales/hi.json
# PATH: /src/locales/hi.json
```json
{
    "appTitle": "एग्रीविस्टा एआई",
    "appSubtitle": "आधुनिक पशु प्रबंधन के लिए एआई-संचालित अंतर्दृष्टि। एक स्वस्थ, अधिक मूल्यवान झुंड के लिए आपका डिजिटल दर्पण।",
    "getStarted": "शुरू करें",
    "featuresTitle": "खेती के भविष्य के लिए सुविधाएँ",
    "featuresSubtitle": "अपने मवेशियों के बारे में सूचित निर्णय लेने के लिए आर्टिफिशियल इंटेलिजेंस की शक्ति का लाभ उठाएं।",
    "breedRecognition.title": "नस्ल की पहचान",
    "breedRecognition.description": "हमारे उन्नत एआई का उपयोग करके एक छवि से मवेशियों की नस्लों को तुरंत पहचानें।",
    "aiHealthScore.title": "एआई स्वास्थ्य स्कोर",
    "aiHealthScore.description": "केवल एक फोटो अपलोड करके अपने मवेशियों के लिए एक व्यापक स्वास्थ्य रिपोर्ट और स्कोर प्राप्त करें।",
    "marketPricePredictor.title": "बाजार मूल्य भविष्यवक्ता",
    "marketPricePredictor.description": "नस्ल, उम्र और स्वास्थ्य के आधार पर अपने मवेशियों के बाजार मूल्य का अनुमान लगाएं।",
    "expertConnect.title": "विशेषज्ञों से जुड़ें",
    "expertConnect.description": "पेशेवर सलाह के लिए स्थानीय पशु चिकित्सकों और नस्ल विशेषज्ञों से जुड़ें।",
    "communityInput.title": "सामुदायिक इनपुट",
    "communityInput.description": "स्थानीय और दुर्लभ मवेशी नस्लों की छवियां योगदान करके हमारे एआई को बेहतर बनाने में मदद करें।",
    "allRightsReserved": "सर्वाधिकार सुरक्षित",
    "home": "होम",
    "identifyAndAnalyze": "पहचानें और विश्लेषण करें",
    "marketplace": "बाजार",
    "contributeData": "डेटा योगदान करें",
    "findExperts": "विशेषज्ञों को खोजें",
    "bharatPashudhan": "भारत पशुधन",
    "language": "भाषा",

    "identify.pageTitle": "मवेशियों को पहचानें और उनका विश्लेषण करें",
    "identify.pageDescription": "अपने मवेशियों का एआई-संचालित विश्लेषण शुरू करने के लिए एक छवि अपलोड करें।",
    "identify.step1Title": "1. मवेशी की छवि अपलोड करें",
    "identify.clickToUpload": "अपलोड کرنے के लिए क्लिक करें",
    "identify.dragAndDrop": "या खींचें और छोड़ें",
    "identify.fileTypes": "पीएनजी, जेपीजी, या वेबपी",
    "identify.cattlePreviewAlt": "मवेशी पूर्वावलोकन",
    "identify.startAnalysisButton": "विश्लेषण शुरू करें",
    "identify.analyzingButton": "विश्लेषण हो रहा है...",
    "identify.resultsTitle": "एमएल विश्लेषण परिणाम",
    "identify.resultsDescription": "आपके मवेशियों की नस्ल की पहचान, स्वास्थ्य रिपोर्ट और बाजार मूल्य यहां दिखाई देगा।",
    "identify.step2Title": "2. नस्ल की पहचान",
    "identify.identifiedBreed": "पहचानी गई नस्ल",
    "identify.confidenceScore": "आत्मविश्वास स्कोर",
    "identify.step3Title": "3. स्वास्थ्य रिपोर्ट",
    "identify.healthReportDescription": "एआई-जनित स्वास्थ्य मूल्यांकन।",
    "identify.healthScore": "स्वास्थ्य स्कोर",
    "identify.vetNotes": "पशुचिकित्सक के नोट्स",
    "identify.ageInputDescription": "बाजार मूल्य की गणना के लिए उम्र दर्ज करें।",
    "identify.agePlaceholder": "आयु (वर्ष)",
    "identify.estimateButton": "मूल्य का अनुमान लगाएं",
    "identify.estimatingValue": "बाजार मूल्य का अनुमान लगाया जा रहा है...",
    "identify.step4Title": "4. अनुमानित बाजार मूल्य",
    "identify.marketValueDescription": "नस्ल, उम्र और स्वास्थ्य पर आधारित।",
    "identify.reasoning": "तर्क",
    "identify.uploadError": "कृपया पहले एक छवि अपलोड करें।",
    "identify.analysisFailedTitle": "विश्लेषण विफल",
    "identify.analysisFailedDescription": "छवि का विश्लेषण नहीं किया जा सका। कृपया पुनः प्रयास करें।",
    "identify.missingInfoTitle": "जानकारी गुम है",
    "identify.missingInfoDescription": "मूल्य का अनुमान लगाने के लिए नस्ल, स्वास्थ्य स्कोर और उम्र आवश्यक है।",
    "identify.estimationErrorTitle": "बाजार मूल्य का अनुमान लगाने में त्रुटि",
    "identify.estimationErrorDescription": "कृपया पुनः प्रयास करें।",
    "identify.apiKeyErrorTitle": "जेमिनी एपीआई कुंजी आवश्यक है",
    "identify.apiKeyErrorDescription": "कृपया अपनी .env फ़ाइल में अपनी जेमिनी एपीआई कुंजी जोड़ें।",

    "marketplace.pageTitle": "पशु बाज़ार",
    "marketplace.pageDescription": "एआई-संचालित अंतर्दृष्टि के साथ मवेशी खरीदें और बेचें।",
    "marketplace.breedFilterLabel": "नस्ल",
    "marketplace.breedFilterPlaceholder": "नस्ल के अनुसार फ़िल्टर करें",
    "marketplace.allBreeds": "सभी नस्लें",
    "marketplace.locationFilterLabel": "स्थान",
    "marketplace.locationFilterPlaceholder": "स्थान के अनुसार फ़िल्टर करें",
    "marketplace.allLocations": "सभी स्थान",
    "marketplace.priceRangeLabel": "मूल्य सीमा",
    "marketplace.aiHealth": "एआई स्वास्थ्य:",
    "marketplace.yearsOld": "{{count}} वर्ष पुराना",
    "marketplace.viewDetailsButton": "विवरण देखें",
    "marketplace.noResults": "वर्तमान फ़िल्टर से कोई मवेशी मेल नहीं खाता।",
    "marketplace.sellCattle": "अपने मवेशी बेचें",
    "marketplace.dialogTitle": "बिक्री के लिए अपने मवेशियों को सूचीबद्ध करें",
    "marketplace.dialogDescription": "बाज़ार में अपने मवेशियों को जोड़ने के लिए नीचे दिए गए विवरण भरें।",
    "marketplace.photoLabel": "मवेशी की तस्वीर",
    "marketplace.imagePreviewAlt": "मवेशी पूर्वावलोकन",
    "marketplace.dialogBreedLabel": "नस्ल",
    "marketplace.dialogBreedPlaceholder": "जैसे, गिर",
    "marketplace.dialogAgeLabel": "आयु (वर्ष)",
    "marketplace.dialogAgePlaceholder": "जैसे, 3",
    "marketplace.dialogPriceLabel": "कीमत (INR)",
    "marketplace.dialogPricePlaceholder": "जैसे, 75000",
    "marketplace.dialogLocationLabel": "स्थान",
    "marketplace.dialogLocationPlaceholder": "जैसे, राजकोट, गुजरात",
    "marketplace.dialogListButton": "मवेशी सूचीबद्ध करें",
    "marketplace.listingSuccessTitle": "सूचीयन बन गया!",
    "marketplace.listingSuccessDescription": "आपका {{breed}} बाज़ार में जोड़ दिया गया है।",
    "marketplace.breedError": "नस्ल आवश्यक है।",
    "marketplace.ageError": "आयु एक धनात्मक संख्या होनी चाहिए।",
    "marketplace.priceError": "कीमत 0 से अधिक होनी चाहिए।",
    "marketplace.locationError": "स्थान आवश्यक है।",
    "marketplace.photoError": "छवि आवश्यक है।",

    "contribute.pageTitle": "हमारे एआई में योगदान करें",
    "contribute.pageDescription": "नई या स्थानीय मवेशी नस्लों की तस्वीरें जमा करके हमारे नस्ल डेटाबेस का विस्तार करने में हमारी सहायता करें।",
    "contribute.formTitle": "एक नई नस्ल जमा करें",
    "contribute.formDescription": "आपका योगदान हमारे एआई को सभी के लिए स्मार्ट बनाने में मदद करता है।",
    "contribute.breedNameLabel": "नस्ल का नाम",
    "contribute.breedNamePlaceholder": "जैसे, अंगस, हियरफोर्ड",
    "contribute.photoLabel": "मवेशी की तस्वीर",
    "contribute.imagePreviewAlt": "मवेशी पूर्वावलोकन",
    "contribute.submitButton": "समीक्षा के लिए जमा करें",
    "contribute.submissionSuccessTitle": "प्रस्तुति सफल",
    "contribute.submissionFailedTitle": "प्रस्तुति विफल",
    "contribute.submissionFailedDescription": "आपका डेटा जमा करने में कोई समस्या हुई। कृपया पुनः प्रयास करें।",
    "contribute.breedNameError": "नस्ल का नाम कम से कम 2 अक्षर का होना चाहिए।",
    "contribute.photoError": "छवि आवश्यक है।",

    "experts.pageTitle": "विशेषज्ञों से जुड़ें",
    "experts.pageDescription": "पेशेवर सलाह पाने के लिए स्थानीय पशु चिकित्सकों और नस्ल विशेषज्ञों को खोजें।",
    "experts.specialtiesLabel": "विशेषज्ञताएँ",
    "experts.emailButton": "ईमेल",
    "experts.callButton": "कॉल",
    "experts.vetTitle": "पशुचिकित्सक",
    "experts.specGeneral": "सामान्य स्वास्थ्य",
    "experts.specNutrition": "पोषण",
    "experts.girSpecialistTitle": "गिर मवेशी विशेषज्ञ",
    "experts.specBreed": "नस्ल चयन",
    "experts.specGenetics": "आनुवंशिकी",
    "experts.dairyConsultantTitle": "डेयरी फार्मिंग सलाहकार",
    "experts.specMilk": "दूध उत्पादन",
    "experts.specFarm": "फार्म प्रबंधन"
}
```

---
---
---

# FILE: src/locales/kn.json
# PATH: /src/locales/kn.json
```json
{
    "appTitle": "ಅಗ್ರಿವಿista AI",
    "appSubtitle": "ಆಧುನಿಕ ಜಾನುವಾರು ನಿರ್ವಹಣೆಗಾಗಿ AI-ಚಾಲಿತ ಒಳನೋಟಗಳು. ಆರೋಗ್ಯಕರ, ಹೆಚ್ಚು ಮೌಲ್ಯಯುತ ಹಿಂಡಿಗಾಗಿ ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಕನ್ನಡಿ.",
    "getStarted": "ಪ್ರಾರಂಭಿಸಿ",
    "featuresTitle": "ಕೃಷಿಯ ಭವಿಷ್ಯಕ್ಕಾಗಿ ವೈಶಿಷ್ಟ್ಯಗಳು",
    "featuresSubtitle": "ನಿಮ್ಮ ಜಾನುವಾರುಗಳ ಬಗ್ಗೆ ತಿಳುವಳಿಕೆಯುಳ್ಳ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಶಕ್ತಿಯನ್ನು ಬಳಸಿಕೊಳ್ಳಿ.",
    "breedRecognition.title": "ತಳಿ ಗುರುತಿಸುವಿಕೆ",
    "breedRecognition.description": "ನಮ್ಮ ಸುಧಾರಿತ AI ಬಳಸಿ ಚಿತ್ರದಿಂದ ಜಾನುವಾರು ತಳಿಗಳನ್ನು ತಕ್ಷಣವೇ ಗುರುತಿಸಿ.",
    "aiHealthScore.title": "AI ಆರೋಗ್ಯ ಸ್ಕೋರ್",
    "aiHealthScore.description": "ಕೇವಲ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಮೂಲಕ ನಿಮ್ಮ ಜಾನುವಾರುಗಳಿಗೆ ಸಮಗ್ರ ಆರೋಗ್ಯ ವರದಿ ಮತ್ತು ಸ್ಕೋರ್ ಪಡೆಯಿರಿ.",
    "marketPricePredictor.title": "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮುನ್ಸೂಚಕ",
    "marketPricePredictor.description": "ತಳಿ, ವಯಸ್ಸು ಮತ್ತು ಆರೋಗ್ಯದ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಜಾನುವಾರುಗಳ ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯವನ್ನು ಅಂದಾಜು ಮಾಡಿ.",
    "expertConnect.title": "ತಜ್ಞರ ಸಂಪರ್ಕ",
    "expertConnect.description": "ವೃತ್ತಿಪರ ಸಲಹೆಗಾಗಿ ಸ್ಥಳೀಯ ಪಶುವೈದ್ಯರು ಮತ್ತು ತಳಿ ತಜ್ಞರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.",
    "communityInput.title": "ಸಮುದಾಯ ಇನ್‌ಪುಟ್",
    "communityInput.description": "ಸ್ಥಳೀಯ ಮತ್ತು ಅಪರೂಪದ ಜಾನುವಾರು ತಳಿಗಳ ಚಿತ್ರಗಳನ್ನು ಕೊಡುಗೆಯಾಗಿ ನೀಡುವ ಮೂಲಕ ನಮ್ಮ AI ಅನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡಿ.",
    "allRightsReserved": "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
    "home": "ಮನೆ",
    "identifyAndAnalyze": "ಗುರುತಿಸಿ ಮತ್ತು ವಿಶ್ಲೇಷಿಸಿ",
    "marketplace": "ಮಾರುಕಟ್ಟೆ",
    "contributeData": "ಡೇಟಾ ಕೊಡುಗೆ ನೀಡಿ",
    "findExperts": "ತಜ್ಞರನ್ನು ಹುಡುಕಿ",
    "bharatPashudhan": "ಭಾರತ್ ಪಶುಧನ್",
    "language": "ಭಾಷೆ",

    "identify.pageTitle": "ಜಾನುವಾರುಗಳನ್ನು ಗುರುತಿಸಿ ಮತ್ತು ವಿಶ್ಲೇಷಿಸಿ",
    "identify.pageDescription": "ನಿಮ್ಮ ಜಾನುವಾರುಗಳ AI-ಚಾಲಿತ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    "identify.step1Title": "೧. ಜಾನುವಾರು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    "identify.clickToUpload": "ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    "identify.dragAndDrop": "ಅಥವಾ ಎಳೆದು ಬಿಡಿ",
    "identify.fileTypes": "PNG, JPG, ಅಥವಾ WEBP",
    "identify.cattlePreviewAlt": "ಜಾನುವಾರು ಪೂರ್ವವೀಕ್ಷಣೆ",
    "identify.startAnalysisButton": "ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ",
    "identify.analyzingButton": "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
    "identify.resultsTitle": "ML ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶಗಳು",
    "identify.resultsDescription": "ನಿಮ್ಮ ಜಾನುವಾರುಗಳ ತಳಿ ಗುರುತಿಸುವಿಕೆ, ಆರೋಗ್ಯ ವರದಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.",
    "identify.step2Title": "೨. ತಳಿ ಗುರುತಿಸುವಿಕೆ",
    "identify.identifiedBreed": "ಗುರುತಿಸಲಾದ ತಳಿ",
    "identify.confidenceScore": "ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಅಂಕ",
    "identify.step3Title": "೩. ಆರೋಗ್ಯ ವರದಿ",
    "identify.healthReportDescription": "AI-ರಚಿಸಿದ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನ.",
    "identify.healthScore": "ಆರೋಗ್ಯ ಅಂಕ",
    "identify.vetNotes": "ಪಶುವೈದ್ಯರ ಟಿಪ್ಪಣಿಗಳು",
    "identify.ageInputDescription": "ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯವನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ.",
    "identify.agePlaceholder": "ವಯಸ್ಸು (ವರ್ಷಗಳು)",
    "identify.estimateButton": "ಮೌಲ್ಯವನ್ನು ಅಂದಾಜು ಮಾಡಿ",
    "identify.estimatingValue": "ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯವನ್ನು ಅಂದਾಜು ಮಾಡಲಾಗುತ್ತಿದೆ...",
    "identify.step4Title": "೪. ಅಂದಾಜು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ",
    "identify.marketValueDescription": "ತಳಿ, ವಯಸ್ಸು ಮತ್ತು ಆರೋಗ್ಯದ ಆಧಾರದ ಮೇಲೆ.",
    "identify.reasoning": "ತಾರ್ಕಿಕತೆ",
    "identify.uploadError": "ದಯವಿಟ್ಟು ಮೊದಲು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    "identify.analysisFailedTitle": "ವಿಶ್ಲೇಷಣೆ ವಿಫಲವಾಗಿದೆ",
    "identify.analysisFailedDescription": "ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    "identify.missingInfoTitle": "ಮಾಹಿತಿ ಕಾಣೆಯಾಗಿದೆ",
    "identify.missingInfoDescription": "ಮೌಲ್ಯವನ್ನು ಅಂದಾಜು ಮಾಡಲು ತಳಿ, ಆರೋಗ್ಯ ಅಂಕ ಮತ್ತು ವಯಸ್ಸು ಅಗತ್ಯವಿದೆ.",
    "identify.estimationErrorTitle": "ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯವನ್ನು ಅಂದਾಜು ಮಾಡುವಲ್ಲಿ ದೋಷ",
    "identify.estimationErrorDescription": "ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    "identify.apiKeyErrorTitle": "Gemini API ಕೀ ಅಗತ್ಯವಿದೆ",
    "identify.apiKeyErrorDescription": "ದಯವಿಟ್ಟು ನಿಮ್ಮ .env ಫೈಲ್‌ಗೆ ನಿಮ್ಮ Gemini API ಕೀಯನ್ನು ಸೇರಿಸಿ.",

    "marketplace.pageTitle": "ಜಾನುವಾರು ಮಾರುಕಟ್ಟೆ",
    "marketplace.pageDescription": "AI-ಚಾಲಿತ ಒಳನೋಟಗಳೊಂದಿಗೆ ಜಾನುವಾರುಗಳನ್ನು ಖರೀದಿಸಿ ಮತ್ತು ಮಾರಾಟ ಮಾಡಿ.",
    "marketplace.breedFilterLabel": "ತಳಿ",
    "marketplace.breedFilterPlaceholder": "ತಳಿ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ",
    "marketplace.allBreeds": "ಎಲ್ಲಾ ತಳಿಗಳು",
    "marketplace.locationFilterLabel": "ಸ್ಥಳ",
    "marketplace.locationFilterPlaceholder": "ಸ್ಥಳ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ",
    "marketplace.allLocations": "ಎಲ್ಲಾ ಸ್ಥಳಗಳು",
    "marketplace.priceRangeLabel": "ಬೆಲೆ ಶ್ರೇಣಿ",
    "marketplace.aiHealth": "AI ಆರೋಗ್ಯ:",
    "marketplace.yearsOld": "{{count}} ವರ್ಷ ವಯಸ್ಸು",
    "marketplace.viewDetailsButton": "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    "marketplace.noResults": "ಪ್ರಸ್ತುತ ಫಿಲ್ಟರ್‌ಗಳಿಗೆ ಯಾವುದೇ ಜಾನುವಾರುಗಳು ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ.",
    "marketplace.sellCattle": "ನಿಮ್ಮ ಜಾನುವಾರುಗಳನ್ನು ಮಾರಾಟ ಮಾಡಿ",
    "marketplace.dialogTitle": "ಮಾರಾಟಕ್ಕಾಗಿ ನಿಮ್ಮ ಜಾನುವಾರುಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಿ",
    "marketplace.dialogDescription": "ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಿಮ್ಮ ಜಾನುವಾರುಗಳನ್ನು ಸೇರಿಸಲು ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
    "marketplace.photoLabel": "ಜಾನುವಾರುಗಳ ಫೋಟೋ",
    "marketplace.imagePreviewAlt": "ಜಾನುವಾರು ಪೂರ್ವವೀಕ್ಷಣೆ",
    "marketplace.dialogBreedLabel": "ತಳಿ",
    "marketplace.dialogBreedPlaceholder": "ಉದಾ., ಗಿರ್",
    "marketplace.dialogAgeLabel": "ವಯಸ್ಸು (ವರ್ಷಗಳು)",
    "marketplace.dialogAgePlaceholder": "ಉದಾ., ೩",
    "marketplace.dialogPriceLabel": "ಬೆಲೆ (INR)",
    "marketplace.dialogPricePlaceholder": "ಉದಾ., ೭೫೦೦೦",
    "marketplace.dialogLocationLabel": "ಸ್ಥಳ",
    "marketplace.dialogLocationPlaceholder": "ಉದಾ., ರಾಜ್‌ಕೋಟ್, ಗುಜರಾತ್",
    "marketplace.dialogListButton": "ಜಾನುವಾರು ಪಟ್ಟಿ ಮಾಡಿ",
    "marketplace.listingSuccessTitle": "ಪಟ್ಟಿ ರಚಿಸಲಾಗಿದೆ!",
    "marketplace.listingSuccessDescription": "ನಿಮ್ಮ {{breed}} ಅನ್ನು ಮಾರುಕಟ್ಟೆಗೆ ಸೇರಿಸಲಾಗಿದೆ.",
    "marketplace.breedError": "ತಳಿ ಅಗತ್ಯವಿದೆ.",
    "marketplace.ageError": "ವಯಸ್ಸು ಧನಾತ್ಮಕ ಸಂಖ್ಯೆಯಾಗಿರಬೇಕು.",
    "marketplace.priceError": "ಬೆಲೆ ೦ ಕ್ಕಿಂತ ಹೆಚ್ಚಿರಬೇಕು.",
    "marketplace.locationError": "ಸ್ಥಳ ಅಗತ್ಯವಿದೆ.",
    "marketplace.photoError": "ಚಿತ್ರ ಅಗತ್ಯವಿದೆ.",

    "contribute.pageTitle": "ನಮ್ಮ AI ಗೆ ಕೊಡುಗೆ ನೀಡಿ",
    "contribute.pageDescription": "ಹೊಸ ಅಥವಾ ಸ್ಥಳೀಯ ಜಾನುವಾರು ತಳಿಗಳ ಫೋಟೋಗಳನ್ನು ಸಲ್ಲಿಸುವ ಮೂಲಕ ನಮ್ಮ ತಳಿ ಡೇಟಾಬೇಸ್ ಅನ್ನು ವಿಸ್ತರಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ.",
    "contribute.formTitle": "ಹೊಸ ತಳಿಯನ್ನು ಸಲ್ಲಿಸಿ",
    "contribute.formDescription": "ನಿಮ್ಮ ಕೊಡುಗೆ ನಮ್ಮ AI ಅನ್ನು ಎಲ್ಲರಿಗೂ ಸ್ಮಾರ್ಟ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    "contribute.breedNameLabel": "ತಳಿಯ ಹೆಸರು",
    "contribute.breedNamePlaceholder": "ಉದಾ., ಅಂಗಸ್, ಹಿಯರ್‌ಫೋರ್ಡ್",
    "contribute.photoLabel": "ಜಾನುವಾರುಗಳ ಫೋಟೋ",
    "contribute.imagePreviewAlt": "ಜಾನುವಾರು ಪೂರ್ವವೀಕ್ಷಣೆ",
    "contribute.submitButton": "ಪರಿಶೀಲನೆಗಾಗಿ ಸಲ್ಲಿಸಿ",
    "contribute.submissionSuccessTitle": "ಸಲ್ಲಿಕೆ ಯಶಸ್ವಿಯಾಗಿದೆ",
    "contribute.submissionFailedTitle": "ಸಲ್ಲಿಕೆ ವಿಫಲವಾಗಿದೆ",
    "contribute.submissionFailedDescription": "ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಸಲ್ಲಿಸುವಲ್ಲಿ ಸಮಸ್ಯೆ ಉಂಟಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    "contribute.breedNameError": "ತಳಿಯ ಹೆಸರು ಕನಿಷ್ಠ ೨ ಅಕ್ಷರಗಳಾಗಿರಬೇಕು.",
    "contribute.photoError": "ಚಿತ್ರ ಅಗತ್ಯವಿದೆ.",

    "experts.pageTitle": "ತಜ್ಞರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ",
    "experts.pageDescription": "ವೃತ್ತಿಪರ ಸಲಹೆ ಪಡೆಯಲು ಸ್ಥಳೀಯ ಪಶುವೈದ್ಯರು ಮತ್ತು ತಳಿ ತಜ್ಞರನ್ನು ಹುಡುಕಿ.",
    "experts.specialtiesLabel": "ವಿಶೇಷತೆಗಳು",
    "experts.emailButton": "ಇಮೇಲ್",
    "experts.callButton": "ಕರೆ ಮಾಡಿ",
    "experts.vetTitle": "ಪಶುವೈದ್ಯರು",
    "experts.specGeneral": "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ",
    "experts.specNutrition": "ಪೋಷಣೆ",
    "experts.girSpecialistTitle": "ಗಿರ್ ಜಾನುವಾರು ತಜ್ಞರು",
    "experts.specBreed": "ತಳಿ ಆಯ್ಕೆ",
    "experts.specGenetics": "ಆನುವಂಶಿಕತೆ",
    "experts.dairyConsultantTitle": "ಹೈನುಗಾರಿಕೆ ಸಲಹೆಗಾರರು",
    "experts.specMilk": "ಹಾಲು ಉತ್ಪಾದನೆ",
    "experts.specFarm": "ಫಾರ್ಮ್ ನಿರ್ವಹಣೆ"
}
```

---
---
---

# FILE: src/locales/ml.json
# PATH: /src/locales/ml.json
```json
{
    "appTitle": "അഗ്രിവിസ്റ്റ AI",
    "appSubtitle": "ആധുനിക കന്നുകാലി പരിപാലനത്തിനായി AI-പവർ ചെയ്യുന്ന ഉൾക്കാഴ്ചകൾ. ആരോഗ്യകരവും കൂടുതൽ മൂല്യമുള്ളതുമായ കന്നുകാലിക്കൂട്ടത്തിന് നിങ്ങളുടെ ഡിജിറ്റൽ കണ്ണാടി.",
    "getStarted": "തുടങ്ങുക",
    "featuresTitle": "കൃഷിയുടെ ഭാവിക്കുവേണ്ടിയുള്ള സവിശേഷതകൾ",
    "featuresSubtitle": "നിങ്ങളുടെ കന്നുകാലികളെക്കുറിച്ച് അറിവുള്ള തീരുമാനങ്ങൾ എടുക്കുന്നതിന് കൃത്രിമബുദ്ധിയുടെ ശക്തി പ്രയോജനപ്പെടുത്തുക.",
    "breedRecognition.title": "ഇനം തിരിച്ചറിയൽ",
    "breedRecognition.description": "ഞങ്ങളുടെ നൂതന AI ഉപയോഗിച്ച് ഒരു ചിത്രത്തിൽ നിന്ന് കന്നുകാലി ഇനങ്ങളെ തൽക്ഷണം തിരിച്ചറിയുക.",
    "aiHealthScore.title": "AI ഹെൽത്ത് സ്കോർ",
    "aiHealthScore.description": "ഒരു ഫോട്ടോ അപ്‌ലോഡ് ചെയ്തുകൊണ്ട് നിങ്ങളുടെ കന്നുകാലികൾക്കായി ഒരു സമഗ്ര ആരോഗ്യ റിപ്പോർട്ടും സ്കോറും നേടുക.",
    "marketPricePredictor.title": "വിപണി വില പ്രവചകൻ",
    "marketPricePredictor.description": "ഇനം, പ്രായം, ആരോഗ്യം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ നിങ്ങളുടെ കന്നുകാലികളുടെ വിപണി മൂല്യം കണക്കാക്കുക.",
    "expertConnect.title": "വിദഗ്ദ്ധരുമായി ബന്ധപ്പെടുക",
    "expertConnect.description": "പ്രൊഫഷണൽ ഉപദേശത്തിനായി പ്രാദേശിക വെറ്ററിനറി ഡോക്ടർമാരുമായും ഇനം വിദഗ്ദ്ധരുമായും ബന്ധപ്പെടുക.",
    "communityInput.title": "കമ്മ്യൂണിറ്റി ഇൻപുട്ട്",
    "communityInput.description": "പ്രാദേശികവും അപൂർവവുമായ കന്നുകാലി ഇനങ്ങളുടെ ചിത്രങ്ങൾ സംഭാവന ചെയ്തുകൊണ്ട് ഞങ്ങളുടെ AI മെച്ചപ്പെടുത്താൻ സഹായിക്കുക.",
    "allRightsReserved": "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം",
    "home": "ഹോം",
    "identifyAndAnalyze": "തിരിച്ചറിയുക & വിശകലനം ചെയ്യുക",
    "marketplace": "വിപണന കേന്ദ്രം",
    "contributeData": "ഡാറ്റ സംഭാവന ചെയ്യുക",
    "findExperts": "വിദഗ്ദ്ധരെ കണ്ടെത്തുക",
    "bharatPashudhan": "ഭാരത് പശുധൻ",
    "language": "ഭാഷ",

    "identify.pageTitle": "കന്നുകാലികളെ തിരിച്ചറിയുകയും വിശകലനം ചെയ്യുകയും ചെയ്യുക",
    "identify.pageDescription": "നിങ്ങളുടെ കന്നുകാലികളുടെ AI-പവർ ചെയ്യുന്ന വിശകലനം ആരംഭിക്കാൻ ഒരു ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.",
    "identify.step1Title": "1. കന്നുകാലി ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",
    "identify.clickToUpload": "അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്കുചെയ്യുക",
    "identify.dragAndDrop": "അല്ലെങ്കിൽ വലിച്ചിടുക",
    "identify.fileTypes": "PNG, JPG, അല്ലെങ്കിൽ WEBP",
    "identify.cattlePreviewAlt": "കന്നുകാലി പ്രിവ്യൂ",
    "identify.startAnalysisButton": "വിശകലനം ആരംഭിക്കുക",
    "identify.analyzingButton": "വിശകലനം ചെയ്യുന്നു...",
    "identify.resultsTitle": "ML വിശകലന ഫലങ്ങൾ",
    "identify.resultsDescription": "നിങ്ങളുടെ കന്നുകാലിയുടെ ഇനം തിരിച്ചറിയൽ, ആരോഗ്യ റിപ്പോർട്ട്, വിപണി മൂല്യം എന്നിവ ഇവിടെ ദൃശ്യമാകും.",
    "identify.step2Title": "2. ഇനം തിരിച്ചറിയൽ",
    "identify.identifiedBreed": "തിരിച്ചറിഞ്ഞ ഇനം",
    "identify.confidenceScore": "ആത്മവിശ്വാസ സ്കോർ",
    "identify.step3Title": "3. ആരോഗ്യ റിപ്പോർട്ട്",
    "identify.healthReportDescription": "AI-ഉണ്ടാക്കിയ ആരോഗ്യ വിലയിരുത്തൽ.",
    "identify.healthScore": "ആരോഗ്യ സ്കോർ",
    "identify.vetNotes": "വെറ്ററിനറി ഡോക്ടറുടെ കുറിപ്പുകൾ",
    "identify.ageInputDescription": "വിപണി മൂല്യം കണക്കാക്കാൻ പ്രായം നൽകുക.",
    "identify.agePlaceholder": "പ്രായം (വർഷം)",
    "identify.estimateButton": "മൂല്യം കണക്കാക്കുക",
    "identify.estimatingValue": "വിപണി മൂല്യം കണക്കാക്കുന്നു...",
    "identify.step4Title": "4. കണക്കാക്കിയ വിപണി മൂല്യം",
    "identify.marketValueDescription": "ഇനം, പ്രായം, ആരോഗ്യം എന്നിവയെ അടിസ്ഥാനമാക്കി.",
    "identify.reasoning": "കാരണം",
    "identify.uploadError": "ദയവായി ആദ്യം ഒരു ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.",
    "identify.analysisFailedTitle": "വിശകലനം പരാജയപ്പെട്ടു",
    "identify.analysisFailedDescription": "ചിത്രം വിശകലനം ചെയ്യാൻ കഴിഞ്ഞില്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
    "identify.missingInfoTitle": "വിവരങ്ങൾ ലഭ്യമല്ല",
    "identify.missingInfoDescription": "മൂല്യം കണക്കാക്കാൻ ഇനം, ആരോഗ്യ സ്കോർ, പ്രായം എന്നിവ ആവശ്യമാണ്.",
    "identify.estimationErrorTitle": "വിപണി മൂല്യം കണക്കാക്കുന്നതിൽ പിശക്",
    "identify.estimationErrorDescription": "ദയവായി വീണ്ടും ശ്രമിക്കുക.",
    "identify.apiKeyErrorTitle": "Gemini API കീ ആവശ്യമാണ്",
    "identify.apiKeyErrorDescription": "ദയവായി നിങ്ങളുടെ Gemini API കീ .env ഫയലിൽ ചേർക്കുക.",

    "marketplace.pageTitle": "കന്നുകാലി വിപണി",
    "marketplace.pageDescription": "AI-പവർ ചെയ്യുന്ന ഉൾക്കാഴ്ചകളോടെ കന്നുകാലികളെ വാങ്ങുകയും വിൽക്കുകയും ചെയ്യുക.",
    "marketplace.breedFilterLabel": "ഇനം",
    "marketplace.breedFilterPlaceholder": "ഇനം അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക",
    "marketplace.allBreeds": "എല്ലാ ഇനങ്ങളും",
    "marketplace.locationFilterLabel": "സ്ഥലം",
    "marketplace.locationFilterPlaceholder": "സ്ഥലം അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക",
    "marketplace.allLocations": "എല്ലാ സ്ഥലങ്ങളും",
    "marketplace.priceRangeLabel": "വില പരിധി",
    "marketplace.aiHealth": "AI ആരോഗ്യം:",
    "marketplace.yearsOld": "{{count}} വയസ്സ്",
    "marketplace.viewDetailsButton": "വിശദാംശങ്ങൾ കാണുക",
    "marketplace.noResults": "നിലവിലെ ഫിൽട്ടറുകളുമായി പൊരുത്തപ്പെടുന്ന കന്നുകാലികളൊന്നുമില്ല.",
    "marketplace.sellCattle": "നിങ്ങളുടെ കന്നുകാലികളെ വിൽക്കുക",
    "marketplace.dialogTitle": "വിൽപ്പനയ്ക്കായി നിങ്ങളുടെ കന്നുകാലികളെ ലിസ്റ്റുചെയ്യുക",
    "marketplace.dialogDescription": "വിപണിയിൽ നിങ്ങളുടെ കന്നുകാലികളെ ചേർക്കുന്നതിന് ചുവടെയുള്ള വിശദാംശങ്ങൾ പൂരിപ്പിക്കുക.",
    "marketplace.photoLabel": "കന്നുകാലിയുടെ ഫോട്ടോ",
    "marketplace.imagePreviewAlt": "കന്നുകാലി പ്രിവ്യൂ",
    "marketplace.dialogBreedLabel": "ഇനം",
    "marketplace.dialogBreedPlaceholder": "ഉദാ: ഗിർ",
    "marketplace.dialogAgeLabel": "പ്രായം (വർഷം)",
    "marketplace.dialogAgePlaceholder": "ഉദാ: 3",
    "marketplace.dialogPriceLabel": "വില (INR)",
    "marketplace.dialogPricePlaceholder": "ഉദാ: 75000",
    "marketplace.dialogLocationLabel": "സ്ഥലം",
    "marketplace.dialogLocationPlaceholder": "ഉദാ: രാജ്കോട്ട്, ഗുജറാത്ത്",
    "marketplace.dialogListButton": "കന്നുകാലികളെ ലിസ്റ്റുചെയ്യുക",
    "marketplace.listingSuccessTitle": "ലിസ്റ്റിംഗ് സൃഷ്ടിച്ചു!",
    "marketplace.listingSuccessDescription": "നിങ്ങളുടെ {{breed}} വിപണിയിൽ ചേർത്തു.",
    "marketplace.breedError": "ഇനം ആവശ്യമാണ്.",
    "marketplace.ageError": "പ്രായം ഒരു പോസിറ്റീവ് സംഖ്യയായിരിക്കണം.",
    "marketplace.priceError": "വില 0-നേക്കാൾ വലുതായിരിക്കണം.",
    "marketplace.locationError": "സ്ഥലം ആവശ്യമാണ്.",
    "marketplace.photoError": "ചിത്രം ആവശ്യമാണ്.",

    "contribute.pageTitle": "ഞങ്ങളുടെ AI-ലേക്ക് സംഭാവന ചെയ്യുക",
    "contribute.pageDescription": "പുതിയതോ പ്രാദേശികമോ ആയ കന്നുകാലി ഇനങ്ങളുടെ ഫോട്ടോകൾ സമർപ്പിച്ച് ഞങ്ങളുടെ ഇനം ഡാറ്റാബേസ് വികസിപ്പിക്കാൻ സഹായിക്കുക.",
    "contribute.formTitle": "ഒരു പുതിയ ഇനം സമർപ്പിക്കുക",
    "contribute.formDescription": "നിങ്ങളുടെ സംഭാവന ഞങ്ങളുടെ AI-യെ എല്ലാവർക്കും മികച്ചതാക്കാൻ സഹായിക്കുന്നു.",
    "contribute.breedNameLabel": "ഇനത്തിൻ്റെ പേര്",
    "contribute.breedNamePlaceholder": "ഉദാ: അംഗസ്, ഹിയർഫോർഡ്",
    "contribute.photoLabel": "കന്നുകാലിയുടെ ഫോട്ടോ",
    "contribute.imagePreviewAlt": "കന്നുകാലി പ്രിവ്യൂ",
    "contribute.submitButton": "അവലോകനത്തിനായി സമർപ്പിക്കുക",
    "contribute.submissionSuccessTitle": "സമർപ്പണം വിജയിച്ചു",
    "contribute.submissionFailedTitle": "സമർപ്പണം പരാജയപ്പെട്ടു",
    "contribute.submissionFailedDescription": "നിങ്ങളുടെ ഡാറ്റ സമർപ്പിക്കുന്നതിൽ ഒരു പ്രശ്നമുണ്ടായി. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
    "contribute.breedNameError": "ഇനത്തിൻ്റെ പേര് കുറഞ്ഞത് 2 അക്ഷരങ്ങളായിരിക്കണം.",
    "contribute.photoError": "ചിത്രം ആവശ്യമാണ്.",

    "experts.pageTitle": "വിദഗ്ദ്ധരുമായി ബന്ധപ്പെടുക",
    "experts.pageDescription": "പ്രൊഫഷണൽ ഉപദേശം ലഭിക്കുന്നതിന് പ്രാദേശിക വെറ്ററിനറി ഡോക്ടർമാരെയും ഇനം വിദഗ്ദ്ധരെയും കണ്ടെത്തുക.",
    "experts.specialtiesLabel": "പ്രത്യേകതകൾ",
    "experts.emailButton": "ഇമെയിൽ",
    "experts.callButton": "വിളിക്കുക",
    "experts.vetTitle": "വെറ്ററിനറി ഡോക്ടർ",
    "experts.specGeneral": "പൊതുവായ ആരോഗ്യം",
    "experts.specNutrition": "പോഷകാഹാരം",
    "experts.girSpecialistTitle": "ഗിർ കന്നുകാലി വിദഗ്ദ്ധൻ",
    "experts.specBreed": "ഇനം തിരഞ്ഞെടുക്കൽ",
    "experts.specGenetics": "ജനിതകശാസ്ത്രം",
    "experts.dairyConsultantTitle": "ഡയറി ഫാമിംഗ് കൺസൾട്ടൻ്റ്",
    "experts.specMilk": "പാൽ ഉത്പാദനം",
    "experts.specFarm": "ഫാം മാനേജ്മെൻ്റ്"
}
```

---
---
---

# FILE: src/locales/mr.json
# PATH: /src/locales/mr.json
```json
{
    "appTitle": "ॲग्रिव्हिस्टा एआय",
    "appSubtitle": "आधुनिक पशु व्यवस्थापनासाठी एआय-शक्तीवर चालणारी अंतर्दृष्टी. निरोगी, अधिक मौल्यवान कळपासाठी तुमचा डिजिटल आरसा.",
    "getStarted": "सुरुवात करा",
    "featuresTitle": "शेतीच्या भविष्यासाठी वैशिष्ट्ये",
    "featuresSubtitle": "आपल्या गुरांबद्दल माहितीपूर्ण निर्णय घेण्यासाठी कृत्रिम बुद्धिमत्तेच्या शक्तीचा लाभ घ्या.",
    "breedRecognition.title": "जात ओळख",
    "breedRecognition.description": "आमच्या प्रगत एआयचा वापर करून प्रतिमेवरून गुरांची जात त्वरित ओळखा.",
    "aiHealthScore.title": "एआय आरोग्य गुण",
    "aiHealthScore.description": "फक्त एक फोटो अपलोड करून आपल्या गुरांसाठी एक व्यापक आरोग्य अहवाल आणि गुण मिळवा.",
    "marketPricePredictor.title": "बाजारभाव अंदाज",
    "marketPricePredictor.description": "जात, वय आणि आरोग्याच्या आधारावर आपल्या गुरांचे बाजारमूल्य अंदाज करा.",
    "expertConnect.title": "तज्ञ संपर्क",
    "expertConnect.description": "व्यावसायिक सल्ल्यासाठी स्थानिक पशुवैद्य आणि जात तज्ञांशी संपर्क साधा.",
    "communityInput.title": "समुदाय इनपुट",
    "communityInput.description": "स्थानिक आणि दुर्मिळ गुरांच्या जातींच्या प्रतिमांचे योगदान देऊन आमचे एआय सुधारण्यास मदत करा.",
    "allRightsReserved": "सर्व हक्क राखीव",
    "home": "होम",
    "identifyAndAnalyze": "ओळखा आणि विश्लेषण करा",
    "marketplace": "बाजारपेठ",
    "contributeData": "डेटा योगदान द्या",
    "findExperts": "तज्ञ शोधा",
    "bharatPashudhan": "भारत पशुधन",
    "language": "भाषा",

    "identify.pageTitle": "गुरांची ओळख आणि विश्लेषण करा",
    "identify.pageDescription": "आपल्या गुरांचे AI-शक्तीवर चालणारे विश्लेषण सुरू करण्यासाठी एक प्रतिमा अपलोड करा.",
    "identify.step1Title": "१. गुरांची प्रतिमा अपलोड करा",
    "identify.clickToUpload": "अपलोड करण्यासाठी क्लिक करा",
    "identify.dragAndDrop": "किंवा ड्रॅग आणि ड्रॉप करा",
    "identify.fileTypes": "PNG, JPG, किंवा WEBP",
    "identify.cattlePreviewAlt": "गुरांची पूर्वावलोकन",
    "identify.startAnalysisButton": "विश्लेषण सुरू करा",
    "identify.analyzingButton": "विश्लेषण होत आहे...",
    "identify.resultsTitle": "एमएल विश्लेषण परिणाम",
    "identify.resultsDescription": "तुमच्या गुरांची जात ओळख, आरोग्य अहवाल आणि बाजार मूल्य येथे दिसेल.",
    "identify.step2Title": "२. जात ओळख",
    "identify.identifiedBreed": "ओळखलेली जात",
    "identify.confidenceScore": "आत्मविश्वास गुण",
    "identify.step3Title": "३. आरोग्य अहवाल",
    "identify.healthReportDescription": "AI-व्युत्पन्न आरोग्य मूल्यांकन.",
    "identify.healthScore": "आरोग्य गुण",
    "identify.vetNotes": "पशुवैद्याच्या नोंदी",
    "identify.ageInputDescription": "बाजार मूल्याची गणना करण्यासाठी वय प्रविष्ट करा.",
    "identify.agePlaceholder": "वय (वर्षे)",
    "identify.estimateButton": "मूल्य अंदाज करा",
    "identify.estimatingValue": "बाजार मूल्याचा अंदाज लावत आहे...",
    "identify.step4Title": "४. अंदाजित बाजार मूल्य",
    "identify.marketValueDescription": "जात, वय आणि आरोग्यावर आधारित.",
    "identify.reasoning": "तर्क",
    "identify.uploadError": "कृपया प्रथम एक प्रतिमा अपलोड करा.",
    "identify.analysisFailedTitle": "विश्लेषण अयशस्वी",
    "identify.analysisFailedDescription": "प्रतिमेचे विश्लेषण करता आले नाही. कृपया पुन्हा प्रयत्न करा.",
    "identify.missingInfoTitle": "माहिती गहाळ आहे",
    "identify.missingInfoDescription": "मूल्याचा अंदाज लावण्यासाठी जात, आरोग्य गुण आणि वय आवश्यक आहे.",
    "identify.estimationErrorTitle": "बाजार मूल्याचा अंदाज लावण्यात त्रुटी",
    "identify.estimationErrorDescription": "कृपया पुन्हा प्रयत्न करा.",
    "identify.apiKeyErrorTitle": "Gemini API की आवश्यक आहे",
    "identify.apiKeyErrorDescription": "कृपया तुमच्या .env फाईलमध्ये तुमची Gemini API की जोडा.",

    "marketplace.pageTitle": "गुरांची बाजारपेठ",
    "marketplace.pageDescription": "AI-शक्तीवर चालणाऱ्या अंतर्दृष्टीने गुरे खरेदी आणि विक्री करा.",
    "marketplace.breedFilterLabel": "जात",
    "marketplace.breedFilterPlaceholder": "जातीनुसार फिल्टर करा",
    "marketplace.allBreeds": "सर्व जाती",
    "marketplace.locationFilterLabel": "स्थान",
    "marketplace.locationFilterPlaceholder": "स्थानानुसार फिल्टर करा",
    "marketplace.allLocations": "सर्व स्थाने",
    "marketplace.priceRangeLabel": "किंमत श्रेणी",
    "marketplace.aiHealth": "AI आरोग्य:",
    "marketplace.yearsOld": "{{count}} वर्षे जुने",
    "marketplace.viewDetailsButton": "तपशील पहा",
    "marketplace.noResults": "सध्याच्या फिल्टरशी जुळणारे कोणतेही गुरे नाहीत.",
    "marketplace.sellCattle": "आपली गुरे विका",
    "marketplace.dialogTitle": "विक्रीसाठी आपली गुरे सूचीबद्ध करा",
    "marketplace.dialogDescription": "बाजारात आपली गुरे जोडण्यासाठी खालील तपशील भरा.",
    "marketplace.photoLabel": "गुरांचा फोटो",
    "marketplace.imagePreviewAlt": "गुरांची पूर्वावलोकन",
    "marketplace.dialogBreedLabel": "जात",
    "marketplace.dialogBreedPlaceholder": "उदा. गीर",
    "marketplace.dialogAgeLabel": "वय (वर्षे)",
    "marketplace.dialogAgePlaceholder": "उदा. ३",
    "marketplace.dialogPriceLabel": "किंमत (INR)",
    "marketplace.dialogPricePlaceholder": "उदा. ७५०००",
    "marketplace.dialogLocationLabel": "स्थान",
    "marketplace.dialogLocationPlaceholder": "उदा. राजकोट, गुजरात",
    "marketplace.dialogListButton": "गुरे सूचीबद्ध करा",
    "marketplace.listingSuccessTitle": "सूची तयार झाली!",
    "marketplace.listingSuccessDescription": "तुमची {{breed}} बाजारात जोडली गेली आहे.",
    "marketplace.breedError": "जात आवश्यक आहे.",
    "marketplace.ageError": "वय सकारात्मक संख्या असणे आवश्यक आहे.",
    "marketplace.priceError": "किंमत ० पेक्षा जास्त असणे आवश्यक आहे.",
    "marketplace.locationError": "स्थान आवश्यक आहे.",
    "marketplace.photoError": "प्रतिमा आवश्यक आहे.",

    "contribute.pageTitle": "आमच्या AI मध्ये योगदान द्या",
    "contribute.pageDescription": "नवीन किंवा स्थानिक गुरांच्या जातींचे फोटो सबमिट करून आमचा जात डेटाबेस विस्तृत करण्यास मदत करा.",
    "contribute.formTitle": "नवीन जात सबमिट करा",
    "contribute.formDescription": "तुमचे योगदान आमचे AI सर्वांसाठी अधिक स्मार्ट बनविण्यात मदत करते.",
    "contribute.breedNameLabel": "जातीचे नाव",
    "contribute.breedNamePlaceholder": "उदा. अंगस, हेरफोर्ड",
    "contribute.photoLabel": "गुरांचा फोटो",
    "contribute.imagePreviewAlt": "गुरांची पूर्वावलोकन",
    "contribute.submitButton": "पुनरावलोकनासाठी सबमिट करा",
    "contribute.submissionSuccessTitle": "सबमिशन यशस्वी",
    "contribute.submissionFailedTitle": "सबमिशन अयशस्वी",
    "contribute.submissionFailedDescription": "तुमचा डेटा सबमिट करताना समस्या आली. कृपया पुन्हा प्रयत्न करा.",
    "contribute.breedNameError": "जातीचे नाव किमान २ अक्षरे असणे आवश्यक आहे.",
    "contribute.photoError": "प्रतिमा आवश्यक आहे.",

    "experts.pageTitle": "तज्ञांशी संपर्क साधा",
    "experts.pageDescription": "व्यावसायिक सल्ला घेण्यासाठी स्थानिक पशुवैद्य आणि जात तज्ञांना शोधा.",
    "experts.specialtiesLabel": "विशेषता",
    "experts.emailButton": "ईमेल",
    "experts.callButton": "कॉल",
    "experts.vetTitle": "पशुवैद्य",
    "experts.specGeneral": "सामान्य आरोग्य",
    "experts.specNutrition": "पोषण",
    "experts.girSpecialistTitle": "गीर गुरे तज्ञ",
    "experts.specBreed": "जात निवड",
    "experts.specGenetics": "आनुवंशिकी",
    "experts.dairyConsultantTitle": "दुग्ध व्यवसाय सल्लागार",
    "experts.specMilk": "दूध उत्पादन",
    "experts.specFarm": "फार्म व्यवस्थापन"
}
```

---
---
---

# FILE: src/locales/pa.json
# PATH: /src/locales/pa.json
```json
{
    "appTitle": "ਐਗਰੀਵਿਸਟਾ ਏਆਈ",
    "appSubtitle": "ਆਧੁਨਿਕ ਪਸ਼ੂ ਪ੍ਰਬੰਧਨ ਲਈ ਏਆਈ-ਸੰਚਾਲਿਤ ਸੂਝ-ਬੂਝ। ਇੱਕ ਸਿਹਤਮੰਦ, ਵਧੇਰੇ ਕੀਮਤੀ ਇੱਜੜ ਲਈ ਤੁਹਾਡਾ ਡਿਜੀਟਲ ਸ਼ੀਸ਼ਾ।",
    "getStarted": "ਸ਼ੁਰੂ ਕਰੋ",
    "featuresTitle": "ਖੇਤੀ ਦੇ ਭਵਿੱਖ ਲਈ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    "featuresSubtitle": "ਆਪਣੇ ਪਸ਼ੂਆਂ ਬਾਰੇ ਸੂਚਿਤ ਫੈਸਲੇ ਲੈਣ ਲਈ ਨਕਲੀ ਬੁੱਧੀ ਦੀ ਸ਼ਕਤੀ ਦਾ ਲਾਭ ਉठाਓ।",
    "breedRecognition.title": "ਨਸਲ ਦੀ ਪਛਾਣ",
    "breedRecognition.description": "ਸਾਡੇ ਉੱਨਤ ਏਆਈ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੱਕ ਚਿੱਤਰ ਤੋਂ ਪਸ਼ੂਆਂ ਦੀਆਂ ਨਸਲਾਂ ਨੂੰ ਤੁਰੰਤ ਪਛਾਣੋ।",
    "aiHealthScore.title": "ਏਆਈ ਸਿਹਤ ਸਕੋਰ",
    "aiHealthScore.description": "صرف ਇੱਕ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰਕੇ ਆਪਣੇ ਪਸ਼ੂਆਂ ਲਈ ਇੱਕ ਵਿਆਪਕ ਸਿਹਤ ਰਿਪੋਰਟ ਅਤੇ ਸਕੋਰ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "marketPricePredictor.title": "ਬਾਜ਼ਾਰ ਕੀਮਤ ਭਵਿੱਖਬਾਣੀ",
    "marketPricePredictor.description": "ਨਸਲ, ਉਮر ਅਤੇ ਸਿਹਤ ਦੇ ਆਧਾਰ 'ਤੇ ਆਪਣੇ ਪਸ਼ੂਆਂ ਦੀ ਬਾਜ਼ਾਰੀ ਕੀਮਤ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਓ।",
    "expertConnect.title": "ਮਾਹਰ ਕਨੈਕਟ",
    "expertConnect.description": "ਪੇਸ਼ੇਵਰ ਸਲਾਹ ਲਈ ਸਥਾਨਕ ਪਸ਼ੂਆਂ ਦੇ ਡਾਕਟਰਾਂ ਅਤੇ ਨਸਲ ਮਾਹਰਾਂ ਨਾਲ ਜੁੜੋ।",
    "communityInput.title": "ਕਮਿਊਨਿਟੀ ਇਨਪੁਟ",
    "communityInput.description": "ਸਥਾਨਕ ਅਤੇ ਦੁਰਲੱਭ ਪਸ਼ੂਆਂ ਦੀਆਂ ਨਸਲਾਂ ਦੀਆਂ ਤਸਵੀਰਾਂ ਦਾ ਯੋਗਦਾਨ ਪਾ ਕੇ ਸਾਡੇ ਏઆਈ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।",
    "allRightsReserved": "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ",
    "home": "ਹੋਮ",
    "identifyAndAnalyze": "ਪਛਾਣੋ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ણ કરો",
    "marketplace": "ਮਾਰਕੀਟਪਲੇਸ",
    "contributeData": "ਡਾਟਾ ਯੋਗਦਾਨ ਪਾਓ",
    "findExperts": "ਮਾਹਰ ਲੱਭੋ",
    "bharatPashudhan": "ਭਾਰਤ ਪਸ਼ੂਧਨ",
    "language": "ਭਾਸ਼ਾ",

    "identify.pageTitle": "ਪਸ਼ੂਆਂ ਦੀ ਪਛਾਣ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
    "identify.pageDescription": "ਆਪਣੇ ਪਸ਼ੂਆਂ ਦੇ ਏਆਈ-ਸੰਚਾਲਿਤ ਵਿਸ਼ਲੇਸ਼ਣ ਨੂੰ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਇੱਕ ਚਿੱਤਰ ਅੱਪਲੋਡ ਕਰੋ।",
    "identify.step1Title": "੧. ਪਸ਼ੂ ਦਾ ਚਿੱਤਰ ਅੱਪਲੋਡ ਕਰੋ",
    "identify.clickToUpload": "ਅੱਪਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
    "identify.dragAndDrop": "ਜਾਂ ਖਿੱਚੋ ਅਤੇ ਸੁੱਟੋ",
    "identify.fileTypes": "PNG, JPG, ਜਾਂ WEBP",
    "identify.cattlePreviewAlt": "ਪਸ਼ੂ ਦਾ ਪੂਰਵ-દર્શન",
    "identify.startAnalysisButton": "ਵਿਸ਼ਲੇਸ਼ਣ ਸ਼ੁਰੂ ਕਰੋ",
    "identify.analyzingButton": "ਵਿਸ਼ਲੇਸ਼ਣ ਹੋ ਰਿਹਾ ਹੈ...",
    "identify.resultsTitle": "ML ਵਿਸ਼ਲੇਸ਼ਣ ਦੇ ਨਤੀਜੇ",
    "identify.resultsDescription": "ਤੁਹਾਡੇ ਪਸ਼ੂਆਂ ਦੀ ਨਸਲ ਦੀ ਪਛਾਣ, ਸਿਹਤ ਰਿਪੋਰਟ, ਅਤੇ ਬਜ਼ਾਰੀ ਕੀਮਤ ਇੱਥੇ ਦਿਖਾਈ ਦੇਵੇਗੀ।",
    "identify.step2Title": "੨. ਨਸਲ ਦੀ ਪਛਾਣ",
    "identify.identifiedBreed": "ਪਛਾਣੀ ਗਈ ਨਸਲ",
    "identify.confidenceScore": "ਵਿਸ਼ਵਾਸ ਸਕੋਰ",
    "identify.step3Title": "੩. ਸਿਹਤ ਰਿਪੋਰਟ",
    "identify.healthReportDescription": "ਏਆਈ-ਤਿਆਰ ਸਿਹਤ ਮੁਲਾਂਕਣ।",
    "identify.healthScore": "ਸਿਹਤ ਸਕੋਰ",
    "identify.vetNotes": "ਪਸ਼ੂ ਡਾਕਟਰ ਦੇ ਨੋਟਸ",
    "identify.ageInputDescription": "ਬਜ਼ਾਰੀ ਕੀਮਤ ਦੀ ਗਣਨਾ ਕਰਨ ਲਈ ਉਮਰ ਦਰਜ ਕਰੋ।",
    "identify.agePlaceholder": "ਉਮਰ (ਸਾਲ)",
    "identify.estimateButton": "ਕੀਮਤ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਓ",
    "identify.estimatingValue": "ਬਜ਼ਾਰੀ ਕੀਮਤ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਇਆ ਜਾ ਰਿਹਾ ਹੈ...",
    "identify.step4Title": "੪. ਅਨੁਮਾਨਿਤ ਬਜ਼ਾਰੀ ਕੀਮਤ",
    "identify.marketValueDescription": "ਨਸਲ, ਉਮਰ, ਅਤੇ ਸਿਹਤ 'ਤੇ ਆਧਾਰਿਤ।",
    "identify.reasoning": "ਤਰਕ",
    "identify.uploadError": "ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਇੱਕ ਚਿੱਤਰ ਅੱਪਲੋਡ ਕਰੋ।",
    "identify.analysisFailedTitle": "ਵਿਸ਼ਲੇਸ਼ਣ ਅਸਫਲ",
    "identify.analysisFailedDescription": "ਚਿੱਤਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    "identify.missingInfoTitle": "ਜਾਣਕਾਰੀ ਗੁੰਮ ਹੈ",
    "identify.missingInfoDescription": "ਕੀਮਤ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣ ਲਈ ਨਸਲ, ਸਿਹਤ ਸਕੋਰ, ਅਤੇ ਉਮਰ ਜ਼ਰੂਰੀ ਹਨ।",
    "identify.estimationErrorTitle": "ਬਜ਼ਾਰੀ ਕੀਮਤ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣ ਵਿੱਚ ਗਲਤੀ",
    "identify.estimationErrorDescription": "ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    "identify.apiKeyErrorTitle": "Gemini API ਕੁੰਜੀ ਦੀ ਲੋੜ ਹੈ",
    "identify.apiKeyErrorDescription": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ Gemini API ਕੁੰਜੀ ਨੂੰ .env ਫਾਈਲ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ।",

    "marketplace.pageTitle": "ਪਸ਼ੂ ਮਾਰਕੀਟਪਲੇਸ",
    "marketplace.pageDescription": "ਏਆਈ-ਸੰਚਾਲਿਤ ਸੂਝ-ਬੂਝ ਨਾਲ ਪਸ਼ੂ ਖਰੀਦੋ ਅਤੇ ਵੇਚੋ।",
    "marketplace.breedFilterLabel": "ਨਸਲ",
    "marketplace.breedFilterPlaceholder": "ਨਸਲ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ",
    "marketplace.allBreeds": "ਸਾਰੀਆਂ ਨਸਲਾਂ",
    "marketplace.locationFilterLabel": "ਸਥਾਨ",
    "marketplace.locationFilterPlaceholder": "ਸਥਾਨ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ",
    "marketplace.allLocations": "ਸਾਰੇ ਸਥਾਨ",
    "marketplace.priceRangeLabel": "ਕੀਮਤ ਦੀ ਰੇਂਜ",
    "marketplace.aiHealth": "ਏਆਈ ਸਿਹਤ:",
    "marketplace.yearsOld": "{{count}} ਸਾਲ ਪੁਰਾਣਾ",
    "marketplace.viewDetailsButton": "ਵੇਰਵੇ ਵੇਖੋ",
    "marketplace.noResults": "ਮੌਜੂਦਾ ਫਿਲਟਰਾਂ ਨਾਲ ਕੋਈ ਪਸ਼ੂ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ।",
    "marketplace.sellCattle": "ਆਪਣੇ ਪਸ਼ੂ ਵੇਚੋ",
    "marketplace.dialogTitle": "ਵਿਕਰੀ ਲਈ ਆਪਣੇ ਪਸ਼ੂਆਂ ਦੀ ਸੂਚੀ ਬਣਾਓ",
    "marketplace.dialogDescription": "ਮਾਰਕੀਟਪਲੇਸ ਵਿੱਚ ਆਪਣੇ ਪਸ਼ੂਆਂ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਵੇਰਵੇ ਭਰੋ।",
    "marketplace.photoLabel": "ਪਸ਼ੂ ਦੀ ਫੋਟੋ",
    "marketplace.imagePreviewAlt": "ਪਸ਼ੂ ਦਾ ਪੂਰਵ-દર્શન",
    "marketplace.dialogBreedLabel": "ਨਸਲ",
    "marketplace.dialogBreedPlaceholder": "ਜਿਵੇਂ ਕਿ, ਗਿਰ",
    "marketplace.dialogAgeLabel": "ਉਮਰ (ਸਾਲ)",
    "marketplace.dialogAgePlaceholder": "ਜਿਵੇਂ ਕਿ, 3",
    "marketplace.dialogPriceLabel": "ਕੀਮਤ (INR)",
    "marketplace.dialogPricePlaceholder": "ਜਿਵੇਂ ਕਿ, 75000",
    "marketplace.dialogLocationLabel": "ਸਥਾਨ",
    "marketplace.dialogLocationPlaceholder": "ਜਿਵੇਂ ਕਿ, ਰਾਜਕੋਟ, ਗੁਜਰਾਤ",
    "marketplace.dialogListButton": "ਪਸ਼ੂਆਂ ਦੀ ਸੂਚੀ ਬਣਾਓ",
    "marketplace.listingSuccessTitle": "ਸੂਚੀ ਬਣਾਈ ਗਈ!",
    "marketplace.listingSuccessDescription": "ਤੁਹਾਡਾ {{breed}} ਮਾਰਕੀਟਪਲੇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਹੈ।",
    "marketplace.breedError": "ਨਸਲ ਦੀ ਲੋੜ ਹੈ।",
    "marketplace.ageError": "ਉਮਰ ਇੱਕ ਸਕਾਰਾਤਮਕ ਸੰਖਿਆ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
    "marketplace.priceError": "ਕੀਮਤ 0 ਤੋਂ ਵੱਧ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
    "marketplace.locationError": "ਸਥਾਨ ਦੀ ਲੋੜ ਹੈ।",
    "marketplace.photoError": "ਚਿੱਤਰ ਦੀ ਲੋੜ ਹੈ।",

    "contribute.pageTitle": "ਸਾਡੇ ਏਆਈ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਓ",
    "contribute.pageDescription": "ਨਵੀਆਂ ਜਾਂ ਸਥਾਨਕ ਪਸ਼ੂਆਂ ਦੀਆਂ ਨਸਲਾਂ ਦੀਆਂ ਫੋਟੋਆਂ ਜਮ੍ਹਾਂ ਕਰਕੇ ਸਾਡੇ ਨਸਲ ਡੇਟਾਬੇਸ ਦਾ ਵਿਸਥਾਰ ਕਰਨ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ।",
    "contribute.formTitle": "ਇੱਕ ਨਵੀਂ ਨਸਲ ਜਮ੍ਹਾਂ ਕਰੋ",
    "contribute.formDescription": "ਤੁਹਾਡਾ ਯੋਗਦਾਨ ਸਾਡੇ ਏਆਈ ਨੂੰ ਸਾਰਿਆਂ ਲਈ ਵਧੇਰੇ ਸਮਾਰਟ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    "contribute.breedNameLabel": "ਨਸਲ ਦਾ ਨਾਮ",
    "contribute.breedNamePlaceholder": "ਜਿਵੇਂ ਕਿ, ਐਂਗਸ, ਹੇਅਰਫੋਰਡ",
    "contribute.photoLabel": "ਪਸ਼ੂ ਦੀ ਫੋਟੋ",
    "contribute.imagePreviewAlt": "ਪਸ਼ੂ ਦਾ ਪੂਰਵ-દર્શન",
    "contribute.submitButton": "ਸਮੀਖਿਆ ਲਈ ਜਮ੍ਹਾਂ ਕਰੋ",
    "contribute.submissionSuccessTitle": "ਜਮ੍ਹਾਂ ਕਰਨਾ ਸਫਲ",
    "contribute.submissionFailedTitle": "ਜਮ੍ਹਾਂ ਕਰਨਾ ਅਸਫਲ",
    "contribute.submissionFailedDescription": "ਤੁਹਾਡਾ ਡੇਟਾ ਜਮ੍ਹਾਂ ਕਰਨ ਵਿੱਚ ਇੱਕ ਸਮੱਸਿਆ ਸੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    "contribute.breedNameError": "ਨਸਲ ਦਾ ਨਾਮ ਘੱਟੋ-ਘੱਟ 2 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
    "contribute.photoError": "ਚਿੱਤਰ ਦੀ ਲੋੜ ਹੈ।",

    "experts.pageTitle": "ਮਾਹਰਾਂ ਨਾਲ ਜੁੜੋ",
    "experts.pageDescription": "ਪੇਸ਼ੇਵਰ ਸਲਾਹ ਲੈਣ ਲਈ ਸਥਾਨਕ ਪਸ਼ੂਆਂ ਦੇ ਡਾਕਟਰਾਂ ਅਤੇ ਨਸਲ ਮਾਹਰਾਂ ਨੂੰ ਲੱਭੋ।",
    "experts.specialtiesLabel": "ਮਾਹਰਤਾਵਾਂ",
    "experts.emailButton": "ਈਮੇਲ",
    "experts.callButton": "ਕਾਲ ਕਰੋ",
    "experts.vetTitle": "ਪਸ਼ੂਆਂ ਦਾ ਡਾਕਟਰ",
    "experts.specGeneral": "ਆਮ ਸਿਹਤ",
    "experts.specNutrition": "ਪੋਸ਼ਣ",
    "experts.girSpecialistTitle": "ਗਿਰ ਪਸ਼ੂ ਮਾਹਰ",
    "experts.specBreed": "ਨਸਲ ਦੀ ਚੋਣ",
    "experts.specGenetics": "ਜੈਨੇਟਿਕਸ",
    "experts.dairyConsultantTitle": "ਡੇਅਰੀ ਫਾਰਮਿੰਗ ਸਲਾਹਕਾਰ",
    "experts.specMilk": "ਦੁੱਧ ਉਤਪਾਦਨ",
    "experts.specFarm": "ਫਾਰਮ ਪ੍ਰਬੰਧਨ"
}
```

---
---
---

# FILE: src/locales/ta.json
# PATH: /src/locales/ta.json
```json
{
    "appTitle": "அக்ரிவிஸ்டா AI",
    "appSubtitle": "நவீன கால்நடை நிர்வாகத்திற்கான AI-இயங்கும் நுண்ணறிவுகள். ஆரோக்கியமான, மதிப்புமிக்க மந்தைக்கு உங்கள் டிஜிட்டல் கண்ணாடி.",
    "getStarted": "தொடங்கவும்",
    "featuresTitle": "விவசாயத்தின் எதிர்காலத்திற்கான அம்சங்கள்",
    "featuresSubtitle": "உங்கள் கால்நடைகளைப் பற்றிய தகவலறிந்த முடிவுகளை எடுக்க செயற்கை நுண்ணறிவின் ஆற்றலைப் பயன்படுத்துங்கள்.",
    "breedRecognition.title": "இனத்தை கண்டறிதல்",
    "breedRecognition.description": "எங்கள் மேம்பட்ட AI ஐப் பயன்படுத்தி ஒரு படத்திலிருந்து கால்நடை இனங்களை உடனடியாக அடையாளம் காணவும்.",
    "aiHealthScore.title": "AI சுகாதார மதிப்பெண்",
    "aiHealthScore.description": "ஒரு புகைப்படத்தைப் பதிவேற்றுவதன் மூலம் உங்கள் கால்நடைகளுக்கான விரிவான சுகாதார அறிக்கை மற்றும் மதிப்பெண்ணைப் பெறுங்கள்.",
    "marketPricePredictor.title": "சந்தை விலை முன்கணிப்பு",
    "marketPricePredictor.description": "இனம், வயது மற்றும் ஆரோக்கியத்தின் அடிப்படையில் உங்கள் கால்நடைகளின் சந்தை மதிப்பை மதிப்பிடுங்கள்.",
    "expertConnect.title": "நிபுணர் இணைப்பு",
    "expertConnect.description": "தொழில்முறை ஆலோசனைக்கு உள்ளூர் கால்நடை மருத்துவர்கள் மற்றும் இன நிபுணர்களுடன் இணையுங்கள்.",
    "communityInput.title": "சமூக உள்ளீடு",
    "communityInput.description": "உள்ளூர் மற்றும் அரிதான கால்நடை இனங்களின் படங்களை வழங்குவதன் மூலம் எங்கள் AI ஐ மேம்படுத்த உதவுங்கள்.",
    "allRightsReserved": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    "home": "முகப்பு",
    "identifyAndAnalyze": "அடையாளம் & பகுப்பாய்வு",
    "marketplace": "சந்தை",
    "contributeData": "தரவை வழங்கவும்",
    "findExperts": "நிபுணர்களைக் கண்டறியவும்",
    "bharatPashudhan": "பாரத் பசுधन",
    "language": "மொழி",

    "identify.pageTitle": "கால்நடைகளை அடையாளம் கண்டு பகுப்பாய்வு செய்யுங்கள்",
    "identify.pageDescription": "உங்கள் கால்நடைகளின் AI-இயங்கும் பகுப்பாய்வைத் தொடங்க ஒரு படத்தைப் பதிவேற்றவும்.",
    "identify.step1Title": "1. கால்நடைப் படத்தைப் பதிவேற்றவும்",
    "identify.clickToUpload": "பதிவேற்ற கிளிக் செய்யவும்",
    "identify.dragAndDrop": "அல்லது இழுத்து விடவும்",
    "identify.fileTypes": "PNG, JPG, அல்லது WEBP",
    "identify.cattlePreviewAlt": "கால்நடை முன்னோட்டம்",
    "identify.startAnalysisButton": "பகுப்பாய்வைத் தொடங்கு",
    "identify.analyzingButton": "பகுப்பாய்வு செய்யப்படுகிறது...",
    "identify.resultsTitle": "ML பகுப்பாய்வு முடிவுகள்",
    "identify.resultsDescription": "உங்கள் கால்நடைகளின் இனம் அடையாளம், சுகாதார அறிக்கை மற்றும் சந்தை மதிப்பு இங்கே தோன்றும்.",
    "identify.step2Title": "2. இனம் அடையாளம்",
    "identify.identifiedBreed": "அடையாளம் காணப்பட்ட இனம்",
    "identify.confidenceScore": "நம்பிக்கை மதிப்பெண்",
    "identify.step3Title": "3. சுகாதார அறிக்கை",
    "identify.healthReportDescription": "AI-உருவாக்கிய சுகாதார மதிப்பீடு.",
    "identify.healthScore": "சுகாதார மதிப்பெண்",
    "identify.vetNotes": "கால்நடை மருத்துவரின் குறிப்புகள்",
    "identify.ageInputDescription": "சந்தை மதிப்பைக் கணக்கிட வயதை உள்ளிடவும்.",
    "identify.agePlaceholder": "வயது (ஆண்டுகள்)",
    "identify.estimateButton": "மதிப்பைக் கணக்கிடு",
    "identify.estimatingValue": "சந்தை மதிப்பைக் கணக்கிடுகிறது...",
    "identify.step4Title": "4. மதிப்பிடப்பட்ட சந்தை மதிப்பு",
    "identify.marketValueDescription": "இனம், வயது மற்றும் ஆரோக்கியத்தின் அடிப்படையில்.",
    "identify.reasoning": "காரணம்",
    "identify.uploadError": "முதலில் ஒரு படத்தைப் பதிவேற்றவும்.",
    "identify.analysisFailedTitle": "பகுப்பாய்வு தோல்வியுற்றது",
    "identify.analysisFailedDescription": "படத்தை பகுப்பாய்வு செய்ய முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
    "identify.missingInfoTitle": "விவரங்கள் இல்லை",
    "identify.missingInfoDescription": "மதிப்பைக் கணக்கிட இனம், சுகாதார மதிப்பெண் மற்றும் வயது தேவை.",
    "identify.estimationErrorTitle": "சந்தை மதிப்பைக் கணக்கிடுவதில் பிழை",
    "identify.estimationErrorDescription": "தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
    "identify.apiKeyErrorTitle": "ஜெமினி API விசை தேவை",
    "identify.apiKeyErrorDescription": "உங்கள் ஜெமினி API விசையை .env கோப்பில் சேர்க்கவும்.",

    "marketplace.pageTitle": "கால்நடை சந்தை",
    "marketplace.pageDescription": "AI-இயங்கும் நுண்ணறிவுகளுடன் கால்நடைகளை வாங்கவும் விற்கவும்.",
    "marketplace.breedFilterLabel": "இனம்",
    "marketplace.breedFilterPlaceholder": "இனத்தின்படி வடிகட்டவும்",
    "marketplace.allBreeds": "அனைத்து இனங்களும்",
    "marketplace.locationFilterLabel": "இடம்",
    "marketplace.locationFilterPlaceholder": "இடத்தின்படி வடிகட்டவும்",
    "marketplace.allLocations": "அனைத்து இடங்களும்",
    "marketplace.priceRangeLabel": "விலை வரம்பு",
    "marketplace.aiHealth": "AI ஆரோக்கியம்:",
    "marketplace.yearsOld": "{{count}} வயது",
    "marketplace.viewDetailsButton": "விவரங்களைக் காண்க",
    "marketplace.noResults": "தற்போதைய வடிகட்டிகளுடன் எந்த கால்நடைகளும் பொருந்தவில்லை.",
    "marketplace.sellCattle": "உங்கள் கால்நடைகளை விற்கவும்",
    "marketplace.dialogTitle": "விற்பனைக்கு உங்கள் கால்நடைகளைப் பட்டியலிடுங்கள்",
    "marketplace.dialogDescription": "சந்தையில் உங்கள் கால்நடைகளைச் சேர்க்க கீழேயுள்ள விவரங்களை நிரப்பவும்.",
    "marketplace.photoLabel": "கால்நடைகளின் புகைப்படம்",
    "marketplace.imagePreviewAlt": "கால்நடை முன்னோட்டம்",
    "marketplace.dialogBreedLabel": "இனம்",
    "marketplace.dialogBreedPlaceholder": "எ.கா., கிர்",
    "marketplace.dialogAgeLabel": "வயது (ஆண்டுகள்)",
    "marketplace.dialogAgePlaceholder": "எ.கா., 3",
    "marketplace.dialogPriceLabel": "விலை (INR)",
    "marketplace.dialogPricePlaceholder": "எ.கா., 75000",
    "marketplace.dialogLocationLabel": "இடம்",
    "marketplace.dialogLocationPlaceholder": "எ.கா., ராஜ்கோட், குஜராத்",
    "marketplace.dialogListButton": "கால்நடைகளைப் பட்டியலிடுங்கள்",
    "marketplace.listingSuccessTitle": "பட்டியல் உருவாக்கப்பட்டது!",
    "marketplace.listingSuccessDescription": "உங்கள் {{breed}} சந்தையில் சேர்க்கப்பட்டுள்ளது.",
    "marketplace.breedError": "இனம் தேவை.",
    "marketplace.ageError": "வயது ஒரு நேர்மறை எண்ணாக இருக்க வேண்டும்.",
    "marketplace.priceError": "விலை 0 ஐ விட அதிகமாக இருக்க வேண்டும்.",
    "marketplace.locationError": "இடம் தேவை.",
    "marketplace.photoError": "படம் தேவை.",

    "contribute.pageTitle": "எங்கள் AI-க்கு பங்களிக்கவும்",
    "contribute.pageDescription": "புதிய அல்லது உள்ளூர் கால்நடை இனங்களின் புகைப்படங்களைச் சமர்ப்பித்து எங்கள் இனத் தரவுத்தளத்தை விரிவுபடுத்த உதவுங்கள்.",
    "contribute.formTitle": "ஒரு புதிய இனத்தைச் சமர்ப்பிக்கவும்",
    "contribute.formDescription": "உங்கள் பங்களிப்பு எங்கள் AI-ஐ அனைவருக்கும் சிறந்ததாக மாற்ற உதவுகிறது.",
    "contribute.breedNameLabel": "இனத்தின் பெயர்",
    "contribute.breedNamePlaceholder": "எ.கா., அங்கஸ், ஹியர்ஃபோர்ட்",
    "contribute.photoLabel": "கால்நடைகளின் புகைப்படம்",
    "contribute.imagePreviewAlt": "கால்நடை முன்னோட்டம்",
    "contribute.submitButton": "மதிப்பாய்வுக்குச் சமர்ப்பிக்கவும்",
    "contribute.submissionSuccessTitle": "சமர்ப்பிப்பு வெற்றி பெற்றது",
    "contribute.submissionFailedTitle": "சமர்ப்பிப்பு தோல்வியுற்றது",
    "contribute.submissionFailedDescription": "உங்கள் தரவைச் சமர்ப்பிப்பதில் சிக்கல் ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
    "contribute.breedNameError": "இனத்தின் பெயர் குறைந்தது 2 எழுத்துகளாக இருக்க வேண்டும்.",
    "contribute.photoError": "படம் தேவை.",

    "experts.pageTitle": "நிபுணர்களுடன் இணையுங்கள்",
    "experts.pageDescription": "தொழில்முறை ஆலோசனை பெற உள்ளூர் கால்நடை மருத்துவர்கள் மற்றும் இன நிபுணர்களைக் கண்டறியவும்.",
    "experts.specialtiesLabel": "சிறப்புத் துறைகள்",
    "experts.emailButton": "மின்னஞ்சல்",
    "experts.callButton": "அழை",
    "experts.vetTitle": "கால்நடை மருத்துவர்",
    "experts.specGeneral": "பொது சுகாதாரம்",
    "experts.specNutrition": "ஊட்டச்சத்து",
    "experts.girSpecialistTitle": "கிர் கால்நடை நிபுணர்",
    "experts.specBreed": "இனத் தேர்வு",
    "experts.specGenetics": "மரபியல்",
    "experts.dairyConsultantTitle": "பால் பண்ணை ஆலோசகர்",
    "experts.specMilk": "பால் உற்பத்தி",
    "experts.specFarm": "பண்ணை மேலாண்மை"
}
```

---
---
---

# FILE: src/locales/te.json
# PATH: /src/locales/te.json
```json
{
    "appTitle": "అగ్రివిస్టా AI",
    "appSubtitle": "ఆధునిక పశువుల నిర్వహణ కోసం AI-ఆధారిత అంతర్దృష్టులు. ఆరోగ్యకరమైన, మరింత విలువైన మంద కోసం మీ డిజిటల్ అద్దం.",
    "getStarted": "ప్రారంభించండి",
    "featuresTitle": "వ్యవసాయ భవిష్యత్తు కోసం ఫీచర్లు",
    "featuresSubtitle": "మీ పశువుల గురించి సమాచారంతో కూడిన నిర్ణయాలు తీసుకోవడానికి కృత్రిమ మేధస్సు శక్తిని ఉపయోగించుకోండి.",
    "breedRecognition.title": "జాతి గుర్తింపు",
    "breedRecognition.description": "మా అధునాతన AIని ఉపయోగించి ఒక చిత్రం నుండి పశువుల జాతులను తక్షణమే గుర్తించండి.",
    "aiHealthScore.title": "AI ఆరోగ్య స్కోరు",
    "aiHealthScore.description": "కేవలం ఒక ఫోటోను అప్‌లోడ్ చేయడం ద్వారా మీ పశువుల కోసం సమగ్ర ఆరోగ్య నివేదిక మరియు స్కోర్‌ను పొందండి.",
    "marketPricePredictor.title": "మార్కెట్ ధర అంచనా",
    "marketPricePredictor.description": "జాతి, వయస్సు మరియు ఆరోగ్యం ఆధారంగా మీ పశువుల మార్కెట్ విలువను అంచనా వేయండి.",
    "expertConnect.title": "నిపుణుల కనెక్ట్",
    "expertConnect.description": "వృత్తిపరమైన సలహా కోసం స్థానిక పశువైద్యులు మరియు జాతి నిపుణులతో కనెక్ట్ అవ్వండి.",
    "communityInput.title": "కమ్యూనిటీ ఇన్‌పుట్",
    "communityInput.description": "ಸ್ಥಳೀಯ మరియు అరుదైన పశువుల జాతుల చిత్రాలను అందించడం ద్వారా మా AIని మెరుగుపరచడంలో సహాయపడండి.",
    "allRightsReserved": "సర్వ హక్కులు ప్రత్యేకించబడినవి",
    "home": "హోమ్",
    "identifyAndAnalyze": "గుర్తించండి & విశ్లేషించండి",
    "marketplace": "మార్కెట్‌ప్లేస్",
    "contributeData": "డేటాను అందించండి",
    "findExperts": "నిపుణులను కనుగొనండి",
    "bharatPashudhan": "భారత్ పశుధన్",
    "language": "భాష",

    "identify.pageTitle": "పశువులను గుర్తించండి & విశ్లేషించండి",
    "identify.pageDescription": "మీ పశువుల AI-ఆధారిత విశ్లేషణను ప్రారంభించడానికి ఒక చిత్రాన్ని అప్‌లోడ్ చేయండి.",
    "identify.step1Title": "1. పశువుల చిత్రాన్ని అప్‌లోడ్ చేయండి",
    "identify.clickToUpload": "అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి",
    "identify.dragAndDrop": "లేదా లాగి వదలండి",
    "identify.fileTypes": "PNG, JPG, లేదా WEBP",
    "identify.cattlePreviewAlt": "పశువుల ప్రివ్యూ",
    "identify.startAnalysisButton": "విశ్లేషణ ప్రారంభించండి",
    "identify.analyzingButton": "విశ్లేషిస్తోంది...",
    "identify.resultsTitle": "ML విశ్లేషణ ఫలితాలు",
    "identify.resultsDescription": "మీ పశువుల జాతి గుర్తింపు, ఆరోగ్య నివేదిక మరియు మార్కెట్ విలువ ఇక్కడ కనిపిస్తాయి.",
    "identify.step2Title": "2. జాతి గుర్తింపు",
    "identify.identifiedBreed": "గుర్తించబడిన జాతి",
    "identify.confidenceScore": "విశ్వాస స్కోరు",
    "identify.step3Title": "3. ఆరోగ్య నివేదిక",
    "identify.healthReportDescription": "AI-ఉత్పత్తి ఆరోగ్య అంచనా.",
    "identify.healthScore": "ఆరోగ్య స్కోరు",
    "identify.vetNotes": "పశువైద్యుని గమనికలు",
    "identify.ageInputDescription": "మార్కెట్ విలువను లెక్కించడానికి వయస్సును నమోదు చేయండి.",
    "identify.agePlaceholder": "వయస్సు (సంవత్సరాలు)",
    "identify.estimateButton": "విలువను అంచనా వేయండి",
    "identify.estimatingValue": "మార్కెట్ విలువను అంచనా వేస్తోంది...",
    "identify.step4Title": "4. అంచనా మార్కెట్ విలువ",
    "identify.marketValueDescription": "జాతి, వయస్సు మరియు ఆరోగ్యం ఆధారంగా.",
    "identify.reasoning": "హేతువు",
    "identify.uploadError": "దయచేసి మొదట ఒక చిత్రాన్ని అప్‌లోడ్ చేయండి.",
    "identify.analysisFailedTitle": "విశ్లేషణ విఫలమైంది",
    "identify.analysisFailedDescription": "చిత్రాన్ని విశ్లేషించలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.",
    "identify.missingInfoTitle": "సమాచారం లేదు",
    "identify.missingInfoDescription": "విలువను అంచనా వేయడానికి జాతి, ఆరోగ్య స్కోరు మరియు వయస్సు అవసరం.",
    "identify.estimationErrorTitle": "మార్కెట్ విలువను అంచనా వేయడంలో లోపం",
    "identify.estimationErrorDescription": "దయచేసి మళ్లీ ప్రయత్నించండి.",
    "identify.apiKeyErrorTitle": "జెమిని API కీ అవసరం",
    "identify.apiKeyErrorDescription": "దయచేసి మీ జెమిని API కీని .env ఫైల్‌కు జోడించండి.",

    "marketplace.pageTitle": "పశువుల మార్కెట్",
    "marketplace.pageDescription": "AI-ఆధారిత అంతర్దృష్టులతో పశువులను కొనండి మరియు అమ్మండి.",
    "marketplace.breedFilterLabel": "జాతి",
    "marketplace.breedFilterPlaceholder": "జాతి వారీగా ఫిల్టర్ చేయండి",
    "marketplace.allBreeds": "అన్ని జాతులు",
    "marketplace.locationFilterLabel": "స్థానం",
    "marketplace.locationFilterPlaceholder": "స్థానం వారీగా ఫిల్టర్ చేయండి",
    "marketplace.allLocations": "అన్ని స్థానాలు",
    "marketplace.priceRangeLabel": "ధర పరిధి",
    "marketplace.aiHealth": "AI ఆరోగ్యం:",
    "marketplace.yearsOld": "{{count}} సంవత్సరాల వయస్సు",
    "marketplace.viewDetailsButton": "వివరాలను వీక్షించండి",
    "marketplace.noResults": "ప్రస్తుత ఫిల్టర్‌లకు సరిపోయే పశువులు లేవు.",
    "marketplace.sellCattle": "మీ పశువులను అమ్మండి",
    "marketplace.dialogTitle": "అమ్మకం కోసం మీ పశువులను జాబితా చేయండి",
    "marketplace.dialogDescription": "మార్కెట్‌లో మీ పశువులను జోడించడానికి దిగువ వివరాలను పూరించండి.",
    "marketplace.photoLabel": "పశువుల ఫోటో",
    "marketplace.imagePreviewAlt": "పశువుల ప్రివ్యూ",
    "marketplace.dialogBreedLabel": "జాతి",
    "marketplace.dialogBreedPlaceholder": "ఉదా., గిర్",
    "marketplace.dialogAgeLabel": "వయస్సు (సంవత్సరాలు)",
    "marketplace.dialogAgePlaceholder": "ఉదా., 3",
    "marketplace.dialogPriceLabel": "ధర (INR)",
    "marketplace.dialogPricePlaceholder": "ఉదా., 75000",
    "marketplace.dialogLocationLabel": "స్థానం",
    "marketplace.dialogLocationPlaceholder": "ఉదా., రాజ్‌కోట్, గుజరాత్",
    "marketplace.dialogListButton": "పశువులను జాబితా చేయండి",
    "marketplace.listingSuccessTitle": "జాబితా సృష్టించబడింది!",
    "marketplace.listingSuccessDescription": "మీ {{breed}} మార్కెట్‌లో జోడించబడింది.",
    "marketplace.breedError": "జాతి అవసరం.",
    "marketplace.ageError": "వయస్సు ఒక ధనాత్మక సంఖ్య అయి ఉండాలి.",
    "marketplace.priceError": "ధర 0 కంటే ఎక్కువగా ఉండాలి.",
    "marketplace.locationError": "స్థానం అవసరం.",
    "marketplace.photoError": "చిత్రం అవసరం.",

    "contribute.pageTitle": "మా AIకి సహకరించండి",
    "contribute.pageDescription": "కొత్త లేదా స్థానిక పశువుల జాతుల ఫోటోలను సమర్పించడం ద్వారా మా జాతి డేటాబేస్‌ను విస్తరించడంలో మాకు సహాయపడండి.",
    "contribute.formTitle": "కొత్త జాతిని సమర్పించండి",
    "contribute.formDescription": "మీ సహకారం మా AIని అందరికీ మరింత తెలివైనదిగా చేయడానికి సహాయపడుతుంది.",
    "contribute.breedNameLabel": "జాతి పేరు",
    "contribute.breedNamePlaceholder": "ఉదా., అంగస్, హియర్‌ఫోర్డ్",
    "contribute.photoLabel": "పశువుల ఫోటో",
    "contribute.imagePreviewAlt": "పశువుల ప్రివ్యూ",
    "contribute.submitButton": "సమీక్ష కోసం సమర్పించండి",
    "contribute.submissionSuccessTitle": "సమర్పణ విజయవంతమైంది",
    "contribute.submissionFailedTitle": "సమర్పణ విఫలమైంది",
    "contribute.submissionFailedDescription": "మీ డేటాను సమర్పించడంలో సమస్య ఉంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
    "contribute.breedNameError": "జాతి పేరు కనీసం 2 అక్షరాలు ఉండాలి.",
    "contribute.photoError": "చిత్రం అవసరం.",

    "experts.pageTitle": "నిపుణులతో కనెక్ట్ అవ్వండి",
    "experts.pageDescription": "వృత్తిపరమైన సలహా పొందడానికి స్థానిక పశువైద్యులు మరియు జాతి నిపుణులను కనుగొనండి.",
    "experts.specialtiesLabel": "ప్రత్యేకతలు",
    "experts.emailButton": "ఇమెయిల్",
    "experts.callButton": "కాల్",
    "experts.vetTitle": "పశువైద్యుడు",
    "experts.specGeneral": "సాధారణ ఆరోగ్యం",
    "experts.specNutrition": "పోషణ",
    "experts.girSpecialistTitle": "గిర్ పశువుల నిపుణుడు",
    "experts.specBreed": "జాతి ఎంపిక",
    "experts.specGenetics": "జన్యుశాస్త్రం",
    "experts.dairyConsultantTitle": "డైరీ ఫార్మింగ్ కన్సల్టెంట్",
    "experts.specMilk": "పాల ఉత్పత్తి",
    "experts.specFarm": "ఫార్మ్ నిర్వహణ"
}
```

---
---
---

# FILE: src/components/app-logo.tsx
# PATH: /src/components/app-logo.tsx
```tsx
"use client";

import { Beef } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export function AppLogo({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={cn("flex items-center gap-2 font-headline", className)}>
      <Beef className="h-8 w-8 text-primary" />
      <span className="text-lg font-bold tracking-tight">{t('appTitle')}</span>
    </div>
  );
}
```

---
---
---

# FILE: src/components/app-sidebar.tsx
# PATH: /src/components/app-sidebar.tsx
```tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { AppLogo } from '@/components/app-logo';
import { Home, Sparkles, GitFork, Users, BookHeart, Languages, ExternalLink, ShoppingCart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

const navItems = [
  { href: '/', icon: Home, labelKey: 'home' },
  { href: '/identify', icon: Sparkles, labelKey: 'identifyAndAnalyze' },
  { href: '/marketplace', icon: ShoppingCart, labelKey: 'marketplace' },
  { href: '/contribute', icon: GitFork, labelKey: 'contributeData' },
  { href: '/experts', icon: Users, labelKey: 'findExperts' },
];

const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
    { code: 'ml', name: 'മലയാളം (Malayalam)' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.labelKey}>
              <Link href={item.href} passHref>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <span>
                    <item.icon />
                    <span>{t(item.labelKey)}</span>
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="space-y-2">
        <SidebarSeparator />
         <SidebarMenu>
          <SidebarMenuItem>
             <a href="https://bharatpashudhan.ndlm.co.in/" target="_blank" rel="noopener noreferrer" className="w-full">
              <SidebarMenuButton>
                <BookHeart />
                <span>{t('bharatPashudhan')}</span>
                <ExternalLink className="ml-auto h-4 w-4 opacity-50"/>
              </SidebarMenuButton>
            </a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Languages />
                  <span>{t('language')}</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mb-2">
                {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onSelect={() => changeLanguage(lang.code)}>
                        {lang.name}
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
```

---
---
---

# FILE: src/components/page-header.tsx
# PATH: /src/components/page-header.tsx
```tsx
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-2 mb-8", className)}>
      <h1 className="text-3xl font-bold font-headline tracking-tight">{title}</h1>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
```

---
---
---

# FILE: src/components/ui/accordion.tsx
# PATH: /src/components/ui/accordion.tsx
```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

---
---
---

# FILE: src/components/ui/alert-dialog.tsx
# PATH: /src/components/ui/alert-dialog.tsx
```tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
```

---
---
---

# FILE: src/components/ui/alert.tsx
# PATH: /src/components/ui/alert.tsx
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
```

---
---
---

# FILE: src/components/ui/avatar.tsx
# PATH: /src/components/ui/avatar.tsx
```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```

---
---
---

# FILE: src/components/ui/badge.tsx
# PATH: /src/components/ui/badge.tsx
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

---
---
---

# FILE: src/components/ui/button.tsx
# PATH: /src/components/ui/button.tsx
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---
---
---

# FILE: src/components/ui/calendar.tsx
# PATH: /src/components/ui/calendar.tsx
```tsx
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
```

---
---
---

# FILE: src/components/ui/card.tsx
# PATH: /src/components/ui/card.tsx
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

---
---
---

# FILE: src/components/ui/carousel.tsx
# PATH: /src/components/ui/carousel.tsx
```tsx
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
```

---
---
---

# FILE: src/components/ui/chart.tsx
# PATH: /src/components/ui/chart.tsx
```tsx
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
```

---
---
---

# FILE: src/components/ui/checkbox.tsx
# PATH: /src/components/ui/checkbox.tsx
```tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
```

---
---
---

# FILE: src/components/ui/collapsible.tsx
# PATH: /src/components/ui/collapsible.tsx
```tsx
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

---
---
---

# FILE: src/components/ui/dialog.tsx
# PATH: /src/components/ui/dialog.tsx
```tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        "max-h-[90vh] overflow-y-auto",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
```

---
---
---

# FILE: src/components/ui/dropdown-menu.tsx
# PATH: /src/components/ui/dropdown-menu.tsx
```tsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
```

---
---
---

# FILE: src/components/ui/form.tsx
# PATH: /src/components/ui/form.tsx
```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
```

---
---
---

# FILE: src/components/ui/input.tsx
# PATH: /src/components/ui/input.tsx
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

---
---
---

# FILE: src/components/ui/label.tsx
# PATH: /src/components/ui/label.tsx
```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

---
---
---

# FILE: src/components/ui/menubar.tsx
# PATH: /src/components/ui/menubar.tsx
```tsx
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
```

---
---
---

# FILE: src/components/ui/popover.tsx
# PATH: /src/components/ui/popover.tsx
```tsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
```

---
---
---

# FILE: src/components/ui/progress.tsx
# PATH: /src/components/ui/progress.tsx
```tsx
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
```

---
---
---

# FILE: src/components/ui/radio-group.tsx
# PATH: /src/components/ui/radio-group.tsx
```tsx
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
```

---
---
---

# FILE: src/components/ui/scroll-area.tsx
# PATH: /src/components/ui/scroll-area.tsx
```tsx
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
```

---
---
---

# FILE: src/components/ui/select.tsx
# PATH: /src/components/ui/select.tsx
```tsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
```

---
---
---

# FILE: src/components/ui/separator.tsx
# PATH: /src/components/ui/separator.tsx
```tsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
```

---
---
---

# FILE: src/components/ui/sheet.tsx
# PATH: /src/components/ui/sheet.tsx
```tsx
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

---
---
---

# FILE: src/components/ui/sidebar.tsx
# PATH: /src/components/ui/sidebar.tsx
```tsx
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
```

---
---
---

# FILE: src/components/ui/skeleton.tsx
# PATH: /src/components/ui/skeleton.tsx
```tsx
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
```

---
---
---

# FILE: src/components/ui/slider.tsx
# PATH: /src/components/ui/slider.tsx
```tsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
```

---
---
---

# FILE: src/components/ui/switch.tsx
# PATH: /src/components/ui/switch.tsx
```tsx
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

---
---
---

# FILE: src/components/ui/table.tsx
# PATH: /src/components/ui/table.tsx
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

---
---
---

# FILE: src/components/ui/tabs.tsx
# PATH: /src/components/ui/tabs.tsx
```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

---
---
---

# FILE: src/components/ui/textarea.tsx
# PATH: /src/components/ui/textarea.tsx
```tsx
import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
```

---
---
---

# FILE: src/components/ui/toast.tsx
# PATH: /src/components/ui/toast.tsx
```tsx
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

---
---
---

# FILE: src/components/ui/toaster.tsx
# PATH: /src/components/ui/toaster.tsx
```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

---
---
---

# FILE: src/components/ui/tooltip.tsx
# PATH: /src/components/ui/tooltip.tsx
```tsx
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
```