import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { photoDataUri } = await req.json();

    if (!photoDataUri) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Convert data URI to Blob
    const base64Data = photoDataUri.split(',')[1];
    const mimeType = photoDataUri.split(',')[0].split(':')[1].split(';')[0];
    
    // Create a buffer from base64
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Create form data to send to Flask
    const formData = new FormData();
    const blob = new Blob([buffer], { type: mimeType });
    formData.append("image", blob, "image.jpg");

    // Send to local Flask API
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Flask API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling Flask API:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to call prediction API" },
      { status: 500 }
    );
  }
}
