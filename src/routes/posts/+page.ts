// Sanity import
import { client } from "$lib/sanity/client"

// Sanity queries import
import { allPostsQuery, allTagsQuery } from "$lib/sanity/queries"

export async function load() {
	const postList = await client.fetch(allPostsQuery)
	const tagList = await client.fetch(allTagsQuery)

	return { postList, tagList }
}