import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar.jsx';
import { Topbar } from './Topbar.jsx';
import '../css/MainLayout.css';

export function MainLayout() {
  return (
    <div className="layout-app">
      <Sidebar />
      <main className="conteudo-principal" style={{ marginLeft: '260px', flex: 1 }}>
        <Topbar />
        <div style={{ padding: '2rem' }}>
          <Outlet /> 
        </div>
      </main>
    </div>
  );
}