// Sanity import
import { client } from "$lib/sanity/client.js"

// Sanity queries import
import { getPostQuery } from "$lib/sanity/queries.js"

export async function load({ params }) {
	const query = await client.fetch(getPostQuery(params.slug))
	const post = query[0]

	return { post }
}