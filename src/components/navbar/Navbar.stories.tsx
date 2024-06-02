import { Meta, StoryObj } from "@storybook/react";
import Button from "../button/Button";
import Navbar from "./Navbar";

const meta = {
    title: 'Design system/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof Navbar>

export const navbarWithChildren: Story = {
    render: () => (
        <Navbar>
            <div className="grid grid-cols-4 gap-1">
                <a href="/" className="place-content-center text-center">About</a>
                <a href="/" className="place-content-center text-center">Experience</a>
                <a href="/" className="place-content-center text-center">Contact</a>
                <Button variant="md/secondary">Resume</Button>
            </div>
        </Navbar>
    )
}