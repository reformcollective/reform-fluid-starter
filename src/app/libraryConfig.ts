import { type Config, defaultConfig } from "./library/defaultConfig"

/**
 * The transition names that can be used in the page transition
 * set this to never if there is no transition
 */
export type TransitionNames = never

const config: Config = {
	...defaultConfig,
}

export default config
