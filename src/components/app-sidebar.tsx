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
