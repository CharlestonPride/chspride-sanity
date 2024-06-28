import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'string'
            // of: [{ type: 'url' }, { type: 'reference', name: 'Page', to: [{ type: 'page' }] }]
        }),
    ],
})