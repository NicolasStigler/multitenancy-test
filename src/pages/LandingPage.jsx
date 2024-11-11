import React from 'react';
import { useNavigate } from 'react-router-dom';

const tenants = [
  { id: 'bestbuy', name: 'Bestbuy', logo: '/logos/dark.png' },
  { id: 'walmart', name: 'Walmart', logo: '/logos/light.png' },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleTenantSelect = (tenantId) => {
    navigate(`/${tenantId}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Selecciona tu tienda</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {tenants.map((tenant) => (
          <button
            key={tenant.id}
            onClick={() => handleTenantSelect(tenant.id)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            <img src={tenant.logo} alt={`${tenant.name} logo`} width={50} />
            <div>{tenant.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
