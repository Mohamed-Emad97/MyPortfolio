import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className={`navbar-brand ${styles.logo} fs-1`} href="#home">ME</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`${styles.link} nav-link`} href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.link} nav-link`} href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.link} nav-link`} href="#skiils">Skills</a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.link} nav-link`} href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.link} nav-link`} href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.link} nav-link`} href="#portfilio">Portfilio</a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.link} nav-link`} href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;