import React from 'react';

import { AuthProvider } from './auth';

const GlobalAppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default GlobalAppProvider;
