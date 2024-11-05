import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

//custom hook(useAuthContext): Herhangi bir bileşende doğrudan useAuthContext çağrılarak AuthContext içindeki değerlere ulaşılabilir. 
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('blog-user')) ||null);

    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
}