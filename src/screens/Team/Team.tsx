// src/screens/Team/Team.tsx

import React from "react";
import Layout from "../../components/Layout";
import styles from "./Team.module.css";
import Image from "next/image";

const teamMembers = [
  {
    name: "Aran Komatsuzaki",
    image: "/team/aran.jpeg",
    links: "https://twitter.com/arankomatsuzaki", 
  },
  {
    name: "Tom Sawada",
    image: "/team/tom.jpeg",
    links: "https://tomohiro-sawada.github.io/", 
  },
  {
    name: "Kshitij Gupta",
    image: "/team/kshitij.jpg",
    links: "https://kshitijkg.github.io/", 
  },
  {
    name: "Alex Havrilla",
    image: "/team/alexh.jpeg",
    links: "https://dahoas.github.io/", 
  },
  {
    name: "Pranav Tadepalli",
    image: "/team/pranav.jpeg",
    links: "https://pranav.cc/", 
  },
  {
    name: "Alex Kranias",
    image: "/team/alexk.jpeg",
    links: "https://alexkranias.com/index.html", 
  },
  {
    name: "Jeffrey Deng",
    image: "/team/jeff.jpeg",
    links: "https://jeffreydeng.vercel.app/", 
  },
];

const Team: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          src="/duck-contour-final.png"
          alt="Descriptive Alt Text"
          width={100}
          height={100}
      
        />
        <h1 className={styles.heading}>Our Team</h1>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div className={styles.memberCard}>
              <Image
                key={member.name}
                src={member.image}
                className={styles.memberImage}
                alt={member.name}
                width={100}
                height={100}
              />
              <h2 className={styles.memberName}>{member.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
