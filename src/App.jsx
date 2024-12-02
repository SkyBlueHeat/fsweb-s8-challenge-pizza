import "./App.css";
import { Switch, Route } from "react-router-dom";
import SiparisFormu from "./pages/SiparisFormu";
import Giris from "./pages/Giris";
import Sonuc from "./pages/Sonuc";
import { useState } from "react";

function App() {
  const [userChoices, setUserChoices] = useState({});

  console.log(userChoices);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Giris />
        </Route>
      </Switch>
      <Switch>
        <Route path="/order-form">
          <SiparisFormu setUserChoices={setUserChoices} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/siparis-ozeti">
          <Sonuc userChoices={userChoices} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
