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
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">Sign in to your account</h2>
            </div>
            <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    ref={emailRef}
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    ref={passwordRef}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                />
                </div>
            </div>

                <div>
                    <button onClick={signIn}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Sign in
                    </button>
                </div>
                <div>
                    <button onClick={createAccount}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Sign Up
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}
