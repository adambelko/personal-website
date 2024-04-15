import {client} from "$lib/sanity.js"

export async function load() {
	const postList = await client.fetch(`*[_type == "blog"]`)
	console.log(postList)
	return {postList}
}
