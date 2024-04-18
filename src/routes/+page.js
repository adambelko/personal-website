// Sanity import
import { client } from "$lib/sanity/client.js"

// Sanity queries import
import { getRecentPostsQuery } from "$lib/sanity/queries.js"

export async function load() {
	const postList = await client.fetch(getRecentPostsQuery)

	return { postList }
}