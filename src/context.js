import {createContext , useState} from 'react';


 export const MyContext = createContext();

function AppContext({children}) {
    const[user,setUser]=useState(null);

   

    return(
        <MyContext.Provider value={{user,setUser}}>{children}</MyContext.Provider>
    );
}
export default AppContext;