import React from 'react';

import ParticlesBackground from '../helpers/particles/ParticlesBG';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

import './style.home.css';

export default function Home({
  Children
}: {
  Children: React.FunctionComponent;
}) {
  return (
    <>
      <ParticlesBackground />
      <section className="home">
        <Header />
        <Children />
        <Footer />
      </section>
    </>
  );
}
