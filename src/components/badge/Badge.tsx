import { classNames } from "@/styling"

const Badge: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, children, ...rest }) => {
    return (
        <div className={classNames('bg-purple-800 rounded px-3 py-2 inline text-fushia-400 font-mono font-medium text-md', className)} {...rest}>
            {children}
        </div>
    )
}

export default Badge