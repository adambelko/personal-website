import { createImageUrlBuilder } from "@sanity/image-url"
import { client } from "$lib/sanity/client"

const builder = createImageUrlBuilder(client)

export const urlFor = (source: string) => {
	return builder.image(source)
}
