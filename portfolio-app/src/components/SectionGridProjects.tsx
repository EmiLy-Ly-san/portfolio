import { useOutletContext } from "react-router";
import CardProject, { Project } from "./CardProject";




export default function SectionGridProjects() {
 
const { projects }: { projects: Project[]} = useOutletContext();
  return (
    <section id="projectsGridContainer" className="sortedProjects">
      {projects.map((project) => {
        return <CardProject {...project} key={project.id} />;
        {
          /*on peut spreader l'objet courant {...project} de la boucle, qui est en paramètres, pour assigner toutes ses propriétées en tant que props au composant*/
        }
      })}
    </section>
  );
}
