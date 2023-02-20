import useNavgation from "../hooks/useNavigation";
function Route ({path, children}){
    const {currentPath} = useNavgation();

    if(path === currentPath){
        return children;
    }
    return null;
}
export default Route;