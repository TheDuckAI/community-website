import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>
        <p>These are the projects we&apos;ve worked on:</p>
        <div
          className={`${styles.projectContainer} ${
            expandedIndex === 0 ? styles.expanded : ''
          }`}
          onClick={() => toggleExpand(0)}
        >
          <div className={styles.projectBox}>Project 1</div>
        </div>
        <div
          className={`${styles.projectContainer} ${
            expandedIndex === 1 ? styles.expanded : ''
          }`}
          onClick={() => toggleExpand(1)}
        >
          <div className={styles.projectBox}>Project 2</div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
