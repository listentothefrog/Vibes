import { Features } from "./Feature/Features"
import {githubProvider, googleProvider} from "../../firebase/authmethods"
import socialMediaAuth from "../../firebase/service/auth"

export const WelcomeScreen = () => {
    const handleOnClick = async (provider:any) => {
        const res = await socialMediaAuth(provider)
        console.log(res)
    }
    return (
        <div className="flex md:flex-col items-center justify-center">
            <div>
                <img style={{height: "150px", width: "250px", objectFit: "contain"}} src="https://github.com/listentothefrog/Vibes/blob/staging/logo.png?raw=true" alt="Logo"/>
            </div>
            <h3 className="text-2xl font-medium tracking-wide p-2">Connecting you and your people in your life closer.</h3>
            <Features />
            <button onClick={() => handleOnClick(googleProvider)} className="bg-red-600 text-xl m-2 p-2.5 rounded-md font-medium">Login With Google</button>
        </div>
    )
}
