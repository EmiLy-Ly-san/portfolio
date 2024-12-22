export default function Header() {
  return (
    <header>
      <section>
        <h1>All My Projects in one page</h1>
        <div className="infosWrapper">
          <p>Emilie De Duyver</p>
          <p>Développeuse web</p>
        </div>
      </section>
      <nav>
        <a
          href="https://www.linkedin.com/in/emilie-de-duyver-83304229b/"
          target="blank"
        >
          <img className="icon icon20" src="./portfolio/assets/Linkedin.png" alt="" />
        </a>
        <a href="https://github.com/EmiLy-Ly-san" target="blank">
          <img className="icon icon20" src="./portfolio/assets/Github.png" alt="" />
        </a>
        <a href="https://codepen.io/EmiLy-Ly-san" target="blank">
          <img className="icon icon20" src="./portfolio/assets/Codepen.png" alt="" />
        </a>
      </nav>
    </header>
  );
}
