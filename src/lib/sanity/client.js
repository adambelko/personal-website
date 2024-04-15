import { createClient } from "@sanity/client"

export const client = createClient({
	projectId: "bo7omjz3",
	dataset: "production",
	useCdn: true,
	apiVersion: "2024-04-15"
})