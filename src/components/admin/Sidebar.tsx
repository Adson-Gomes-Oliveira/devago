import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setConsoleMode } from '../../features/admin.general';
import { ConsoleModeType } from '../../interface/Admin.interfaces';
import './style.sidebar.css';

export default function Sidebar(): JSX.Element {
  const dispatch = useAppDispatch();
  const stateGeneral = useAppSelector((state) => state.adminGeneral);

  function handleConsoleMode(mode: ConsoleModeType): void {
    dispatch(setConsoleMode(mode));
  }

  return (
    <section className="sidebar-admin">
      <div className="sidebar-header">
        <h1>Control Panel</h1>
        <span>v1.0.0</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => handleConsoleMode('CREATE')} className={
            stateGeneral.consoleMode === 'CREATE' ? 'selected-option' : ''
          }><span>CREATE POST</span></li>
          <li onClick={() => handleConsoleMode('EDIT')} className={
            stateGeneral.consoleMode === 'EDIT' ? 'selected-option' : ''
          }><span>EDIT POST</span></li>
          <li onClick={() => handleConsoleMode('DELETE')} className={
            stateGeneral.consoleMode === 'DELETE' ? 'selected-option' : ''
          }><span>DELETE POST</span></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <span>Developed by Adson</span>
        <span>2022</span>
      </div>
    </section>
  );
}
