import {createClient} from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
	projectId: "bo7omjz3",
	dataset: "production",
	useCdn: true,
	apiVersion: "2024-04-15",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
	return builder.image((source))
}