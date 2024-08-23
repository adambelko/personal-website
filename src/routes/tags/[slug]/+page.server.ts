import { client } from "$lib/sanity/client"
import { postsFilteredByTagQuery, allTagsQuery } from "$lib/sanity/queries"

export async function load({ params }) {
	const postList = await client.fetch(postsFilteredByTagQuery(params.slug))
	const tagList = await client.fetch(allTagsQuery)
	const slug = params.slug

	return { postList, tagList, slug }
}
