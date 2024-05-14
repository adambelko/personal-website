// Sanity import
import { client } from "$lib/sanity/client"

// Sanity queries import
import { recentPostsQuery } from "$lib/sanity/queries"

export async function load() {
	const postList = await client.fetch(recentPostsQuery)

	return { postList }
}