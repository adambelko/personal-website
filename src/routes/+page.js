// Sanity import
import { client } from "$lib/sanity/client.js"

// Sanity queries import
import { recentPostsQuery } from "$lib/sanity/queries.js"

export async function load() {
	const postList = await client.fetch(recentPostsQuery)

	return { postList }
}