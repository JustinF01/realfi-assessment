import { useContext } from "react";
import MainContext from "@/context/main.context";

const useMainContext = () => {
    return useContext(MainContext);
}

export default useMainContext;