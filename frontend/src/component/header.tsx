import Sun from "../assets/sun.svg?react";
import Moon from "../assets/moon.svg?react";

type HeaderProp = {
    colorTheme: 'dark' | 'light',
    handleColorThemeChange: (themeColor: 'dark'|'light') => void
}

const Header = ({colorTheme, handleColorThemeChange}: HeaderProp) => {
    return(
        <header className='flex justify-between px-4 py-2 h-40'>
        <div></div>
        <div className='w-12 cursor-pointer'>
          {
            colorTheme === "dark"?
            <Sun onClick={() => handleColorThemeChange("light")}/>:
            <Moon onClick={() => handleColorThemeChange("dark")}/>
          }
        </div>
      </header>
    )
}

export default Header;