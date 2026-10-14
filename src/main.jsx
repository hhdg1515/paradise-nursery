import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/store';

// BrowserRouter's basename supports GitHub Pages at /<repository>/.
// Restore a deep link after GitHub Pages serves our 404.html fallback.
if (sessionStorage.redirect) {
  const target = sessionStorage.redirect;
  delete sessionStorage.redirect;
  history.replaceState(null, '', target);
}
const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base}><App/></BrowserRouter>
    </Provider>
  </React.StrictMode>
);
