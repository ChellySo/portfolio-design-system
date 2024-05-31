import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Typography, { TypographyVariant, typographyStyles } from "./Typography";

describe('Typography/Typography', () => {
    describe.each([
        ['sm/fushia', typographyStyles({ size: 'sm', variant: 'fushia' })],
        ['md/fushia', typographyStyles({ size: 'md', variant: 'fushia' })],
        ['lg/fushia', typographyStyles({ size: 'lg', variant: 'fushia' })],
        ['xl/fushia', typographyStyles({ size: 'xl', variant: 'fushia' })],
        ['sm/lilac', typographyStyles({ size: 'sm', variant: 'lilac' })],
        ['md/lilac', typographyStyles({ size: 'md', variant: 'lilac' })],
        ['lg/lilac', typographyStyles({ size: 'lg', variant: 'lilac' })],
        ['xl/lilac', typographyStyles({ size: 'xl', variant: 'lilac' })],
    ])('variant: %s', (variant, expectedClasses) => {
        it(`renders with correct classes for variant': ${variant}`, () => {
            const { getByText } = render(<Typography variant={variant as TypographyVariant}>Text here</Typography>)
            expect(getByText('Text here')).toHaveClass(expectedClasses)
        })
    })

    it('renders the correct content', () => {
        const { getByText } = render(<Typography variant='md/lilac'>Text here</Typography>)
        expect(getByText('Text here')).toHaveTextContent('Text here')
    })

    it('applies additional classNames', () => {
        const variant = 'md/lilac'
        const expectedClasses = typographyStyles({ size: 'md', variant: 'lilac' })

        const { getByText } = render(
            <Typography variant={variant} className="text-center">
                Text here
            </Typography>
        )
        expect(getByText('Text here')).toHaveClass(expectedClasses, 'text-center')
    })
})