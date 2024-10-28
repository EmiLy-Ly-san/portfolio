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
      "Web meteo application who generates illustrations Work in progress",
    challenge:
      "API |Async | Collections user | modules JS | localStorage | CRUD",
    languages: ["html", "js", "scss", "bootstrap"],
  },
  {
    id: 2,
    name: "Anime Art Clock",
    label: "",
    hrefDemo: "https://codepen.io/EmiLy-Ly-san/pen/wvbPqPv",
    hrefCode: "",
    picture: "./src/assets/animeArtClock.JPG",
    description: "Clock application",
    challenge: "Animation with JS | Glass effect in CSS",
    languages: ["html", "js", "css"],
  },
  {
    id: 3,
    name: "GOT citations",
    label: "",
    hrefDemo: "https://emily-ly-san.github.io/GotCitationsGenerator/",
    hrefCode: "https://github.com/EmiLy-Ly-san/GotCitationsGenerator",
    picture: "./src/assets/got.JPG",
    description: "Games of thrones citations generator",
    challenge: "API | JS methods | Responsive",
    languages: ["html", "js", "css"],
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
    languages: ["html", "js", "css"],
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
    languages: ["html", "css"],
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
    languages: ["html", "css", "js"],
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
    languages: ["html", "scss", "js"],
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
    languages: ["html", "css", "js"],
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
    languages: ["html", "css", "js"],
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
  return (
    <>
      <Header />
      <Main datasProjects={datasProjects} datasSentences={datasSentences} />
      <Footer />
    </>
  );
}

export default App;
