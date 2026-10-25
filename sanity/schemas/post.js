export const postSchema = {
  name: 'blog',
  title: 'Blog',
  type: 'document',

  fields: [
    // Basic article information
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The main title of your blog post.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
    },
    {
      name: 'updatedAt',
      type: 'datetime',
      title: 'Last Updated',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },

    // Featured image
    {
      name: 'titleImage',
      type: 'image',
      title: 'Featured Image',
      description: 'The main image displayed for this article.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the image for accessibility and search engines.',
        },
      ],
    },

    // Article summary
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      description: 'A short summary used for previews and article listings.',
    },

    // SEO settings
    {
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
      description: 'Optional title for search engines. If empty, use the article title.',
      validation: (Rule) => Rule.max(60),
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      rows: 3,
      description:
        'Write a concise search snippet. Around 150–160 characters is a useful guideline.',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'focusKeyword',
      type: 'string',
      title: 'Primary Keyword',
      description: 'The main search query this article targets.',
    },
    {
      name: 'secondaryKeywords',
      type: 'array',
      title: 'Secondary Keywords',
      description: 'Related queries to consider when writing the article.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },

    // Rich text article content
    {
      name: 'content',
      type: 'array',
      title: 'Article Content',
      description:
        'Write your article using headings, formatting, images, links and other content blocks.',
      of: [
        {
          type: 'block',

          // Headings and paragraph styles
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1 (H1)', value: 'h1'},
            {
              title: 'Heading 2 (H2)',
              value: 'h2',
            },
            {title: 'Heading 3 (H3)', value: 'h3'},
            {title: 'Heading 4 (H4)', value: 'h4'},
            {
              title: 'Quote',
              value: 'blockquote',
            },
          ],

          // Bulleted and numbered lists
          lists: [
            {title: 'Bullet List', value: 'bullet'},
            {title: 'Numbered List', value: 'number'},
          ],

          // Inline formatting
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {
                title: 'Underline',
                value: 'underline',
              },
              {title: 'Strikethrough', value: 'strike-through'},
              {title: 'Code', value: 'code'},
            ],

            // Inline annotations
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
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
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },

        // Images inside the article
        {
          type: 'image',
          title: 'Article Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Describe the image for accessibility.',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },

        // Embedded documents or other custom blocks can be added here later.
      ],
    },

    // Tags
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'reference', to: {type: 'tags'}}],
    },
  ],
}
