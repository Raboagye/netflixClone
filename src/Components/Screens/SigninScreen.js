import classes from "./SigninScreen.module.css"
import { useRef } from "react"
import { auth } from "../../firebase"

const SigninScreen = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((userAuth) => {
            console.log(userAuth)
        }).catch((error) => {
            alert(error.message)
        })

    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((userAuth) => {
            console.log(userAuth)
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className={classes.Container}>
            <div className={classes.SigninScreen_Content}>
                <div className={classes.SigninScreen_form}>
                    <h1>Sign In</h1>
                    <div className={classes.SigninScreen_input}>
                        <input ref={emailRef} type="email" placeholder="Email" />
                    </div>
                    <div className={classes.SigninScreen_input}>
                        <input ref={passwordRef} type="password" placeholder="Password" />
                    </div>
                    <div className={classes.Buttons}>
                        <button onClick={signIn}>Sign In</button>
                    </div>
                    <h3>New to netflix? <span className={classes.Signup_now} onClick={register}>Sign up now</span></h3>
                </div>
            </div>
        </div>
    );
}

export default SigninScreen;