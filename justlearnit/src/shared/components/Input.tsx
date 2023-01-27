import classNames from "classnames";

interface IProps{
    primary: boolean | undefined;
    secondary: boolean | undefined;
    value: string;
    onChange: (value:string) => void;
    placeholder: string;
}

function Input({primary, secondary, value, onChange, placeholder}: IProps){

    const classes = classNames({'bg-grayMain':primary,
'bg-graySecondary':secondary}, "w-1/2 m-4 p-3 rounded")

    return(
        <input
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {onChange(e.target.value)}}
      ></input>
    )
}

export default Input