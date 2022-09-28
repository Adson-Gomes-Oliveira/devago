import './style.sidebar.css';

export default function Sidebar(): JSX.Element {
  return (
    <section className="sidebar-admin">
      <div className="sidebar-header">
        <h1>Control Panel</h1>
        <span>v1.0.0</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><span>CREATE POST</span></li>
          <li><span>EDIT POST</span></li>
          <li><span>DELETE POST</span></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <span>Developed by Adson</span>
        <span>2022</span>
      </div>
    </section>
  );
}
