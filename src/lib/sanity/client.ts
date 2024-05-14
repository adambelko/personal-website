import { createClient, SanityClient } from "@sanity/client"

export const client: SanityClient = createClient({
	projectId: "bo7omjz3",
	dataset: "production",
	useCdn: true,
	apiVersion: "2024-04-15"
})
