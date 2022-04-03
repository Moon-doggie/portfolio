import "./toggle.css";
import React, { useContext } from "react";
import {
	DarkMode,
	DarkModeOutlined,
	LightMode,
	LightModeOutlined,
} from "@mui/icons-material";
import { ThemeContext } from "../../context";

const Toggle = () => {
	const theme = useContext(ThemeContext);

	const handleClick = () => {
		theme.dispatch({ type: "TOGGLE" });
	};

	return (
		<div className="toggle">
			<LightModeOutlined className="toggle-icon" />
			<DarkModeOutlined className="toggle-icon" style={{color: theme.state.darkMode && "black"}}/>
			<div className="toggle-button" onClick={handleClick} style = {{left: theme.state.darkMode ? 0 : 25}}></div>
		</div>
	);
};

export default Toggle;
