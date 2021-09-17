import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
// import Stamp from "./routes/Stamp";
// import Goods from "./routes/Goods";
// import Tournament from "./routes/Tournament"
// import Community from "./routes/Community";
// import Guestbook from "./routes/guestbook";
// import Contest from "./routes/Contest";
// import Introduce from "./routes/Introduce";
// import Tarot from "./routes/Tarot";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      {/* <Route path="/stamp" component={Stamp} /> */}
      {/* <Route path="/goods" component={Goods} />
      <Route path="/tournament" component={Tournament} />
      <Route path="/community" component={Community} />
      <Route path="/guestbook" component={Guestbook} />
      <Route path="/contest" component={Contest} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/tarot" component={Tarot} /> */}
    </HashRouter>
  );
}

export default App;