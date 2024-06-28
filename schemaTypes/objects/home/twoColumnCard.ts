import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'twoColumnCard',
    title: 'Two column card',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'theme',
            type: 'theme'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' }
            ]
        }),
        defineField({
            name: 'primary',
            title: 'Primary Graphic',
            type: 'image',
        }),
        defineField({
            name: 'seoncdary',
            title: 'seoncdary',
            type: 'array',
            of: [{ type: 'image' }]

        }),
        defineField({
            name: 'visibility',
            title: 'Visibility',
            type: 'visibility',
        }),
    ],
})