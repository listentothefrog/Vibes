import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen"
import {Dashboard} from "./components/Dashboard/Dashboard"
import { auth } from "./firebase/firebase.config"
import {useAuthState} from "react-firebase-hooks/auth"

const App = () => {
  const [user] = useAuthState(auth); 
  return (
    <div>
        {user ? <WelcomeScreen /> : <Dashboard />}
    </div>
  )
}

export default App