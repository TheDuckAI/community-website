import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  return (
    <>
      <Link  href="/">
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={175} height={175} />
        </div>
      </Link>
      <nav>
        <Link href="/about">
          <div>About Us</div>
        </Link>

        <Link href="/team">
          <div>Team</div>
        </Link>

        <Link href="/projects">
          <div>Our Work</div>
        </Link>

        <Link href="/blog">
          <div>Articles</div>
        </Link>

        <a href="mailto:contact@duckai.org">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a
          href="https://github.com/TheDuckAI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://twitter.com/TheDuckAI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a
          href="https://discord.gg/myhu5pAEX7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
