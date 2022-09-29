import Panel from '../components/admin/Panel';
import Sidebar from '../components/admin/Sidebar';
import './style.controlAdmin.css';

export default function Admin(): JSX.Element {
  return (
    <section className="admin">
      <Sidebar />
      <div className="admin-body">
        <Panel />
      </div>
    </section>
  );
}