import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
      <Image
              src="/duck-contour-final.png"
              alt="Descriptive Alt Text"
              width={150}
              height={150}
            />
      <h1 className={styles.heading}>About Us</h1>
      
        <p className={styles.description}>
        We are a team of researchers hailing from the Georgia Institute of Technology and beyond, driven by our passion for investigating the potential of large language models and multimodal systems. Our present endeavors concentrate on the development and analysis of a variety of dataset projects, with the aim of comprehending the depth and performance of these models across diverse domains.
        </p>
      </div>
    </Layout>
  );
};

export default About;