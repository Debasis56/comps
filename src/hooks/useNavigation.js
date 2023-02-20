import { useContext } from "react";
import NavigationContext from "../context/navigation";


function useNavgation(){
    return useContext(NavigationContext);
}
export default useNavgation;