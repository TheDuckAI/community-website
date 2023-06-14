import React from "react";
import Layout from "../../components/Layout";
import styles from "./Projects.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    name: "Advanced Reasoning Benchmark (ARB) Project (previously: DAAB)",
    description:
      "advanced prompting methods, measure performance of LLMs to solve academic problems",
    status: "In Progress",
    githubLink: "https://github.com/TheDuckAI/DUCK-datasets",
  },
  {
    name: "Multimodal Dataset Project",
    description:
      "build dataset for training multimodal agents",
    status: "In Progress",
    githubLink: "https://github.com/TheDuckAI/multimodal-computer-dataset",
  },
  {
    name: "Minerva-OCR Project",
    description:
      "An OCR model of quality comparable to proprietary OCR solutions that can generate bounding boxes around any word that appears on an image and label them with the corresponding word.",
    status: "In Progress",
    githubLink: "https://github.com/TheDuckAI/donut-ocr",
  },
  {
    name: "Exploring video pretraining for sample efficient RL (aka #video-rl)",
    description:
      "Improve pre training of video models for sample efficient RL agents",
    status: "In Progress",
    githubLink: "https://github.com/TheDuckAI/video-rl",
  },
  {
    name: "Non-English GPTs and better datasets and tokenizers (aka #polylingual)",
    description:
      "Build higher-quality non-English datasets and tokenizers and finetune non-English GPTs out of a pretrained English GPT",
    status: "In Progress",
    githubLink: "https://github.com/TheDuckAI/polylingual",
  },
  {
    name: "Learning Machine Learning (aka #learning)",
    description:
      "bring people up to speed in SoTA machine learning",
    status: "In Progress",
    // githubLink: "https://github.com/TheDuckAI/",
  },
];

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          src="/duck-contour-final.png"
          alt="Descriptive Alt Text"
          width={100}
          height={100}
        />
        <h1 className={styles.heading}>Projects</h1>

        {projects.map((project, index) => (
          <div key={index} className={styles.projectBox}>
            <div className={styles.projectHeader}>
              <h2 className={styles.projectName}>{project.name}</h2>
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.githubIcon}
                />
              </a>
            </div>
            <span className={styles.statusText}>Status: {project.status}</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
