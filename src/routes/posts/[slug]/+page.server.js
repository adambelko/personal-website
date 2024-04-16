// Sanity import
import { client } from "$lib/sanity/client.js"

// Sanity queries import
import { getPostsQuery } from "$lib/sanity/queries.js"

export async function load({params}) {
	const postList = await client.fetch(getPostsQuery)
	const post = postList.find((post) => post.slug.current === params.slug)

	return { post }
}