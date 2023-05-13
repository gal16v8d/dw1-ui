import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './config/i18n/languageConfig';
import './index.css';
import reportWebVitals from './reportWebVitals';

if (import.meta.env.VITE_ENABLE_MOCKS == 'true') {
  import('./mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
