import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'header',
    title: 'Header',
    type: 'object',
    options: { collapsible: true },
    fields: [
        {
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
                layout: 'select',
                list: [
                    { value: 'block', title: 'Block' },
                    { value: 'oblique', title: 'Oblique' },
                    { value: 'wave', title: 'Wave (no image)' },
                ],
            },
            initialValue: 'block'
        },
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            of: [
                { type: 'button' }
            ]
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description: '⚡ The image will be ignored if the style is Wave.',
        }),
    ],
})