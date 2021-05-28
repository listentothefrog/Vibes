import { Features } from "./Feature/Features"

export const WelcomeScreen = () => {
    return (
        <div className="flex md:flex-col items-center justify-center">
            <div>
                <img style={{height: "150px", width: "250px", objectFit: "contain"}} src="https://github.com/listentothefrog/Vibes/blob/staging/logo.png?raw=true" alt="Logo"/>
            </div>
            <h3 className="text-2xl font-medium tracking-wide p-2">Connecting you and your people in your life closer.</h3>
            <Features />
            <button className="bg-blue-600 text-xl m-8 p-2.5 rounded-md font-medium">Login With Github</button>
        </div>
    )
}
