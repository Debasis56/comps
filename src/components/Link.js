
import classNames from "classnames";
import useNavgation from "../hooks/useNavigation";

function Link ({to, children, className, activeClassName}){

    const {navigate, currentPath} = useNavgation();
    const classes = classNames('text-blue-500', className, currentPath===to && activeClassName);



    const handleClick = (event) =>{
        console.log(event);
        if(event.metaKey || event.ctrlKey)
        return;
        event.preventDefault();
        navigate(to);


    }
    return <a className={classes} href = {to} onClick={handleClick}>{children}</a>
}

export default Link;