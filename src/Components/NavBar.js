import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import classes from "./NavBar.module.css"

const NavBar = () => {
    const [navColor, setNavColor] = useState(true)

    const navigate = useNavigate()
    
    const transition = () => {
        if (window.scrollY > 100) {
            setNavColor(false)
        } else{
            setNavColor(true)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transition)
        return()=> window.removeEventListener("scroll", transition)
    },[window.scrollY])

    return ( 
        <div className={navColor? classes.NavBar : classes.NavBar2}>
            <div className={classes.Logo}>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" onClick={()=>navigate("/")}/>
            </div>

            <div className={classes.Avatar} onClick={()=>navigate("/profile")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix Avatar"/>
            </div>
        </div>
     );
}
 
export default NavBar;
