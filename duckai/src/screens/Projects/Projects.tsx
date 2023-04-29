import React from 'react';
import Layout from '../../components/Layout';
import styles from './Projects.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    name: 'DAAB',
    description: 'DuckAI Advanced Academic Benchmark is a new benchmark for evaluating LLMs not only on quantitative reasoning, but also on text comprehension and expert domain reasoning, designed to be much more challenging than prior benchmarks. DAAB contains questions requiring knowledge of mathematics, physics, biology, chemistry, and law.',
    status: 'In Progress',
    githubLink: 'https://github.com/TheDuckAI/DUCK-datasets',
  },
  {
    name: 'Donut OCR',
    description: 'An OCR model of quality comparable to proprietary OCR solutions that can generate bounding boxes around any word that appears on an image and label them with the corresponding word.',
    status: 'In Progress',
    githubLink: 'https://github.com/TheDuckAI/donut-ocr',
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
                <FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
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
