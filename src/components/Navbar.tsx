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
      <Link href="/">
        <a className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={175} height={175} />
        </a>
      </Link>
      <nav>
        <Link href="/about">
          <a>About Us</a>
        </Link>

        <Link href="/team">
          <a>Team</a>
        </Link>

        <Link href="/projects">
          <a>Our Work</a>
        </Link>

        <Link href="/blog">
          <a>Articles</a>
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
