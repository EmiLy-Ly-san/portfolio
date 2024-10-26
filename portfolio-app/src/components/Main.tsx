import SectionButtonsSort from "./SectionButtonsSort";
import SectionGridProjects from "./SectionGridProjects";
import { Project } from "./CardProject";

interface MainProps {
  datasProjects: Project[];
}

export default function Main({ datasProjects }: MainProps) {
  return (
    <main>
      <SectionButtonsSort />
      <SectionGridProjects datasProjects={datasProjects} />
    </main>
  );
}
