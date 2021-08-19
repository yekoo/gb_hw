import {useContext} from 'react';

import { ThemeContext } from "../theme-context"
import styles from "./header.module.css"

export function Header() {
  const {theme, changeTheme} = useContext(ThemeContext);
  return (
  <div className={styles.header}>
    
        <h3 style={{color: theme.theme.color}}>Header {theme.name}</h3>
        <button onClick={()=>  changeTheme("dark")}>set Darkness</button>
        <button onClick={()=>changeTheme("light")}>set Light</button>
         
    </div>)
}

// return (<div className={styles.header}>
//   <ThemeContext.Consumer>
//     {({theme, changeTheme}) => {
//       console.log(theme);
//       return (
//         <>
//           <h3 style={{color: theme.theme.color}}>Header {theme.name}</h3>
//           <button onClick={()=>changeTheme("dark")}>set Darkness</button>
//           <button onClick={()=>changeTheme("light")}>set Light</button>
//         </>
//       )
//     }}
//   </ThemeContext.Consumer>
//   </div>)