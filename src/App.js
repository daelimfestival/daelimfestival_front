import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Login from "./routes/Login";
import intro from "./routes/Intro";
// import Goods from "./routes/Goods";
// import Tournament from "./routes/Tournament"
// import Community from "./routes/Community";
import Guestbook from "./routes/GuestBook";
import Con from "./routes/Contest";
// import Introduce from "./routes/Introduce";
// import Tarot from "./routes/Tarot";
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
        {/* <Route path="/goods" component={Goods} />
      <Route path="/tournament" component={Tournament} />
      <Route path="/community" component={Community} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/tarot" component={Tarot} /> */}
    </BrowserRouter>
  );
}

export default App;