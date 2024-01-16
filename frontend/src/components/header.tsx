import Sun from "../assets/sun.svg?react";
import Moon from "../assets/moon.svg?react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

type HeaderProp = {
    colorTheme: 'dark' | 'light',
    handleColorThemeChange: (themeColor: 'dark'|'light') => void
}

const Header = ({colorTheme, handleColorThemeChange}: HeaderProp) => {
    return(
        <header className='flex justify-between items-center px-4 py-2 h-20'>
        <div>
          <Nav />
        </div>
        <div className="flex justify-center items-center">
          <Link to="/" className="mx-4 py-3 rounded-lg bg-transparent text-slate-100 font-bold">
            Sign in
          </Link>
          <Link to="/" className="mx-4 px-8 py-3 rounded-lg bg-blue-600 text-slate-100 font-bold">
            Sign up
          </Link>
          <div className='w-7 cursor-pointer flex items-center justify-center'>
            {
              colorTheme === "dark"?
              <Sun className="w-100" onClick={() => handleColorThemeChange("light")}/>:
              <Moon className="w-100" onClick={() => handleColorThemeChange("dark")}/>
            }
          </div>
        </div>
      </header>
    )
}

export default Header;