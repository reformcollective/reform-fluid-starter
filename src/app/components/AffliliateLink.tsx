"use client"

import { linkIsInternal } from "library/functions"
import UniversalLink from "library/Loader/UniversalLink"
import { css, fresponsive, styled } from "library/styled"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function AffiliateLink({
	href,
	children,
	className,
}: {
	href?: string
	children: React.ReactNode
	className?: string
}) {
	const [slug, setSlug] = useState<string | undefined>(undefined)

	const { affiliateSlug } = useParams()

	useEffect(() => {
		if (!href) return
		const internal = href ? linkIsInternal(href) : false

		const slug = internal ? `/${affiliateSlug}${href}` : href

		setSlug(slug)
	}, [href, affiliateSlug])

	return (
		<StyledUniversalLink className={className} href={slug}>
			{children}
		</StyledUniversalLink>
	)
}

const StyledUniversalLink = styled(UniversalLink, {
	...fresponsive(css`
		cursor: pointer;
	`),
})
