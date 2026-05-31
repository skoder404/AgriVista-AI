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
