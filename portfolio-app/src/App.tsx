import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

import { datasProjects } from "./datas";


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
        <Main
          sortProjects={sortProjects}
          datasProjects={projects}
        />
      <Footer />
    </>
  );
}

export default App;
