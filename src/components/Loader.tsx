import { CSSProperties } from 'react';
import RingLoader from 'react-spinners/RingLoader';

import { useAppSelector } from '../app/hooks';
import DevagoLogo from '../assets/images/devago-light-logo.svg';
import './style.loader.css';

const customCSSLoader: CSSProperties = {
};

export default function Loader(): JSX.Element {
  const isLoading = useAppSelector((state) => state.loadingToggle.isLoading);

  return (
    <section className={`loader ${!isLoading && 'hidden'}`}>
      <img src={DevagoLogo} alt="devago-logo" />
      <RingLoader
        color="#1486A8"
        loading={true}
        cssOverride={customCSSLoader}
      />
    </section>
  );
}