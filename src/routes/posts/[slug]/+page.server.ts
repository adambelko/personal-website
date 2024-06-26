// Sanity import
import { client } from "$lib/sanity/client"

// Sanity queries import
import { singlePostQuery } from "$lib/sanity/queries"

export async function load({ params }) {
	const query = await client.fetch(singlePostQuery(params.slug))
	const post = query[0]

	return { post }
}