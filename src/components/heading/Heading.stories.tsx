import type { Meta, StoryObj } from '@storybook/react'
import Heading, { type HeadingVariant } from './Heading'

const meta: Meta<typeof Heading> = {
    title: 'Design system/Heading',
    component: Heading,
    tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof Heading>

interface StoryProps {
    variants: HeadingVariant[]
}

export const Headings: Story = {
    //@ts-ignore
    render: ({ variants }: StoryProps) => (
        <div className="space-y-sm">
            {variants.map((variant) => (
                <Heading key={variant} variant={variant}>
                    {variant}
                </Heading>
            ))}
        </div>
    ),
    args: {
        variants: ['h1', 'h2', 'h3', 'h4', 'h5'],
    },
}
