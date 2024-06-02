import { classNames } from "@/styling"
import Typography from "../typography/Typography"

const Badge: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, children, ...rest }) => {
    return (
        <Typography variant="md/fushia" className={classNames('bg-purple-800 rounded px-3 py-2 inline', className)} {...rest}>
            {children}
        </Typography>
    )
}

export default Badge