
export const blog = {
	name: "blog",
	title: "Blog",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title"
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {source: "title"}
		},
		{
			name: "titleImage",
			type: "image",
			title: "Title image"
		},
		{
			name: "smallDescription",
			type: "text",
			title: "Small Description"
		},
		{
			name: "content",
			type: "array",
			title: "Content",
			of: [
				{
					type: "block"
				}
			]
		}
	],
}