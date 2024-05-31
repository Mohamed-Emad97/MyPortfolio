import styles from "./Home.module.scss";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["React Front End Developer"], // Array of strings to type out
      typeSpeed: 50, // Typing speed in milliseconds
      showCursor: false,
    };

    if (typedRef.current) {
      new Typed(typedRef.current, options);
    }
  }, []);

  return (
    <>
    <section id={`${styles.home}`}>
      <div className={`${styles.caption}`}>
        <h1>Hello I am Mohamed Emad</h1>
        <p ref={typedRef}></p>
      </div>
    </section>
    </>
  )
}

export default Home;