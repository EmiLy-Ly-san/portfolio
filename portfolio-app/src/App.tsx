import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

const datasProjects = [
  {
    id: 1,
    name: "Pokedex",
    label: "NEW",
    hrefDemo: "https://mellerincharly.github.io/projet-quiz-nantes/",
    hrefCode: "https://github.com/MellerinCharly/projet-quiz-nantes",
    picture: "./src/assets/pokedex2.JPG",
    description:
      "Find your favorite pokemon in the first generation and check his description.",
    challenge:
      "Rules : react components architecture, data filtration, CSS animation",
    languages: ["REACT", "typescript", "css", "all"],
  },
  {
    id: 2,
    name: "Nantes Quest",
    label: "NEW",
    hrefDemo: "https://emily-ly-san.github.io/pokemon/",
    hrefCode: "https://github.com/EmiLy-Ly-san/pokemon",
    picture: "./src/assets/nantesQuest.JPG",
    description:
      "Web site who generates differents quizz about Nantes city in France, build in team",
    challenge:
      "Rules : code architecture in moduls, and JavaScript part",
    languages: ["html", "js", "css", "all"],
  },
  {
    id: 3,
    name: "Anime Art Meteo",
    label: "In Progress",
    hrefDemo: "https://emily-ly-san.github.io/AnimeArtMeteo/",
    hrefCode: "https://github.com/EmiLy-Ly-san/AnimeArtMeteo",
    picture: "./src/assets/animeArtMeteo.JPG",
    description:
      "Web meteo application who generates illustrations Work in progress",
    challenge:
      "API |Async | Collections user | modules JS | localStorage | CRUD",
    languages: ["html", "js", "scss", "bootstrap", "all"],
  },

  {
    id: 4,
    name: "Themed pomodoro",
    label: "",
    hrefDemo: "https://emily-ly-san.github.io/ThemedPomodoro/",
    hrefCode: "https://github.com/EmiLy-Ly-san/ThemedPomodoro",
    picture: "./src/assets/pomodoro.JPG",
    description:
      "Pomodoro with switch themes between Star Wars, Stranger Things and Animal Crossing",
    challenge: "CSS Animation | Switch theme | Responsive | State",
    languages: ["html", "js", "css", "all"],
  },
  {
    id: 5,
    name: "Animated rainbow",
    label: "",
    hrefDemo: "https://codepen.io/EmiLy-Ly-san/pen/gOyJKvm",
    hrefCode: "",
    picture: "./src/assets/rainbow.JPG",
    description: "Rainbow in mouvement",
    challenge: "Animation CSS | Drawing in CSS",
    languages: ["html", "css", "all"],
  },
  {
    id: 6,
    name: "Hanabie Drum Kit",
    label: "",
    hrefDemo: "https://emily-ly-san.github.io/js30-day1-Hanabie-Drum/",
    hrefCode: "https://github.com/EmiLy-Ly-san/js30-day1-Hanabie-Drum",
    picture: "./src/assets/hanabie.JPG",
    description:
      "Play with Hanabie, a Kawaii metal band, using your keyboard !",
    challenge: "User Keydown | Audio in JS | Button CSS Effect",
    languages: ["html", "css", "js", "all"],
  },
  {
    id: 7,
    name: "MangAzertype",
    label: "",
    hrefDemo: "https://emily-ly-san.github.io/MangaZerType/",
    hrefCode: "https://github.com/EmiLy-Ly-san/MangaZerType",
    picture: "./src/assets/mangazertype.JPG",
    description:
      "Educational typing games for children around the theme of children's manga",
    challenge: "Modal | User Choice | object CLASS | Unicorns!",
    languages: ["html", "scss", "js", "all"],
  },
  {
    id: 8,
    name: "Update CSS variables",
    label: null,
    hrefDemo: "https://codepen.io/EmiLy-Ly-san/pen/qBGpQbB",
    hrefCode: null,
    picture: "./src/assets/updatevariablesincss.JPG",
    description: "Variables CSS mofidied by user choice",
    challenge: "Dataset | Interactiv pick-color, blur and spacing",
    languages: ["html", "css", "js", "all"],
  },
  {
    id: 9,
    name: "Wich bass do you prefer ?",
    label: null,
    hrefDemo: "https://codepen.io/EmiLy-Ly-san/pen/YzbbqwE?editors=0110",
    hrefCode: null,
    picture: "./src/assets/wichbass.JPG",
    description:
      "Extendable panels to present differents colors of Fender Precision-Bass",
    challenge: "Toggle class | CSS transition",
    languages: ["html", "css", "js", "all"],
  },
  {
    id: 10,
    name: "Anime Art Clock",
    label: "",
    hrefDemo: "https://codepen.io/EmiLy-Ly-san/pen/wvbPqPv",
    hrefCode: "",
    picture: "./src/assets/animeArtClock.JPG",
    description: "Clock application",
    challenge: "Animation with JS | Glass effect in CSS",
    languages: ["html", "js", "css", "all"],
  },
  {
    id: 11,
    name: "GOT citations",
    label: "",
    hrefDemo: "https://emily-ly-san.github.io/GotCitationsGenerator/",
    hrefCode: "https://github.com/EmiLy-Ly-san/GotCitationsGenerator",
    picture: "./src/assets/got.JPG",
    description: "Games of thrones citations generator",
    challenge: "API | JS methods | Responsive",
    languages: ["html", "js", "css", "all"],
  },
];

const datasSentences = [
  {
    id: "sentence1",
    sentence: "Hello !",
  },
  {
    id: "sentence2",
    sentence: "THANK YOU ...",
  },
  {
    id: "sentence3",
    sentence: "for ...",
  },
  {
    id: "sentence4",
    sentence: "... your visit !",
  },
  {
    id: "sentence5",
    sentence: "See you ...",
  },
  {
    id: "sentence6",
    sentence: "... SOON !",
  },
];

function App() {
  const [projects, setProjects] = useState(datasProjects);
  const [currentGrid, setGrid] = useState("sortedProjects");
  useEffect(() => setGrid("pinnedProject"), [])
  console.log(currentGrid)

  const sortProjects = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newProjects = datasProjects.filter((project) => {
      return project.languages.includes(
        `${event.currentTarget.dataset.language}`
      );
    });
    console.log(currentGrid);
    setProjects(newProjects);
  };

  return (
    <>
      <Header />
        <Main
          currentGrid={currentGrid}
          setGrid={setGrid}
          sortProjects={sortProjects}
          datasProjects={projects}
          datasSentences={datasSentences}
        />
      <Footer />
    </>
  );
}

export default App;
