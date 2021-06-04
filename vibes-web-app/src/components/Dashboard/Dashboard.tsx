import { auth } from "../../firebase/firebaseSetup"
export const Dashboard = () => {
    const signOut = async () => {
        await auth.signOut()
    }
    return (
        <div>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

