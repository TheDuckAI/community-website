import React from 'react';
import Layout from '../../components/Layout';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          The Open Source ML Community for Recursive Self-Improvement
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
