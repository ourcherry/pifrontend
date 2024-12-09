import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App.tsx';
import '@/index.css';
import { Toaster } from '@/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Toaster />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
