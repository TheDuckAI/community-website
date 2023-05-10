// src/screens/Team/Team.tsx

import React from 'react';
import Layout from '../../components/Layout';
import styles from './Team.module.css';

const teamMembers = [
  {
    name: 'Aran Komatsuzaki',
    image: '/team/aran.jpeg',
  },
  {
    name: 'Tom Sawada',
    image: '/team/tom.jpeg',
  },
  {
    name: 'Alex Havrilla',
    image: '/team/alexh.jpeg',
  },
  {
    name: 'Pranav Tadepalli',
    image: '/team/pranav.jpeg',
  },
  {
    name: "Alex Kranias",
    image: '/team/alexk.jpeg',
  },
  {
    name: "Jeffrey Deng",
    image: '/team/jeff.jpeg',
  }
];

const Team: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Team</h1>
            <div className={styles.teamGrid}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.memberCard}>
                    <img src={member.image} className={styles.memberImage} alt={member.name} />
                    <h2 className={styles.memberName}>{member.name}</h2>
                    </div>
                ))}
            </div>

      </div>
    </Layout>
  );
};

export default Team;
