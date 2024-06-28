import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fieldsets: [
    {
      name: 'options',
      title: 'Options',
      options: { collapsible: true, collapsed: true, columns: 2 },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of the website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'header',
    }),

    defineField({
      name: 'showApply',
      title: 'Show apply card',
      type: 'boolean',
      fieldset: 'options'
    }),
    defineField({
      name: 'showdonate',
      title: 'Show donate card',
      type: 'boolean',
      fieldset: 'options'
    }),
    defineField({
      name: 'showVolunteer',
      title: 'Show volunteer card',
      type: 'boolean',
      fieldset: 'options'
    }),
    defineField({
      name: 'showSponsors',
      title: 'Show sponsors card',
      type: 'boolean',
      fieldset: 'options'
    }),
    defineField({
      name: 'showSponsorships',
      title: 'Show sponsorships card',
      type: 'boolean',
      fieldset: 'options'
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // defineField({
    //   name: 'overview',
    //   description:
    //     'Used both for the <meta> description tag for SEO, and the website subheader.',
    //   title: 'Description',
    //   type: 'array',
    //   of: [
    //     // Paragraphs
    //     defineArrayMember({
    //       lists: [],
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //         decorators: [
    //           {
    //             title: 'Italic',
    //             value: 'em',
    //           },
    //           {
    //             title: 'Strong',
    //             value: 'strong',
    //           },
    //         ],
    //       },
    //       styles: [],
    //       type: 'block',
    //     }),
    //   ],
    //   validation: (rule) => rule.max(155),
    // }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})