import { Meta, StoryObj } from "@storybook/react";
import LogoCS from "./LogoCS";

const meta = {
    title: 'Design system/Logo',
    component: LogoCS,
    tags: ['autodocs'],
} satisfies Meta<typeof LogoCS>

export default meta
type Story = StoryObj<typeof LogoCS>

export const Logo: Story = {
    render: () => (
        <LogoCS />
    )
}
