import { type FC, type PropsWithChildren } from "react"
import classes from "./CounterButton.module.scss"

type CounterButtonProps = PropsWithChildren & {
    onClick?: () => void
}

const CounterButton:FC<CounterButtonProps> = ({ children, onClick }) => {
    return (
        <button className={classes.counterButton} onClick={onClick}>
            {children}
        </button>
    )
}

export default CounterButton