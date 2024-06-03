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
        <Card title="Frontend Developer - Sogeti" href="./" date="01/2020 - 02-2021">
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