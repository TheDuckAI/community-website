import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Projects</h1>
        <div className={styles.projectsList}>
          <p>These are the projects we&apos;ve worked on:</p>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
          </ul>
        </div>
        <Link href="/">
          <a className={styles.link}>Go back to Home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Projects;
