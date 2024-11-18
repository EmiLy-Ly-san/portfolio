import SectionButtonsSort from "./SectionButtonsSort";
import SectionGridProjects from "./SectionGridProjects";
import { Project } from "./CardProject";
import { Sentence } from "./SentenceArticle";

interface MainProps {
  datasProjects: Project[];
  datasSentences: Sentence[];
  sortProjects: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  setGrid: (className: string) => void;
  currentGrid: string;
}

export default function Main({
  datasProjects,
  datasSentences,
  sortProjects,
  setGrid,
  currentGrid
}: MainProps) {
  return (
    <main>
      <SectionButtonsSort setGrid={setGrid} sortProjects={sortProjects} />
      <SectionGridProjects
        currentGrid={currentGrid}
        setGrid={setGrid}
        datasProjects={datasProjects}
        datasSentences={datasSentences}
      />
    </main>
  );
}
