import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import LargeHeading, { LargeHeadingVariant, largeHeadingStyles } from "./LargeHeading";

describe('LargeHeading component', () => {
    describe.each([
        ['large', largeHeadingStyles({ variant: 'large' })],
        ['xlarge', largeHeadingStyles({ variant: 'xlarge' })],
        ['xxlarge', largeHeadingStyles({ variant: 'xxlarge' })],
    ])('variant: %s', (variant, expectedClasses) => {
        it(`renders with the correct classes and html for variant: ${variant}`, () => {
            const { getByText } = render(<LargeHeading variant={variant as LargeHeadingVariant}>large heading</LargeHeading>)

            expect(getByText('large heading')).toHaveClass(expectedClasses)
            expect(getByText('large heading').tagName.toLowerCase()).toBe('h1')
        })

        it(`renders the correct content for variant: ${variant}`, () => {
            const { getByText } = render(<LargeHeading variant={variant as LargeHeadingVariant}>large heading</LargeHeading>)

            expect(getByText('large heading')).toHaveTextContent('large heading')
        })
    })

    it('applies additional className', () => {
        const variant = 'large'
        const expectedClasses = largeHeadingStyles({ variant: variant as LargeHeadingVariant })

        const { getByText } = render(
            <LargeHeading className='bg-red-500' variant='large'>
                large heading
            </LargeHeading>
        )

        expect(getByText('large heading')).toHaveClass(expectedClasses, 'bg-red-500')
    })

})