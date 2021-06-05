import { auth } from "../../firebase/firebaseSetup"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

export const Dashboard = () => {
    const user = useContext(AuthContext)

    const signOut = async () => {
        await auth.signOut()
    }
    return (
        <div>
            <button onClick={signOut}>Sign out</button>
            <h1>Hello {user?.email}</h1>
        </div>
    )
}

