import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.description}>
        We are a group of researchers passionate about exploring the capabilities and potential of large language models and multimodal models. 
        Our current focus lies in developing and examining various dataset projects to understand the depth and performance of these models in diverse domains.
        </p>
      </div>
    </Layout>
  );
};

export default About;