import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

const App = () => {
  const user = useContext(AuthContext)
  return (
        !user ? (
          <WelcomeScreen />
        ) : (
          <Dashboard />
        )
  )
}

export default App