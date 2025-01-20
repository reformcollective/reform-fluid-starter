"use client"

import {
	css,
	fresponsive,
	styled,
} from "library/styled"
import { useRef } from "react"


export default function Header() {
	const wrapperRef = useRef<HTMLElement | null>(null)

	return (
		<Wrapper ref={wrapperRef}>
			HEADER
		</Wrapper>
	)
}

const Wrapper = styled("header", {
	...fresponsive(css`
	
	`),
})
