export default function CardProject() {
  return (
    <article className="project project1 htmlProject cssProject jsProject bootstrapProject">
      <div className="card-header-Label">
        <div className="label">
          <p>In Progress</p>
        </div>
        <div className="links">
          <a
            href="https://github.com/EmiLy-Ly-san/AnimeArtMeteo"
            title="view code"
            target="_blank"
          >
            <img
              className="icon icon20"
              src="./src/assets/code-icon.svg"
              alt=""
              aria-hidden
            />
          </a>
          <a
            href="https://emily-ly-san.github.io/AnimeArtMeteo/"
            title="view demo project"
            target="_blank"
          >
            <img
              className="icon icon20"
              src="./src/assets/open-in-new-window-icon.svg"
              alt=""
              aria-hidden
            />
          </a>
        </div>
      </div>
      <div className="card-body">
        <img className="projectPicture" src="./src/assets/animeArtMeteo.JPG" />
        <h2>Anime Art Meteo</h2>
        <div className="infoProjectWrapper">
          <p className="description">
            Meteo web application who generates illustrations Work in progress
          </p>
          <p>
            API |Async | Collections user | modules JS | localStorage | CRUD
          </p>
        </div>
        <p>
          <strong>#HTML #JS #SCSS #BOOTSTRAP</strong>
        </p>
      </div>
    </article>
  );
}
