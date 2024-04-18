// Sanity import
import { client } from "$lib/sanity/client.js"

// Sanity queries import
import { getPostsFilteredByTagQuery, getTagsQuery } from "$lib/sanity/queries.js"

export async function load({ params }) {
	const postList = await client.fetch(getPostsFilteredByTagQuery(params.slug))
	const tagList = await client.fetch(getTagsQuery)
	const slug = params.slug

	return { postList, tagList, slug }
}