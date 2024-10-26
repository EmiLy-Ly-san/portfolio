export interface Project {
  id: number;
  name: string;
  label: string;
  hrefDemo: string;
  hrefCode: string;
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
      className={`project project${id} htmlProject cssProject jsProject bootstrapProject`}
    >
      <div className="card-header-Label">
        <div className="label">
          <p>{label}</p>
        </div>
        <div className="links">
          <a href={hrefCode} title="view code" target="_blank">
            <img
              className="icon icon20"
              src="./src/assets/code-icon.svg"
              alt=""
              aria-hidden
            />
          </a>
          <a href={hrefDemo} title="view demo project" target="_blank">
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
