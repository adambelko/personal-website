export const getPostsQuery = `*[_type == "blog"]
  {
    title,
    slug,
    content,
    smallDescription,
    _createdAt,
    titleImage,
    tags[]->{slug, title}
  }`

export const getTagsQuery = `*[_type == "tags"]`
