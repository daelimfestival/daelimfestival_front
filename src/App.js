import { Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import { Youtube1, Youtube2, Youtube3 } from "./routes/YoutubeLink";
import Community from "./routes/Community";
import Contest from "./routes/Contest";
import Goods from "./routes/Goods";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
      <Route path="/youtubelink1" component={Youtube1} />
      <Route path="/youtubelink2" component={Youtube2} />
      <Route path="/youtubelink2" component={Youtube3} />
      <Route path="/community" component={Community} />
      <Route path="/contest" component={Contest} />
      <Route path="/goods" component={Goods} />
      <Route path="/cookingclass" component={CookingClass} />
    </Router>
  );
}

export default App;