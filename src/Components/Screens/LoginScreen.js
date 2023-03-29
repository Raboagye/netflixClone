import { useState } from "react";
import classes from "./LoginScreen.module.css"
import SigninScreen from "./SigninScreen";

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)

    return ( 
        <div className={classes.Container}>
            <div className={classes.LoginScreen_logo}>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" />
                <button onClick={()=>setSignIn(true)}>Sign In</button>
            </div>
            <div className={classes.Background_Content_Container}>
                {signIn ? (<SigninScreen />
                    ) : (
                        <div className={classes.Background_Content}>
                            <h1>Unlimited films, Tv programmes and more.</h1>
                            <h3>Watch anywhere. Cancel at any time.</h3>
                            <h4>Ready to watch? Enter your email to create or restart your membership</h4>
                            <div className={classes.Input_Button}>
                                <input placeholder="Enter address" />
                                <button onClick={() => setSignIn(true)}>GET STARTED</button>
                            </div>
                        </div>
                    )
                }
                
            </div>
            
        </div>
     );
}
 
export default LoginScreen;