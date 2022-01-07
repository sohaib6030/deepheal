import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import "./index";
import Layout from "./Layout/Layout";
import GlobalProvider from "./ContextAPI/globalState";
import CreateThemeProvider from "./Styles/Theme";
// import Search from "./Pages/Search";
// import WatchVideo from "./Pages/WatchVideo";
// import Channel from "./Pages/Channel";
// import WatchLater from "./Pages/WatchLater";
// import Subscribes from "./Pages/Subscribes";
// import AddVideo from "./Pages/AddVideo";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StartStream from "./Pages/StreamContact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <GlobalProvider>
      <CreateThemeProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/search" component={Search} /> */}
              {/* <Route path="/watchvideo/:id" component={WatchVideo} />
              <Route path="/channel/:id" component={Channel} />
              <Route path="/watchlater" component={WatchLater} />
              <Route path="/subscribes" component={Subscribes} />
              <Route path="/add" component={AddVideo} /> */}
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/StartStream" component={StartStream} />
            </Switch>
          </Layout>
        </Router>
      </CreateThemeProvider>
    </GlobalProvider>
  );
}

export default App;
