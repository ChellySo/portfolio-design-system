import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
    title: 'Design system/Badge',
    component: Badge,
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof Badge>

export const badgeWithChildren: Story = {
    render: () => (
        <Badge>Badge</Badge>
    )
}