import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TenantProvider, useTenant } from './contexts/TenantContext';
import TenantLogo from './components/TenantLogo';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <TenantProvider>
      <Router>
        <Main />
      </Router>
    </TenantProvider>
  );
};

const Main = () => {
  const { setTenantInfo, tenantInfo } = useTenant();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tenant = window.location.pathname.split('/')[1];

    if (tenant && tenant !== tenantInfo) {
      // Si hay un tenant en la URL y es diferente al guardado, setearlo
      setTenantInfo(tenant);
    } else if (!tenant && !tenantInfo) {
      // Si no hay tenant en la URL ni en el estado, redirigir a la LandingPage
      navigate('/');
    }
  }, [setTenantInfo, tenantInfo, navigate]);

  // Mostrar la LandingPage solo si no hay tenant_info ni tenant en la URL
  if (!tenantInfo && location.pathname === '/') {
    return <LandingPage />;
  }

  // Mostrar la pagina principal si hay tenant_info
  return (
    <div>
      <TenantLogo />
      <Home />
    </div>
  );
};

export default App;
