import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'


export default defineType({
    title: 'icon',
    name: 'icon',
    type: 'object',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'icon',
            type: 'string',
            options: {
                list: [
                    'Crown',
                    'Flag',
                    'GrinHearts',
                    'HandHoldingUsd',
                    'HandsHelping',
                    'Heart',
                    'ShoppingCart',
                    'Smile',
                    'Ticket',
                    'UserFriends',
                    'Envelope',
                    'Map',
                    'MartiniGlass',
                    'ChampagneGlasses',
                    'Star',
                    'Handshake',]
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
})