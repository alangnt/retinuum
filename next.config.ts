import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nihalgazi-flux-pro-unlimited.hf.space',
				pathname: '/gradio_api/file=/**',
			},
		],
	}
};

export default nextConfig;
