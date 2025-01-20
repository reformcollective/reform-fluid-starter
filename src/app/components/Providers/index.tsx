"use client"

import gsap, { ScrollTrigger } from "gsap/all"
import { useTriggerPreloader } from "library/Loader/PreloaderUtils"
import { useBackButton } from "library/Loader/TransitionUtils"
import { ScreenProvider } from "library/ScreenContext"
import { useSmoothScroll } from "library/Scroll"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { isBrowser } from "library/deviceDetection"
import Userback from "@userback/widget"

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
	// pinSpacing is bad for page loading, false is a better default
	pinSpacing: false,
})

/**
 * userback, only if the URL includes 'netlify'
 */
if (isBrowser && window.location.href.includes("netlify"))
	Userback("A-v0IzZWe1Wp6WdUZsgSwl1T41O")

/**
 * its possible hooks will need values from our providers
 * so we nest them
 */
const NestedHooks = () => {
	useBackButton()
	useTriggerPreloader()
	useSmoothScroll()
	return null
}

export default function GlobalProviders({
	children,
}: {
	children: React.ReactNode
}) {
	children = (
		<>
			<NestedHooks />
			{children}
		</>
	)

	children = <ScreenProvider>{children}</ScreenProvider>
	children = <NuqsAdapter>{children}</NuqsAdapter>

	return children
}
