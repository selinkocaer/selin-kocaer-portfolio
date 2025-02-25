import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import LinkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === "light" ? sun : moon;
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Selin Kocaer" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info} />
            <h1>
                Selin <br /> KOCAER
            </h1>
            <h2> Frontend Developer </h2>
            <span>
                <a href="https://twitter.com" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://Linkedin.com" target="_blank">
                    <img src={LinkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p> With a possion for developing modern React web apps for commercial businesses.</p>
            <a href={CV}>
                <button className="hover" download>
                    Resume
                </button>
            </a>
        </section>
    );
}

export default Hero;
