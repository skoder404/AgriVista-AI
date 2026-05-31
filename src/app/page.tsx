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
