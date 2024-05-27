import { useState } from "react";

export function useThemeState() {
    const [currentTheme, setCurrentTheme] = useState(false);					 												
    function changeTheme() { 									
        setCurrentTheme(!currentTheme); 								
    }														
    return {currentTheme, changeTheme};	
}