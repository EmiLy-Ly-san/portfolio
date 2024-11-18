
import CardProject, { Project } from "./CardProject";


interface SectionGridProjectsProps {
  datasProjects: Project[];
}

export default function SectionGridProjects({
  datasProjects,
}: SectionGridProjectsProps) {
 

  return (
    <section id="projectsGridContainer" className="sortedProjects">
      {datasProjects.map((project) => {
        return <CardProject {...project} key={project.id} />;
        {
          /*on peut spreader l'objet courant {...project} de la boucle, qui est en paramètres, pour assigner toutes ses propriétées en tant que props au composant*/
        }
      })}
    </section>
  );
}
