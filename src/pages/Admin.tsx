import Panel from '../components/admin/Panel';
import Sidebar from '../components/admin/Sidebar';
import './style.admin.css';

export default function Admin(): JSX.Element {
  return (
    <section className="admin">
      <Sidebar />
      <Panel />
    </section>
  );
}