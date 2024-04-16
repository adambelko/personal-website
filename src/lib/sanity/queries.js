export const getPostsQuery = `*[_type == "blog"]
  {
    title,
    slug,
    smallDescription,
    _createdAt,
    titleImage,
    tags[]->{slug, title}
  }`

export const getTagsQuery = `*[_type == "tags"]`
