import SectionButtonsSort from "./SectionButtonsSort";
import SectionGridProjects from "./SectionGridProjects";
import { Project } from "./CardProject";

interface MainProps {
  datasProjects: Project[];
  sortProjects: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function Main({
  datasProjects,
  sortProjects,
}: MainProps) {
  return (
    <main>
      <SectionButtonsSort sortProjects={sortProjects} />
      <SectionGridProjects
        datasProjects={datasProjects}
      />
    </main>
  );
}
