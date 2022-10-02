/* eslint-disable complexity */
// eslint disabled for saving time but the best approach for this is bind a thumbnail image on each category
import { ICategory } from '../../interface/Admin.interfaces';

import reactLogo from '../../assets/images/react-logo.svg';
import jsLogo from '../../assets/images/js-logo.svg';
import tsLogo from '../../assets/images/ts-logo.svg';
import dbLogo from '../../assets/images/db-logo.svg';
import nodeLogo from '../../assets/images/node-logo.svg';
import gitLogo from '../../assets/images/git-logo.svg';
import restLogo from '../../assets/images/rest-logo.svg';
import sequelizeLogo from '../../assets/images/sequelize-logo.svg';

interface ICategoriesThumb {
  categories: ICategory[];
}

export default function CategoriesThumb({ categories }: ICategoriesThumb) {
  return (
    <>
      {categories.some((cat) => cat.name === 'GIT')
      && <img src={gitLogo} alt='git-logo' />}
      {categories.some((cat) => cat.name === 'REACT')
      && <img src={reactLogo} alt='react-logo' />}
      {categories.some((cat) => cat.name === 'JAVASCRIPT')
      && <img src={jsLogo} alt='javascript-logo' />}
      {categories.some((cat) => cat.name === 'TYPESCRIPT')
      && <img src={tsLogo} alt='typescript-logo' />}
      {categories.some((cat) => cat.name === 'NODE')
      && <img src={nodeLogo} alt='node-logo' />}
      {categories.some((cat) => cat.name === 'SEQUELIZE')
      && <img src={sequelizeLogo} alt='sequelize-logo' />}
      {categories.some((cat) => cat.name === 'SQL'
      || cat.name === 'NOSQL')
      && (
        <>
          <img src={dbLogo} alt='database-logo' />
          <img src={restLogo} alt='rest-logo' />
        </>
      )}
    </>
  );
}