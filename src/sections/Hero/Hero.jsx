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

import CV from "../../assets/Selin-Kocaer-Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === "light" ? sun : moon;
    const twitterIcon = theme === "light" ? twitterLight : twitterDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const LinkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "selin-kocaer-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    <a href={CV} target="_blank" rel="noopener noreferrer">
        <button className="hover" onClick={handleDownload}>
            Resume
        </button>
    </a>;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Selin Kocaer" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>
                    Selin <br /> KOCAER
                </h1>
                <h2> Frontend Developer </h2>
                <span>
                    <a href="https://github.com/selinkocaer" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/selin-kocaer/" target="_blank">
                        <img src={LinkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                </span>
                <p className={styles.description}> With experience in both frontend and backend development, I focus on creating efficient, scalable, and user-friendly applications.</p>
                <a href={CV}>
                    <button className="hover" download>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
