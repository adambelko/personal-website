import { client } from "$lib/sanity/client"
import { allPostsQuery, allTagsQuery } from "$lib/sanity/queries"

export async function load() {
	const postList = await client.fetch(allPostsQuery)
	const tagList = await client.fetch(allTagsQuery)

	return { postList, tagList }
}
