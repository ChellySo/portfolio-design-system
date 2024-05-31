import type { Meta, StoryObj } from '@storybook/react'
import Button, { type ButtonProps } from './Button'

const meta = {
  title: 'Design system/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

interface StoryProps {
  variants: ButtonProps['variant'][]
}

export const Primary: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="space-y-md">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
      <Button variant="md/primary" disabled>
        disabled
      </Button>
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['sm/primary', 'md/primary', 'xl/primary'],
  },
}

export const Secondary: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="space-y-md">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
      <Button variant="md/secondary" disabled>
        disabled
      </Button>
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['sm/secondary', 'md/secondary', 'xl/secondary'],
  },
}

export const tertiary: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="space-y-md">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['sm/tertiary', 'md/tertiary', 'xl/tertiary'],
  },
}
