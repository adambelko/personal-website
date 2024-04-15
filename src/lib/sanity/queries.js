// ----------- blog ------------
export const getBlogQuery = `*[_type == "blog"]`

// ----------- tags ------------
export const getTagsQuery = `*[_type == "tags"]`

export const getTagRelatedPostQuery = `*[_type == "blog" && $slug in tags[]->slug.current]{
      _createdAt,
      publishedAt,
    title,
    body,
    slug,
    "tags": tags[]-> {title,slug},
}`

export const tagsPathsQuery = `*[_type == "tags" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`