import localFont from "next/font/local"

export const gtPlanar = localFont({
	adjustFontFallback: "Arial",
	variable: "--font-gt-planar",
	display: "swap",
	src: [
		{
			path: "./gtPlanar-Regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
})
