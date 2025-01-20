import { css } from "library/styled"
import { gtPlanar } from "./fonts/typography"
import { createStyleString } from "@capsizecss/core"

export const transparentText = css`
	/* stylelint-disable-next-line property-no-vendor-prefix  */
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	background-size: 100%;
	background-clip: text;
`

export const clampText = (lines: number) => css`
	overflow: hidden;
	text-overflow: ellipsis;
	/* stylelint-disable-next-line property-no-vendor-prefix  */
	-webkit-text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: ${lines};
`

const gtPlanarMetrics = {
	capHeight: 700,
	ascent: 956,
	descent: -194,
	lineGap: 0,
	unitsPerEm: 1000,
}

const makeStyleString = (options: Parameters<typeof createStyleString>[1]) =>
	createStyleString("&", options).replaceAll(".&", "&")

const textStyles = {
	// don't wrap these in a fresponsive or unresponsive call!
	// that should happen at the component level
	h1: css`
		font-family: ${gtPlanar.style.fontFamily};
		${makeStyleString({
			fontSize: 16,
			leading: 16,
			fontMetrics: gtPlanarMetrics,
		})};
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.16px;
	`,

	h2: css``,
	h3: css``,

	custom: {
	
	},
}

export default textStyles
