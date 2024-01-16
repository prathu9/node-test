import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
  const [colorTheme, setColorTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedColorTheme = localStorage.getItem("color-theme") as
      | "light"
      | "dark";
    if (storedColorTheme) {
      setColorTheme(storedColorTheme);
    }
  }, []);

  const handleColorThemeChange = (currentThemeColor: "light" | "dark") => {
    setColorTheme(currentThemeColor);
    localStorage.setItem("color-theme", currentThemeColor);
  };

  return (
    <div className={`${colorTheme} app w-100 h-full`}>
      <div className={`dark:bg-black text-content h-full`}>
        <Header
          colorTheme={colorTheme}
          handleColorThemeChange={handleColorThemeChange}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
