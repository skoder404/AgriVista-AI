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
