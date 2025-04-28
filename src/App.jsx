// import Memoziation from "./Component/useMemoHook/Memoziation.jsx"
import UtilisingHook from "./Component/CustomHook/UtilisingHook.jsx"
import useCustomHook from "./Component/CustomHook/useCustomHook.jsx";
// import UseRefHook from './Component/useRefHook/UseRefHook.jsx';
// import Example from './Component/useRefHook/Example.jsx'
// import { ThemeProvider } from "./Component/useContextApi/ThemeProvider.jsx";
// import ThemeContext from "./Component/useContextApi/ThemeContext.jsx";
// import { ChildComponent } from "./Component/useContextApi/ChildComponent.jsx";
// import { useState } from "react";
// import DebouncedSearch from "./Component/DebouncedSearch.jsx";


//Providing the useContext to the child component
export default function App() {
    // const [theme,setTheme]  = useState('light');

    return (
        <div>
            {/* <Memoziation/> */}
            <UtilisingHook/>
            <useCustomHook />
            
            {/* <UseRefHook/> */}
            {/* <Example/> */}
            
            {/* <ThemeContext.Provider value={theme} >
                <ChildComponent/>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light') }>Toggle Theme</button>
            </ThemeContext.Provider> */}

            {/* <DebouncedSearch/> */}
        </div>
    );
};