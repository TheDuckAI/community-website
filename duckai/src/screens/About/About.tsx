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
          Welcome to our landing site! We are a team of talented individuals
          dedicated to providing top-notch web solutions. Our passion for
          technology drives us to create amazing experiences for our clients.
        </p>
        <Link href="/">
          <a className={styles.link}>Go back to Home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default About;
