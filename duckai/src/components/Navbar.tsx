import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={175}
            height={175}
          />
        </a>
      </Link>
      <nav>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/projects">
          <a>Our Work</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
