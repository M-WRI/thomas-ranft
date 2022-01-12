import Link from "next/link";

// style
import style from "../../styles/Navbar.module.css";

const Navbar = ({ site }) => {
  return (
    <asside className={style.navbarContainer}>
      <Link href="/">
        <a>
          <h3>Thomas Ranft</h3>
        </a>
      </Link>
      <div className={style.navYear}>
        <p>1967</p>
        <div className={style.separatorLine}></div>
        <p>2021</p>
      </div>
      <nav className={style.navigationBar}>
        <ul>
          {site === "index" ? (
            <>
              <li>
                <Link href="about" smooth={true} duration={500}>
                  <a>Über Ihn</a>
                </Link>
              </li>
              <li>
                <Link href="works" smooth={true} duration={500}>
                  <a>Werke</a>
                </Link>
              </li>
              <li>
                <Link href="awards" smooth={true} duration={500}>
                  <a>Referenzen</a>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/">
                <a>Zurück</a>
              </Link>
            </li>
          )}
          <li>
            <Link href="contact" smooth={true} duration={500}>
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>
    </asside>
  );
};

export default Navbar;
