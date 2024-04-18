export const getRecentPostsQuery = `*[_type == "blog"] | order(_createdAt desc) [0..3]
  {
    title,
    slug,
    smallDescription,
    _createdAt,
    titleImage,
    tags[]-> { slug, title }
  }`

export const getPostsQuery = `*[_type == "blog"] | order(_createdAt desc)
  {
    title,
    slug,
    smallDescription,
    _createdAt,
    titleImage,
    tags[]-> { slug, title }
  }`

export const getPostsFilteredByTagQuery = (slug) => `*[_type == "blog" && references(tags[].slug.current, 
  *[_type == "tags" && slug.current == "${slug}"]._id)] | order(_createdAt desc) {
    title,
    slug,
    smallDescription,
    _createdAt,
    titleImage,
    tags[]-> { slug, title }
  }`

export const getPostQuery = (slug) =>  `*[_type == "blog" && slug.current == "${slug}"]
  {
    title,
    slug,
    content,
    smallDescription,
    _createdAt,
    titleImage,
  }`


export const getTagsQuery = `*[_type == "tags"]`
