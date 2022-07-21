import { useContext } from "react";
import { ThemeContext } from "../contex/ThemeContext";

export const useTheme = () => useContext(ThemeContext)