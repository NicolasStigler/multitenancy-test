import React from 'react';
import { useTenant } from '../contexts/TenantContext';

const TenantLogo = () => {
  const { tenant } = useTenant();

  const logos = {
    tenant1: '/assets/logos/dark.png',
    tenant2: '/assets/logos/light.png',
  };

  return (
    <div>
      {tenant && <img src={logos[tenant]} alt={`${tenant} logo`} />}
    </div>
  );
};

export default TenantLogo;