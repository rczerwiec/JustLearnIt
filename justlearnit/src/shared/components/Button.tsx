import classNames from "classnames";

interface IButtonProps{
    onClick: () => void;
    green?: boolean;
    red?: boolean;
    gray?: boolean;
    children: string;
}



function Button({onClick,red, green,gray, children}:IButtonProps){
    const classes = classNames('rounded-xl p-3 px-8 cursor-pointer', {"bg-greenMain hover:bg-greenHover":green, "bg-redMain hover:bg-redHover":red, "bg-graySecondary hover:bg-grayHover":gray})

    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;