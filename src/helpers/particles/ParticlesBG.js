/* eslint-disable camelcase */
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import configParticles from './configParticles';
import { useCallback, useMemo } from 'react';

export default function ParticlesBackground() {
  const options = useMemo(() => {
    return {
      ...configParticles,
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  
  return (
    <Particles init={particlesInit} options={options}></Particles>
  );
}
