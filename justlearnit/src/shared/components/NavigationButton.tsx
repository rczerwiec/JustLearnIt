import { Link } from "react-router-dom"

interface PropsTypes{
    icon: string,
    className: string,
    navigateTo: string,
}

function NavigationButton({icon, className, navigateTo}: PropsTypes){
    
    return(
        <Link to={`/${navigateTo}`}>
        <div className={className}><img className="m-3" src={icon} alt="Add Icon"></img></div>
        </Link>
    )
}

export default NavigationButton;