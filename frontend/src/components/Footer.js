import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const Footer = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <footer className={`h-fit ${theme.text} text-white md:flex md:justify-around items-center p-4 mt-16 mb-0 font-nunito border-t-2 mx-4 border-gray-500`}>
      <div>
        <h2 className="uppercase my-2 text-2xl tracking-widest">
          contact info:
        </h2>
        <p className="mb-1">geenine77@gmail.com</p>
        <p>+234 807-061-3801</p>
      </div>

      <div>
        <p>&copy; 2024 Ingenious Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
