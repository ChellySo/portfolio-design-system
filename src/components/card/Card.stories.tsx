import { Meta, StoryObj } from "@storybook/react";
import Badge from "../badge/Badge";
import Typography from "../typography/Typography";
import Card from "./Card";

const meta = {
    title: 'Design system/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const cardWithChildrenAndDate: Story = {
    render: () => (
        <Card title="Frontend Developer - Sogeti" href="./" date="01/2020 - 02-2021" className="w-1/2">
            <Typography variant="lg/lilac">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>

            <div className="mt-4">
                <Badge className="mr-2">ReactJS</Badge>
                <Badge className="mr-2">TypeScript</Badge>
                <Badge className="mr-2">Storybook</Badge>
            </div>
        </Card>
    )
}

export const cardWithChildrenWithoutDate: Story = {
    render: () => (
        <Card title="Frontend Developer - Sogeti" href="./">
            <Typography variant="lg/lilac">Worked on a team of 5 to develop a web application.</Typography>
            <Typography variant="lg/lilac">Used React, TypeScript, and Tailwind CSS to build the application.</Typography>
            <Typography variant="lg/lilac">Collaborated with the client to gather requirements and deliver a product that met their needs.</Typography>
            <div className="mt-4">
                <Badge className="mr-2">ReactJS</Badge>
                <Badge className="mr-2">TypeScript</Badge>
                <Badge className="mr-2">Storybook</Badge>
            </div>
        </Card>
    )
}