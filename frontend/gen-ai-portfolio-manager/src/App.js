// App.js
import React from "react";
import "./App.css"
import PortfolioManagerForm from "./components/PortfolioManagerForm";
// import PortfolioManagerList from './components/PortfolioManagerList';
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";

function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/portfolio-managers">Portfolio Managers</Link>
    //         </li>
    //         <li>
    //           <Link to="/projects">Projects</Link>
    //         </li>
    //         <li>
    //           <Link to="/tasks">Tasks</Link>
    //         </li>
    //         <li>
    //           <Link to="/resources">Resources</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Switch>
    //       {/* Portfolio Managers */}
    //       <Route path="/portfolio-managers" exact>
    //         <PortfolioManagerForm />
    //         {/* <PortfolioManagerList /> */}
    //       </Route>

    //       {/* Projects */}
    //       <Route path="/projects" exact>
    //         <ProjectForm />
    //         <ProjectList />
    //       </Route>

    //       {/* Tasks */}
    //       <Route path="/tasks" exact>
    //         <TaskForm />
    //         <TaskList />
    //       </Route>

    //       {/* Resources */}
    //       <Route path="/resources" exact>
    //         <ResourceForm />
    //         <ResourceList />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <>
      <div>
        <PortfolioManagerForm />
        <ProjectForm />
        <ProjectList />
        <ResourceForm />
        <ResourceList />
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
}

export default App;
