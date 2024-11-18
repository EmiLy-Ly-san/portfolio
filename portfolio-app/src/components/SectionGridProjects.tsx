
import CardProject, { Project } from "./CardProject";
import SentenceArticle, { Sentence } from "./SentenceArticle";


interface SectionGridProjectsProps {
  datasProjects: Project[];
  datasSentences: Sentence[];
  setGrid: (className: string) => void;
  currentGrid: string;
}

export default function SectionGridProjects({
  datasProjects,
  datasSentences,
  currentGrid,
}: SectionGridProjectsProps) {
 

  return (
    <section className={currentGrid} id="projectsGridContainer">
      {datasSentences.map((sentence) => {
        return <SentenceArticle {...sentence} key={sentence.id} />;
      })}
      {datasProjects.map((project) => {
        return <CardProject {...project} key={project.id} />;
        {
          /*on peut spreader l'objet courant {...project} de la boucle, qui est en paramètres, pour assigner toutes ses propriétées en tant que props au composant*/
        }
      })}
    </section>
  );
}
