import { useState } from "react";

interface SectionButtonsSortProps {
  sortProjects: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function SectionButtonsSort({
  sortProjects,
}: SectionButtonsSortProps) {
  const [indexActivButton, setIndexActivButton] = useState("0");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    sortProjects(event);
    const indexButton = `${event.currentTarget.dataset.index}`;
    setIndexActivButton(indexButton);
  };

  return (
    <section className="sortByWrapper">
      <button
        className={indexActivButton === "0" ? "active" : ""}
        type="button"
        data-index="0"
        data-language="all"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        #All
      </button>
      <button
        className={indexActivButton === "1" ? "active" : ""}
        type="button"
        data-index="1"
        data-language="html"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        #HTML
      </button>
      <button
        className={indexActivButton === "2" ? "active" : ""}
        type="button"
        data-index="2"
        data-language="css"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        #CSS/SCSS
      </button>
      <button
        className={indexActivButton === "3" ? "active" : ""}
        type="button"
        data-index="3"
        data-language="js"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        #JAVASCRIPT
      </button>
      <button
        className={indexActivButton === "4" ? "active" : ""}
        type="button"
        data-index="4"
        data-language="bootstrap"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        #BOOTSTRAP
      </button>
      <button
        className={indexActivButton === "5" ? "active" : ""}
        type="button"
        data-index="5"
        data-language="REACT"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        #REACT/TYPESCRIPT
      </button>
    </section>
  );
}

