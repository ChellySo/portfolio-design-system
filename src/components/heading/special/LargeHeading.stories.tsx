import { Meta, StoryObj } from "@storybook/react";
import LargeHeading, { LargeHeadingProps } from "./LargeHeading";

const meta = {
    title: 'Design system/Heading/Special',
    component: LargeHeading,
    tags: ['autodocs'],
} satisfies Meta<typeof LargeHeading>

export default meta
type Story = StoryObj<typeof LargeHeading>

interface StoryProps {
    variants: LargeHeadingProps['variant'][]
}

export const LargeHeadings: Story = {
    //@ts-ignore
    render: ({ variants }: StoryProps) => (
        <div className="space-y-md">
            {variants.map((variant) => (
                <LargeHeading key={variant} variant={variant}>
                    {variant}
                </LargeHeading>
            ))}
        </div>
    ),
    args: {
        //@ts-ignore
        variants: ['large', 'xlarge', 'xxlarge'],
    },
}
