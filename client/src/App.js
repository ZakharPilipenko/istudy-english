import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/UI/AppRouter";
import NavBar from "./components/UI/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index.js";
import { check } from "./http/userAPI";
import Spinner from "react-bootstrap/Spinner";
import Bees from "./components/UI/bees/Bees";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  return (
    <Router>
      <NavBar />
      <Bees />
      <AppRouter />
    </Router>
  );
});

export default App;
