import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Явно указываем расширение для Vite
import './index.css';
import './i18n.ts'; // Гарантируем, что конфиг переводов загрузится первым

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element. Check your index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);