export default function SectionButtonsSort() {
  return (
    <section className="sortByWrapper">
      <button type="button" className="sortAllButton active">
        #All
      </button>
      <button type="button" className="sortHtmlButton">
        #HTML
      </button>
      <button type="button" className="sortCssButton">
        #CSS/SCSS
      </button>
      <button type="button" className="sortJsButton">
        #JAVASCRIPT
      </button>
      <button type="button" className="sortBstpButton">
        #BOOTSTRAP
      </button>
    </section>
  );
}
