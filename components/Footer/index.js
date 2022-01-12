import Link from "next/link";

// style
import style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footerContent}>
        <h1>Kontakt</h1>
        <address className={style.address}>
          <a href="mailto:hello@thomasranft.de">hello@thomasranft.de</a>
        </address>
        <div className={style.socialMedia}>
          <div>
            <h3>Social</h3>
            <ul>
              <li>
                <Link href="#">
                  <a>Singulart</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Wikipedia</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Nathalia Laue</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>AV Kunsthandel</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Kunstsammlungen Chemnitz</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Credits</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
