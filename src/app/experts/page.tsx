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
