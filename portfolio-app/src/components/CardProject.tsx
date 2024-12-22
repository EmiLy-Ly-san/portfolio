export interface Project {
  id: number;
  name: string;
  label?: string | null;
  hrefDemo: string;
  hrefCode?: string | null;
  picture: string;
  description: string;
  challenge: string;
  languages: string[];
}

export type CardProjectProps = Project; // Le type des props du composant CardProject est le meme que le type d'un Projet

export default function CardProject({
  id,
  name,
  label,
  hrefDemo,
  hrefCode,
  picture,
  description,
  challenge,
  languages,
}: CardProjectProps) {
  return (
    <article
      className={`project project${id}`}
    >
      <div className="card-header-Label">
        <div className="label">{label? <p>{label}</p> : null}</div>
        <div className="links">
          {hrefCode ? (
            <a href={hrefCode} title="view code" target="_blank">
              <img
                className="icon icon20"
                src="./portfolio/assets/code-icon.svg"
                alt=""
                aria-hidden
              />
            </a>
          ) : null}
          <a href={hrefDemo} title="view demo project" target="_blank">
            <img
              className="icon icon20"
              src="./portfolio/assets/open-in-new-window-icon.svg"
              alt=""
              aria-hidden
            />
          </a>
        </div>
      </div>
      <div className="card-body">
        <img className="projectPicture" src={picture} />
        <h2>{name}</h2>
        <div className="infoProjectWrapper">
          <p className="description">{description}</p>
          <p>{challenge}</p>
        </div>
        <p>
          <strong>
            {languages
              .map((language) => `#${language.toUpperCase()}`)
              .join(" ")}
          </strong>
        </p>
      </div>
    </article>
  );
}
