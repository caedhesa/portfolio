import { useEffect } from "react";

function ScrollToTopOnMount() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 400);
      
        return () => clearTimeout(timeout);
        },[]);

    
    return null;
}

export default ScrollToTopOnMount