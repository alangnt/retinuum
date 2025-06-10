import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@gradio/client';

export async function POST(req: NextRequest) {
	const { prompt } = await req.json();
	
	try {
		const client = await Client.connect("NihalGazi/FLUX-Pro-Unlimited");
		
		const result = await client.predict("/generate_image", {
			prompt,
			width: 512,
			height: 512,
			seed: 42,
			randomize: true,
			server_choice: "Google US Server",
		});
		
		if (
			Array.isArray(result.data) &&
			result.data[0]?.path?.includes("failed")
		) {
			return NextResponse.json({ error: "Generation failed." }, { status: 500 });
		}
		
		return NextResponse.json({ image: result.data });
	} catch (e) {
		console.error("FLUX Error:", e);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
