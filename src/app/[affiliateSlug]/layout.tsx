import getCompany from "@/api/getCompany"
import config from "@/config/env_config"
import {
	css,
	fresponsive,
	GlobalStyles,
	styled,
	unresponsive,
} from "library/styled"
import type { Metadata } from "next"
import { headers } from "next/headers"
import Script from "next/script"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import GlobalProviders from "@/app/components/Providers"

import colors, { ColorStyle } from "styles/colors"
import "../globals.css"

declare global {
	interface Window {
		fcs: any
		fluidChatSettings: any
		fluidSettings: any
		Spreedly: any
		showCartCount: () => any
	}
}

type PageProps = Readonly<{
	children: React.ReactNode
	params: Promise<Record<string, string>>
}>

export default async function RootLayout({ children, params }: PageProps) {
	const resolvedParams = await params
	const { affiliateSlug } = resolvedParams

	return (
		<html lang="en">
			<head>
				<Script id="fluid-widget-boot" strategy="beforeInteractive">
					{`
          window.fcs = {api_url_host: '${config.apiHost}', affiliate: { credit: '${affiliateSlug}' }};
          (function(){ var f_ws = document.createElement('script'); f_ws.async = true; f_ws.src = '${config.widgetHost}'; x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(f_ws,x); })();
        `}
				</Script>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<PageRoot suppressHydrationWarning>
				<GlobalProviders>
					<GlobalStyles>{globalCss}</GlobalStyles>
					<ColorStyle/>
					<Header />
					{children}
					<Footer />
				</GlobalProviders>
			</PageRoot>
		</html>
	)
}

const PageRoot = styled(
	"body",
	unresponsive(css`
		/*  ensure modals, portals, etc. don't appear behind the page */
		isolation: isolate;

		/* ensure page content fills the view */
		min-height: 100lvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		overflow-x: clip;
	`),
)

const globalCss = fresponsive(css`
	html {
		background: ${colors.white};
		color: ${colors.black};
	}

	/**
	 * this is a workaround for lvh being calculated incorrectly
	 * - on iOS safari
	 * - AND only in the webview
	 * - AND only before the page has resized (sometimes)
	 *
	 * this will only be visible if lvh is calculated incorrectly
	 * safari is such a good browser with no problems
	 */
	body::before {
		content: "";
		pointer-events: none;
		position: fixed;
		top: 100lvh;
		left: 0;
		width: 100vw;
		height: 100lvh;
		background: currentcolor;
		z-index: 999;
	}

	* {
		/* need this so that fonts match figma */
		text-rendering: geometricprecision;
		-webkit-font-smoothing: antialiased;
	}

	/** restore default focus states for elements that need them */
	*:focus-visible {
		outline: 2px solid #00f8;
	}

	.fluid-chat-app > div > div {
		opacity: 0;
	}
`)

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const company = await getCompany()
	const headersList = await headers()

	return {
		title: company.name,
		openGraph: {
			title: company.name,
			url: `${headersList.get("x-url")}`,
			images: [
				{
					url: company.logo_url,
					width: 800,
					height: 600,
					alt: `${company.name} logo`,
				},
			],
			locale: "en_US",
			type: "website",
		},
		twitter: {
			images: [
				{
					url: company.logo_url,
					width: 800,
					height: 600,
					alt: `${company.name} logo`,
				},
			],
		},
	}
}
