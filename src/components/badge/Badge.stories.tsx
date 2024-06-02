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
        <div>
            <Badge className="mx-2">ReactJS</Badge>
            <Badge className="mx-2">TypeScript</Badge>
            <Badge className="mx-2">Storybook</Badge>
        </div>
    )
}