import Console from './Console';

import './style.panel.css';

export default function Panel(): JSX.Element {
  return (
    <header className="panel-admin">
      <h1>Control Admin</h1>
      <Console />
    </header>
  );
}
