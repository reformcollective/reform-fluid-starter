import type { NextConfig } from "next"

const siteURL =
	// netlify branch URL
	process.env.DEPLOY_PRIME_URL ??
	// netlify production URL
	process.env.URL ??
	// vercel URL
	process.env.VERCEL_URL ??
	// localhost fallback
	"http://localhost:3000"

if (process.env.NODE_ENV === "production" && siteURL.includes("localhost")) {
	console.warn(
		"sitemap depends on NETLIFY or VERCEL environment variables, which are not present.",
	)
}

const nextConfig: NextConfig = {
	experimental: {
		reactCompiler: true,
	},
	env: {
		NEXT_PUBLIC_DEPLOY_URL: siteURL,
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
				port: "",
				pathname: "/fluid/s3/**",
			},
			{
				protocol: "https",
				hostname: "d1r16g5m5p3ba7.cloudfront.net",
				port: "",
				pathname: "/**",
			},
		],
	},
	webpack(config) {
		// biome-ignore lint/suspicious/noExplicitAny: webpack moment
		const { options: loaderOptions } = config.module.rules.find((rule: any) =>
			rule?.test?.test?.(".svg"),
		)
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
			resourceQuery: /inline/,
		})
		config.module.rules.push({
			test: /\.(webm)$/i,
			type: "asset/resource",
		})
		config.module.rules.push({
			test: /\.(mp4)$/i,
			type: "asset/resource",
		})
		config.module.rules.push({
			test: /\.svg$/,
			resourceQuery: { not: [/inline/] },
			loader: "next-image-loader",
			options: loaderOptions,
		})

		return config
	},
}

export default nextConfig
