import localFont from "next/font/local"

export const ppFraktionMono = localFont({
	adjustFontFallback: "Arial",
	variable: "--font-pp-fraktion-mono",
	display: "swap",
	src: [
		{
			path: "./PPFraktionMono-Regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
})
