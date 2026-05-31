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

  const [apiBreedResult, setApiBreedResult] =
    useState<{ breed: string; confidence: number } | null>(null);
  const [breedResult, setBreedResult] =
    useState<IdentifyCattleBreedOutput | null>(null);
  const [healthReport, setHealthReport] =
    useState<GenerateCattleHealthReportOutput | null>(null);
  const [marketValue, setMarketValue] =
    useState<EstimateCattleMarketValueOutput | null>(null);
  
  const [age, setAge] = useState<string>("");

  const [loadingStates, setLoadingStates] = useState({
    apiBreed: false,
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
        setApiBreedResult(null);
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
      setApiBreedResult(null);
      setBreedResult(null);
      setHealthReport(null);
      setMarketValue(null);
      setLoadingStates({
        apiBreed: true,
        breed: true,
        health: true,
        value: false,
      });

      try {
        const apiBreedPromise = fetch("/api/predict", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ photoDataUri: imagePreview }),
        })
          .then(async (res) => {
            if (!res.ok) throw new Error("API Predict failed");
            const data = await res.json();
            return { breed: data.predicted_breed, confidence: data.confidence };
          })
          .catch((err) => {
            console.error("Local API predict error:", err);
            return null; // Don't throw, just return null so Gemini still works
          });

        const breedPromise = identifyCattleBreed({
          photoDataUri: imagePreview,
        });

        const healthPromise = generateCattleHealthReport({
          photoDataUri: imagePreview,
        });

        const [apiBreedRes, breedRes, healthRes] = await Promise.all([
          apiBreedPromise,
          breedPromise,
          healthPromise,
        ]);
        
        if (apiBreedRes) setApiBreedResult(apiBreedRes);
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
            apiBreed: false,
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
  const analysisStarted = Boolean(apiBreedResult || breedResult || healthReport || anyLoading);

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
                {loadingStates.apiBreed || loadingStates.breed || loadingStates.health ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {loadingStates.apiBreed || loadingStates.breed || loadingStates.health
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

          {(loadingStates.apiBreed || loadingStates.breed || loadingStates.health) &&
            !apiBreedResult &&
            !breedResult &&
            !healthReport && (
              <Card>
                <CardContent className="p-6 flex items-center justify-center text-muted-foreground">
                  <Loader2 className="animate-spin mr-2" />{" "}
                  {t("identify.analyzingButton")}
                </CardContent>
              </Card>
            )}

          {(apiBreedResult || breedResult) && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit className="text-primary" />
                  {t("identify.step2Title")} (Comparison)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Trained Model Result */}
                <div className="space-y-4 border rounded-lg p-4 bg-muted/50">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Trained Model (Local API)
                  </h4>
                  {apiBreedResult ? (
                    <>
                      <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">Identified Breed</p>
                        <p className="text-lg font-bold">{apiBreedResult.breed}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">Confidence Score</p>
                        <Badge variant={apiBreedResult.confidence > 0.8 ? "default" : "secondary"}>
                          {(apiBreedResult.confidence * 100).toFixed(0)}%
                        </Badge>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-destructive">Failed to fetch local API result.</p>
                  )}
                </div>

                {/* Gemini AI Result */}
                <div className="space-y-4 border rounded-lg p-4 bg-muted/50">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Gemini AI Analysis
                  </h4>
                  {breedResult ? (
                    <>
                      <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">{t("identify.identifiedBreed")}</p>
                        <p className="text-lg font-bold">{breedResult.breed}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-muted-foreground">{t("identify.confidenceScore")}</p>
                        <Badge variant={breedResult.confidence > 0.8 ? "default" : "secondary"}>
                          {(breedResult.confidence * 100).toFixed(0)}%
                        </Badge>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-destructive">Failed to fetch Gemini AI result.</p>
                  )}
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
