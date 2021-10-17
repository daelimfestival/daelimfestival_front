import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Login from "./routes/Login";
import intro from "./routes/Intro";
import Guestbook from "./routes/GuestBook";
import Con from "./routes/Contest";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/Game" component={Game} />
      <Route path="/Login" component={Login} />
      <Route path="/Guest-Book" component={Guestbook} />
      <Route path="/Contest" component={Con} />
      <Route path="/intro" component={intro} />
    </BrowserRouter>
  );
}

export default App;