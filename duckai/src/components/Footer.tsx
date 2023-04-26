// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <nav>
      <a href="mailto:email@example.com">Email</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
    </nav>
  );
};

export default Footer;
