import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-3">
      {/* <div className="flex justify-center">
        <a href="mailto:duckai.ml@gmail.com">
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
      </div> */}

      <div>© 2023 DuckAI</div>
    </div>
  );
};

export default Footer;
