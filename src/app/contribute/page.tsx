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
