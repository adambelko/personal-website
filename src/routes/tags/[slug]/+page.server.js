// Sanity import
import { client } from "$lib/sanity/client.js"

// Sanity queries import
import {getPostsFilteredByTagQuery} from "$lib/sanity/queries.js"

export async function load({ params }) {
	const postList = await client.fetch(getPostsFilteredByTagQuery(params.slug))

	return { postList }
}