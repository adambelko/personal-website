import js from "@eslint/js"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import svelte from "eslint-plugin-svelte"
import svelteParser from "svelte-eslint-parser"
import globals from "globals"
import prettier from "eslint-config-prettier"

export default [
	{
		ignores: ["sanity/**", "node_modules/**", ".svelte-kit/**", "build/**"]
	},
	js.configs.recommended,
	...tsPlugin.configs["flat/recommended"],
	...svelte.configs["flat/recommended"],
	{
		files: ["**/*.{js,cjs,mjs,ts,svelte}"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: [".svelte"]
			}
		}
	},
	{
		rules: {
			"svelte/no-navigation-without-resolve": "off",
			"svelte/require-each-key": "off",
			"svelte/no-reactive-functions": "off"
		}
	},
	prettier
]
