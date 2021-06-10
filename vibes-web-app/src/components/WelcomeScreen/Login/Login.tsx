import "./Login.css"
import { provider } from "../../../firebase/firebaseSetup";
import firebase from "firebase";

export const Login = () => {

    // google oauth 

    const googleauth = async () => {
        firebase.auth().signInWithPopup(provider).then((result) => {})
    } 
    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-white-900">Sign in with Google to continue</h2>
            </div>
            <div className="mt-8 space-y-6">
            <div>
                    <button onClick={googleauth}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Google
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}
