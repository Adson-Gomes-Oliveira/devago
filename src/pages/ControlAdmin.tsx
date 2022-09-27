import { ReactElement } from 'react';

import PanelControlAdmin from '../components/ControlAdmin/Panel';
import Sidebar from '../components/ControlAdmin/Sidebar';
import './style.controlAdmin.css';

export default function ControlAdmin(): ReactElement {
  return (
    <section className="control-admin">
      <Sidebar />
      <div className="control-admin-body">
        <PanelControlAdmin />
      </div>
    </section>
  );
}