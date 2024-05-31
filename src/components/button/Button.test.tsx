import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button, { ButtonVariant, buttonStyles } from "./Button";

describe('Button/Button', () => {
  describe.each([
    ['sm/primary', buttonStyles({ size: 'sm', variant: 'primary', disabled: false, fullWidth: false })],
    ['md/primary', buttonStyles({ size: 'md', variant: 'primary', disabled: false, fullWidth: false })],
    ['xl/primary', buttonStyles({ size: 'xl', variant: 'primary', disabled: false, fullWidth: false })],
    ['sm/secondary', buttonStyles({ size: 'sm', variant: 'secondary', disabled: false, fullWidth: false })],
    ['md/secondary', buttonStyles({ size: 'md', variant: 'secondary', disabled: false, fullWidth: false })],
    ['xl/secondary', buttonStyles({ size: 'xl', variant: 'secondary', disabled: false, fullWidth: false })],
    ['sm/tertiary', buttonStyles({ size: 'sm', variant: 'tertiary', disabled: false, fullWidth: false })],
    ['md/tertiary', buttonStyles({ size: 'md', variant: 'tertiary', disabled: false, fullWidth: false })],
    ['xl/tertiary', buttonStyles({ size: 'xl', variant: 'tertiary', disabled: false, fullWidth: false })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with correct classes for variant': ${variant}`, () => {
      const { getByText } = render(<Button variant={variant as ButtonVariant}>Button here</Button>)
      expect(getByText('Button here')).toHaveClass(expectedClasses)
    })
  })

  it('renders the correct content', () => {
    const { getByText } = render(<Button variant="md/primary">Button here</Button>)

    expect(getByText('Button here')).toHaveTextContent('Button here')
  })

  it('renders a disabled button', () => {
    const { getByText } = render(
      <Button variant="md/primary" disabled>
        Button here
      </Button>,
    )

    expect(getByText('Button here')).toBeDisabled()
    expect(getByText('Button here')).toHaveClass('disabled:text-purple-400 pointer-events-none')
  })

  it('renders a full width button', () => {
    const { getByText } = render(
      <Button variant="md/primary" fullWidth>
        Button here
      </Button>,
    )

    expect(getByText('Button here')).toHaveClass('w-full')
  })

  it('passes the onClick', () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick}>Button here</Button>)

    fireEvent.click(screen.getByRole('button', { name: 'Button here' }))
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('applies additional classNames', () => {
    const variant = 'md/primary'
    const expectedClasses = buttonStyles({ size: 'md', variant: 'primary' })

    const { getByText } = render(
      <Button className="!bg-accent-blue-600" variant={variant}>
        Button here
      </Button>,
    )

    expect(getByText('Button here')).toHaveClass(expectedClasses, '!bg-accent-blue-600')
  })

})