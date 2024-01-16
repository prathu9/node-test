import './App.css'
import { useEffect, useState } from 'react';
import Sun from "./assets/sun.svg?react";
import Moon from "./assets/moon.svg?react";

function App() {
  const [colorTheme, setColorTheme] = useState<"light"|"dark">("dark");

  useEffect(() => {
    const storedColorTheme = localStorage.getItem('color-theme') as "light" | "dark";
    if(storedColorTheme){
      setColorTheme(storedColorTheme);
    }
  },[])

  const handleColorThemeChange = (currentThemeColor: "light"|"dark") => {
      setColorTheme(currentThemeColor);
      localStorage.setItem("color-theme",currentThemeColor);
  }

  return (
    <div className={`${colorTheme} app w-100 h-full`}>
      <div className={`dark:bg-black text-content h-full`}>
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
      </div>
    </div>
  )
}

export default App
