import { ReactElement } from 'react';
import Console from './Console';

import './style.panel.css';

export default function Panel(): ReactElement {
  return (
    <header className="panel-control-admin">
      <h1>Control Admin</h1>
      <Console />
    </header>
  );
}
