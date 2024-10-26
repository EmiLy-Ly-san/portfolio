import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const datasProjects = [
  {
    id: 1,
    name: "Anime Art Meteo",
    label: "In Progress",
    hrefDemo: "https://emily-ly-san.github.io/AnimeArtMeteo/",
    hrefCode: "https://github.com/EmiLy-Ly-san/AnimeArtMeteo",
    picture: "./src/assets/animeArtMeteo.JPG",
    description:
      "Meteo web application who generates illustrations Work in progress",
    challenge:
      "API |Async | Collections user | modules JS | localStorage | CRUD",
    languages: ["html", "js", "scss", "bootstrap"],
  },
  {
    id: 2,
    name: "Anime Art Meteo",
    label: "In Progress",
    hrefDemo: "https://emily-ly-san.github.io/AnimeArtMeteo/",
    hrefCode: "https://github.com/EmiLy-Ly-san/AnimeArtMeteo",
    picture: "./src/assets/animeArtMeteo.JPG",
    description:
      "Meteo web application who generates illustrations Work in progress",
    challenge:
      "API |Async | Collections user | modules JS | localStorage | CRUD",
    languages: ["html", "js", "scss", "bootstrap"],
  },
  {
    id: 3,
    name: "Anime Art Meteo",
    label: "In Progress",
    hrefDemo: "https://emily-ly-san.github.io/AnimeArtMeteo/",
    hrefCode: "https://github.com/EmiLy-Ly-san/AnimeArtMeteo",
    picture: "./src/assets/animeArtMeteo.JPG",
    description:
      "Meteo web application who generates illustrations Work in progress",
    challenge:
      "API |Async | Collections user | modules JS | localStorage | CRUD",
    languages: ["html", "js", "scss", "bootstrap"],
  },
];

function App() {
  return (
    <>
      <Header />
      <Main datasProjects={datasProjects} />
      <Footer />
    </>
  );
}

export default App;
