import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import MessagePage from '@/pages/Message/index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MessagePage />
    </BrowserRouter>
  </StrictMode>
);
