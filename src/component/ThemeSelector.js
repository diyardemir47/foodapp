import { useContext } from 'react';
import './ThemeSelector.css';
import { ThemeContext } from '../contexts/ThemeContext';

import LightIcon from '../assets/light.svg';
import DarkIcon from '../assets/dark.svg';

const themeColors=["warning","danger","primary","success","dark"];


export default function ThemeSelector() {
const {changeColor,changeMode, mode}=useContext(ThemeContext);
const toggleMode=()=> {

    changeMode(mode==="dark" ? "light" : "dark")
}

console.log(mode);
    return(

        <div className="container theme-selector">
            <div className="mode-toggle">
                <img src={mode==="dark"? DarkIcon:LightIcon} alt="dark light mode"  onClick={toggleMode}/>
            </div>
<div className="theme-links">

    {  themeColors.map(color =>(
        <span key={color} className={`bg-${color}`} onClick={()=>changeColor(color)}></span>
    )  )}
</div>

        </div>
    )
}