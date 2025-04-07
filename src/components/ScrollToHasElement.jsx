// ScrollToHashElement.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();
console.log(location.hash);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    {
        
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
