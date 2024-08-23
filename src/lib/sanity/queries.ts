const base = `
	title,
    slug,
    smallDescription,
    _createdAt,
    titleImage
`

export const recentPostsQuery = `*[_type == "blog"] | order(_createdAt desc) [0..3] {${base}, tags[]-> { slug, title }}`

export const allPostsQuery = `*[_type == "blog"] | order(_createdAt desc) {${base}, tags[]-> { slug, title }}`

export const postsFilteredByTagQuery = (slug: string) => {
	return `*[_type == "blog" && references(tags[].slug.current, 
  *[_type == "tags" && slug.current == "${slug}"]._id)] | order(_createdAt desc) {${base}, tags[]-> { slug, title }}`
}

export const singlePostQuery = (slug: string) => {
	return `*[_type == "blog" && slug.current == "${slug}"]{${base}, content}`
}

export const allTagsQuery = `*[_type == "tags"]`
