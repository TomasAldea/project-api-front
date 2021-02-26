import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { CreateProjectForm } from "./views/CreateProjectForm/CreateProjectForm";
import {Navbar} from "../src/Components/Navbar/Navbar"
import {ProjectDetails} from "./views/ProjectDetails/ProjectDetails"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projectform">
          <CreateProjectForm />
        </Route>
        <Route exact path="/:projectId">
          <Home />
        </Route>
        <Route exact path="/projects/:projectId">
          <ProjectDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
