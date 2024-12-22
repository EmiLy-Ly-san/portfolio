import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

import { datasProjects } from "./datas";
import { Outlet } from "react-router";


function App() {
  const [projects, setProjects] = useState(datasProjects);
 
  const sortProjects = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newProjects = datasProjects.filter((project) => {
      return project.languages.includes(
        `${event.currentTarget.dataset.language}`
      );
    });
    setProjects(newProjects);
  };

  return (
    <>
      <Header />
        <Outlet context={{sortProjects, projects}} />
      <Footer />
    </>
  );
}

export default App;
