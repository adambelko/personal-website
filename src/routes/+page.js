// Sanity import
import { client } from "$lib/sanity/client.js"

// Sanity queries import
import {getBlogQuery} from "$lib/sanity/queries.js"
import {getTagsQuery} from "$lib/sanity/queries.js"

export async function load() {
	const postList = await client.fetch(getBlogQuery)
	const tagList = await client.fetch(getTagsQuery)
	console.log(postList)
	console.log(tagList)
	return {postList, tagList}
}
