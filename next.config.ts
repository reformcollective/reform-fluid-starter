import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		reactCompiler: true,
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
