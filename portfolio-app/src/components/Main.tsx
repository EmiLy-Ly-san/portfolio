import SectionButtonsSort from "./SectionButtonsSort";
import SectionGridProjects from "./SectionGridProjects";
import { Project } from "./CardProject";
import { Sentence } from "./SentenceArticle";

interface MainProps {
  datasProjects: Project[];
  datasSentences: Sentence[];
}

export default function Main({ datasProjects, datasSentences }: MainProps) {
  return (
    <main>
      <SectionButtonsSort />
      <SectionGridProjects
        datasProjects={datasProjects}
        datasSentences={datasSentences}
      />
    </main>
  );
}
