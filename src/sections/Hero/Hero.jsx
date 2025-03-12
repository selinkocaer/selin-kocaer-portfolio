import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === "light" ? sun : moon;
    const twitterIcon = theme === "light" ? twitterLight : twitterDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const LinkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Selin Kocaer" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
            </div>
            {/* HATA BURADAYDI: div'i self-closing yerine açık kapalı hale getirdik */}
            <div className={styles.info}>
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
                <p className={styles.description}> With a passion for developing modern React web apps for commercial businesses.</p>
                <a href={CV}>
                    <button className="hover" download>
                        Resume
                    </button>
                </a>
            </div>{" "}
            {/* Buradaki div hatalı kapanmıştı, şimdi düzeldi */}
        </section>
    );
}

export default Hero;
