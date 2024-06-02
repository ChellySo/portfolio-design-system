import { classNames } from '@/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

export const typographyStyles = cva('font-medium', {
    variants: {
        variant: {
            fushia: 'text-fushia-400 font-mono',
            lilac: 'text-purple-400 font-sans',
        },
        size: {
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
        },
    },
})

export type TypographyStylesProps = VariantProps<typeof typographyStyles>
export type TypographyVariant = `${NonNullable<TypographyStylesProps['size']>}/${NonNullable<TypographyStylesProps['variant']>}`

export interface TypographyProps extends React.ComponentPropsWithRef<'p'> {
    /**
     * This prop is of type string and is used to determine the text appearance of the component. It has a default value of medium/lilac.
     * The format of this string should be size/variant, where size is one of sm, md, lg or xl and variant is one of fushia or lilac.
     * For example, to set the size to medium and the variant to fushia, the variant prop would be set to "md/fushia".
     * @default "md/lilac"
     */
    variant?: TypographyVariant
    /**
     * Additional styles for the component.
     */
    className?: string
    /**
     * Children elements of the component.
     */
    children: React.ReactNode
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
    ({
        className,
        children,
        variant = 'md/lilac',
        ...rest
    }: TypographyProps, ref) => {
        const [size, TypographyVariant] = variant.split('/') as [TypographyStylesProps['size'], TypographyStylesProps['variant']]

        return (
            <p ref={ref} className={classNames(className, typographyStyles({ size, variant: TypographyVariant }))} {...rest}>
                {children}
            </p>
        )
    },
)

export default Typography