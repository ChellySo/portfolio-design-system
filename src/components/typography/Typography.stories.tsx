import { Meta, StoryObj } from "@storybook/react";
import Typography, { type TypographyProps } from "./Typography";

const meta = {
    title: 'Design system/Typography',
    component: Typography,
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>

interface StoryProps {
    variants: TypographyProps['variant'][]
}

export const Fushia: Story = {
    //@ts-ignore
    render: ({ variants }: StoryProps) => (
        <div className="space-y-md">
            {variants.map((variant) => (
                <Typography key={variant} variant={variant}>
                    {variant}
                </Typography>
            ))}
        </div>
    ),
    args: {
        //@ts-ignore
        variants: ['sm/fushia', 'md/fushia', 'lg/fushia', 'xl/fushia'],
    },
}

export const Lilac: Story = {
    //@ts-ignore
    render: ({ variants }: StoryProps) => (
        <div className="space-y-md">
            {variants.map((variant) => (
                <Typography key={variant} variant={variant}>
                    {variant}
                </Typography>
            ))}
        </div>
    ),
    args: {
        //@ts-ignore
        variants: ['sm/lilac', 'md/lilac', 'lg/lilac', 'xl/lilac'],
    },
}

