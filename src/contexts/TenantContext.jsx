import React, { createContext, useContext, useState } from 'react';

const TenantContext = createContext();

export const TenantProvider = ({ children }) => {
  const [tenant, setTenant] = useState(null);

  const setTenantInfo = (tenantInfo) => {
    setTenant(tenantInfo);
  };

  return (
    <TenantContext.Provider value={{ tenant, setTenantInfo }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  return useContext(TenantContext);
};