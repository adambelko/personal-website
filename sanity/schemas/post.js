export const postSchema = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'url',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'newWindow',
                    type: 'boolean',
                    title: 'Open in new window?',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'reference', to: {type: 'tags'}}],
    },
  ],
}
