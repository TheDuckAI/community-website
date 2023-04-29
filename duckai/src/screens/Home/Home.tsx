import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <div className={styles.homeContent}>
            <Image
              src="/duck-contour-final.png"
              alt="Descriptive Alt Text"
              width={250}
              height={250}
            />
            <h1>The Open Source ML Community for Recursive Self-Improvement</h1>
          </div>
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
