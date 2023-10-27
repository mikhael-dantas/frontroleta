import { useEffect, useState } from "react";
import Login from "./views/login";
import { loadState, saveState } from "./services/localStorage/";
import { AuthContext } from "./services/context/";
import { useContext } from "react";
import InternalPages from "./views/internalPages";
import "./App.css";


function App() {

  const { isLogged, setIsLogged } = useContext(AuthContext);
  //const [isLogged, setIsLogged] = useState(false)


  useEffect(() => {
    let user = loadState("user")

    if (user !== undefined) {
      setIsLogged(true)
    }
  }, [isLogged])

  return (
    <div>
      {isLogged === true && (
        <InternalPages></InternalPages>
      )}
      {isLogged === false && (
        <Login></Login>
      )}
    </div>
  );
}

export default App;
