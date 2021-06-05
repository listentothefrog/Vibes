import "./Login.css"
import { useRef} from "react";
import { auth } from "../../../firebase/firebaseSetup";
export const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // create an account 

    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            )
        } catch(error) {
            alert(error)
        }
    }

    // login 

    const signIn = async () => {
        try{
            await auth.signInWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            )
        } catch(error) {
            alert(error)
        }
    }
    return (
        <div className="input-form-container">
            <div className="forms-inputs">
                <label>Email</label>
                <input className="user-input" type="email" ref={emailRef}placeholder="Email"/>
                <label>Password</label>
                <input className="user-input" ref={passwordRef} type="password" placeholder="Password"/>
                <div className="submit-btn">
                    <button className="button-sign-in" onClick={signIn}>Sign In</button>
                    <button className="button-sign-up" onClick={createAccount}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
