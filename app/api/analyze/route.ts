import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Check required environment variables
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    if (!accountId || !apiToken) {
      return NextResponse.json(
        { error: "Missing Cloudflare credentials" },
        { status: 500 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const imageFile = formData.get("image");

    if (!imageFile || !(imageFile instanceof File)) {
      return NextResponse.json(
        { error: "Missing or invalid image file" },
        { status: 400 }
      );
    }

    // Read image to ArrayBuffer and convert to uint8 array
    const arrayBuffer = await imageFile.arrayBuffer();
    const uint8Array = [...new Uint8Array(arrayBuffer)];

    // Prepare request to Cloudflare AI API
    const cloudflareUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/llava-hf/llava-1.5-7b-hf`;

    const payload = {
      image: uint8Array,
      prompt:
        "You are an expert AI art prompt engineer. Analyze this image and write a detailed generation prompt that could recreate it in Midjourney, Stable Diffusion, or DALL-E. Include: subject description, art style, color palette, mood, lighting, composition, level of detail, and relevant quality tags. Return ONLY the prompt, no intro, no explanation.",
      max_tokens: 512,
    };

    const response = await fetch(cloudflareUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const cloudflareResponse = await response.json();

    // Check if Cloudflare request was successful
    if (!cloudflareResponse.success) {
      return NextResponse.json(
        { error: cloudflareResponse.errors || "Cloudflare API error" },
        { status: 502 }
      );
    }

    // Extract description from response
    const description = cloudflareResponse.result?.description;

    return NextResponse.json({ prompt: description });
  } catch (error) {
    console.error("Error in /api/analyze:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
