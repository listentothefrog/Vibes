import { auth } from "../../firebase/firebaseSetup"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

export const Dashboard = () => {
    const user = useContext(AuthContext)

    const signOut = async () => {
        await auth.signOut()
    }

    return (
        <div className="">
            <div className="flex flex-row items-center space-between">
                <img className="m-5 w-200" src="https://github.com/listentothefrog/Vibes/blob/staging/logo.png?raw=true" alt="logo"/>
                <button onClick={signOut}>Sign Out</button>
                <img src={user?.photoURL! as string} alt="user_profile" />
                <h2>{user?.displayName}</h2>
            </div>
        </div>
    )
}
